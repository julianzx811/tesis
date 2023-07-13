using Microsoft.EntityFrameworkCore;
using QuickMerk.Domain.Entitys;
using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cuenta>()
            .HasOne(a => a.usuario)
            .WithOne(a => a.Cuenta)
            .HasForeignKey<Usuario>(c => c.CuentaId);

            modelBuilder.Entity<Usuario>()
            .HasOne(a => a.Documento)
            .WithOne(a => a.usuario)
            .HasForeignKey<Usuario>(c => c.DocumentoId);
        }
        public DbSet<Busquedas> busquedas { get; set; }
        public DbSet<Cuenta> cuentas { get; set; }
        public DbSet<Documento> documentos { get; set; }
        public DbSet<Tipo_cuenta> tipo_Cuentas { get; set; }
        public DbSet<Tipo_documento> tipo_Documentos { get; set; }
        public DbSet<Usuario> usuarios { get; set; }
        
    }
}
