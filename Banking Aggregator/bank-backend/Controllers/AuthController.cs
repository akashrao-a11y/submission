
using BankManagementSystem.Data;
using BankManagementSystem.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BankManagementSystem.Controllers
{
    public class LoginRequest
    {
        [System.Text.Json.Serialization.JsonPropertyName("email")]
        public string Email { get; set; }

        [System.Text.Json.Serialization.JsonPropertyName("password")]
        public string Password { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;

        public AuthController(AppDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        public class RegisterRequest
        {
            [System.ComponentModel.DataAnnotations.Required]
            [System.Text.Json.Serialization.JsonPropertyName("firstName")]
            public string FirstName { get; set; }

            [System.ComponentModel.DataAnnotations.Required]
            [System.Text.Json.Serialization.JsonPropertyName("lastName")]
            public string LastName { get; set; }

            [System.ComponentModel.DataAnnotations.Required]
            [System.Text.Json.Serialization.JsonPropertyName("email")]
            public string Email { get; set; }

            [System.ComponentModel.DataAnnotations.Required]
            [System.Text.Json.Serialization.JsonPropertyName("password")]
            public string Password { get; set; }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.FirstName) || string.IsNullOrWhiteSpace(request.LastName) || string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest(new { message = "All fields are required." });
            }

            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (existingUser != null)
            {
                return BadRequest(new { message = "Email already registered." });
            }

            var user = new User
            {
                FullName = $"{request.FirstName} {request.LastName}",
                Email = request.Email,
                PasswordHash = request.Password, // In production, hash the password!
                Role = "User",
                CreatedAt = DateTime.UtcNow,
                Status = true
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User registered successfully!" });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == request.Email && u.PasswordHash == request.Password);

            if (user == null)
                return Unauthorized(new { message = "Invalid email or password." });

            var token = GenerateJwtToken(user);
            return Ok(new { Token = token, user.FullName, user.Role });
        }

        private string GenerateJwtToken(User user)
        {
            var jwtSettings = _config.GetSection("Jwt");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim("role", user.Role ?? "User"),
                new Claim("name", user.FullName ?? ""),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(Convert.ToDouble(jwtSettings["DurationInMinutes"])),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
