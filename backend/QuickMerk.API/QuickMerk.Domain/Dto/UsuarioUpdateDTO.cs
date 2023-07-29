using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickMerk.Domain.Dto
{
    public class UsuarioUpdateDTO
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
        [Range(0, 1)]
        public int Sexo { get; set; }

        [Required(ErrorMessage = "El telefono es requerido")]
        public string Telefono { get; set; } = string.Empty;

        [Required(ErrorMessage = "La direcion es requerido")]
        public string direcion { get; set; } = string.Empty;

        [Required(ErrorMessage = "La ciudad es requerido")]
        public string Ciudad { get; set; } = string.Empty;
    }
}
