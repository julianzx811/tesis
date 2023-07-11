using Microsoft.EntityFrameworkCore;
using QuickMerk.Domain.Entitys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickMerk.Infraestructure.Context
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options)
            : base(options)
        {

        }
        public DbSet<Usuario> usuarios { get; set; }
        public DbSet<Cuenta> cuentas { get; set; }
    }
}
