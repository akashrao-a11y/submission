using System.ComponentModel.DataAnnotations;

namespace BankManagementSystem.Models
{
    public class AccountLoginRequest
    {
        [Required]
        public string AccountNumber { get; set; }

        [Required]
        public string AccountPassword { get; set; }
    }
}