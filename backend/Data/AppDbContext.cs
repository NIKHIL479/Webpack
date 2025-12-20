using Microsoft.EntityFrameworkCore;
using OhioHealthProject.Models;
using System.Collections.Generic;
namespace OhioHealthProject.Data
{

        public class AppDbContext : DbContext
        {
            public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

            public DbSet<User> Users { get; set; }
        }
    }


