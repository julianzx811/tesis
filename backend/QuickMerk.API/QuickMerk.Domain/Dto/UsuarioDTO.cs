using QuickMerk.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace QuickMerk.Domain.Dto
{
    public class UsuarioDTO
    {
        [Required(ErrorMessage = "El nombre es requerido")]
        public String Nombre { get; set; } = string.Empty;

        [Required(ErrorMessage = "El apellido es requerido")]
        public string Apellido { get; set; } = string.Empty;

        [Required(ErrorMessage = "La edad es requerido")]
        public int Edad { get; set; }

        [Required(ErrorMessage = "El Nombre es requerido")]
        public DateTime Nacimiento { get; set; } 

        [Required(ErrorMessage = "El sexo es requerido y debe de estar entre 1 y 2")]
        [Range(1,2)]
        public int Sexo { get; set; }

        [Required(ErrorMessage = "El telefono es requerido")]
        public string Telefono { get; set; } = string.Empty;

        [Required(ErrorMessage = "La direcion es requerido")]
        public string direcion { get; set; } = string.Empty;

        [Required(ErrorMessage = "La ciudad es requerido")]
        public string Ciudad { get; set; } = string.Empty;

        [Required(ErrorMessage = "El documento es requerido")]
        public string Documento { get; set; } = string.Empty;

        [Required(ErrorMessage = "El correo es requerido")]
        [StringLength(50, ErrorMessage = "La Cantidad maxima son 50 caracteres")]
        public string Correo { get; set; } = string.Empty;

        [Required(ErrorMessage = "El contraseña es requerido")]
        [StringLength(20, ErrorMessage = "La Cantidad maxima son 20 caracteres")]
        public string contrasena { get; set; } = string.Empty;

        [Required(ErrorMessage = "El tipo de documento es requerido")]
        public int Tipo_Documento_id { get; set; }
    }
}
