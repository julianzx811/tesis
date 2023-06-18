using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sexoaplicacion.Models
{
    [Table("usuarios")]
    public class Usuario
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Second_Name { get; set; }
        public required int Edad { get; set; }
        public Boolean Sex { get; set; }
        public virtual int Id_categoria { get; set; }

        
    }
}
