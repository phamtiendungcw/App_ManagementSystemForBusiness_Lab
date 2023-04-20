using Auth_DAL;
using Microsoft.EntityFrameworkCore;

namespace App_ManagementSystemForBusiness_Auth.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
    }
}
