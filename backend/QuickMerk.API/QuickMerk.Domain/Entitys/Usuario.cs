using QuickMerk.Domain.Enums;
using System.Text.Json.Serialization;

namespace QuickMerk.Domain.Entitys
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string Apellido { get; set; } = string.Empty;
        public int Edad { get; set; }
        public DateTime Nacimiento { get; set; }
        public string Sexo { get; set; } = string.Empty;
        public string Telefono { get; set; } = string.Empty;
        public string direcion { get; set; } = string.Empty;  
        public string Ciudad { get; set; } = string.Empty;
        [JsonIgnore]
        public Cuenta? Cuenta { get; set; }
        [JsonIgnore]
        public Documento? Documento { get; set; }
        [JsonIgnore]
        public List<Busquedas>? Busquedas { get; set; }
    }
}
