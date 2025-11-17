using BankManagementSystem.Data;
using BankManagementSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BankManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TransactionController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TransactionController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetTransactions([FromQuery] int? accountId, [FromQuery] DateTime? from, [FromQuery] DateTime? to)
        {
            var query = _context.Transactions.AsQueryable();
            if (accountId.HasValue)
                query = query.Where(t => t.AccountId == accountId.Value);
            if (from.HasValue)
                query = query.Where(t => t.TransactionDate >= from.Value);
            if (to.HasValue)
                query = query.Where(t => t.TransactionDate <= to.Value);

            var transactions = await query.Include(t => t.Account).ToListAsync();
            return Ok(transactions);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTransaction([FromBody] Transaction transaction)
        {
            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();
            return Ok(transaction);
        }
    }
}
