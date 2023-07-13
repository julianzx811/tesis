using Microsoft.EntityFrameworkCore;
using QuickMerk.Domain.Entitys;

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
            //relaciones usuario y cuenta
            modelBuilder.Entity<Usuario>()
            .HasOne(a => a.Cuenta)
            .WithOne(a => a.usuario)
            .HasForeignKey<Cuenta>(c => c.usuarioId);

            //relaciones usuario y documentos
            modelBuilder.Entity<Usuario>()
            .HasOne(a => a.Documento)
            .WithOne(a => a.usuario)
            .HasForeignKey<Documento>(c => c.usuarioId);
        }

        public DbSet<Busquedas> busquedas { get; set; }
        public DbSet<Cuenta> cuentas { get; set; }
        public DbSet<Documento> documentos { get; set; }
        public DbSet<Tipo_cuenta> tipo_Cuentas { get; set; }
        public DbSet<Tipo_documento> tipo_Documentos { get; set; }
        public DbSet<Usuario> usuarios { get; set; }
        
    }
}
