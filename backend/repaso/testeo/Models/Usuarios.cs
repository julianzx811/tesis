using System.ComponentModel.DataAnnotations;

namespace testeo.Models
{
    public class Usuarios
    {
        [Key]
        public required int Usuario_id { get; set; }
        public required string Nombre { get; set; }
        public required string Apellido { get; set; }
    }
}
