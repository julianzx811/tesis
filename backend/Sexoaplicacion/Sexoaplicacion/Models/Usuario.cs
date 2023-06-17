using System.ComponentModel.DataAnnotations;

namespace Sexoaplicacion.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Second_Name { get; set; }
        public required int Edad { get; set; }
        public Boolean Sex { get; set; }
        public CategoriaUsuario categoriaUsuario { get; set; }
    }
}
