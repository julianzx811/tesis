using System.Text.Json.Serialization;

namespace QuickMerk.Domain.Entitys
{
    public class Usuario
    {
        public int Id { get; set; }
        public String? Nombre { get; set; }
        public string? Apellido { get; set; }
        public int Edad { get; set; }
        public DateTime Nacimiento { get; set; }
        public string? Sexo { get; set; }
        public string? Telefono { get; set; }
        public string? direcion { get; set; }   
        public string? Ciudad { get; set; }
        public int CuentaId { get; set; }
        [JsonIgnore]
        public Cuenta? Cuenta { get; set; }
        public int DocumentoId { get; set; }
        [JsonIgnore]
        public Documento? Documento { get; set; }
        [JsonIgnore]
        public List<Busquedas>? Busquedas { get; set; }
    }
}
