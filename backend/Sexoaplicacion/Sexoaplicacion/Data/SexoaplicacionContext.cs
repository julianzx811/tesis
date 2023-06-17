using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Sexoaplicacion.Models;

namespace Sexoaplicacion.Data
{
    public class SexoaplicacionContext : DbContext
    {
        public SexoaplicacionContext (DbContextOptions<SexoaplicacionContext> options)
            : base(options)
        {
        }

        public DbSet<Sexoaplicacion.Models.Usuario> Usuario { get; set; } = default!;
    }
}
