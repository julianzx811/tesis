using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sexoaplicacion.Models
{
    [Table("CategoriaUsuario")]
    public class CategoriaUsuario
    {
        [Key]
        public int Id_categoria { get; set; }
        public string? Categoria { get; set; }
        public virtual List<Usuario>? Usuarios { get; set; }
    }
}
