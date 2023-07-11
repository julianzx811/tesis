using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using testeo.Models;

namespace testeo.Data
{
    public class testeoContext : DbContext
    {
        public testeoContext (DbContextOptions<testeoContext> options)
            : base(options)
        {
        }

        public DbSet<testeo.Models.Usuarios> Usuarios { get; set; } = default!;
    }
}
