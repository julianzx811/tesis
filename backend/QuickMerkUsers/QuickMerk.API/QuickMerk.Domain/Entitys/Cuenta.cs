using System.Text.Json.Serialization;

namespace QuickMerk.Domain.Entitys
{
    public class Cuenta
    {
        public int Id { get; set; }
        public int tipo_CuentaId { get; set; }
        [JsonIgnore]
        public Tipo_cuenta? tipo_Cuenta { get; set; }
        public int usuarioId { get; set; }
        [JsonIgnore]
        public Usuario? usuario { get; set; }
        public DateTime Creacion { get; set; }
        public string correo { get; set; } = string.Empty;
        public string contrasena { get; set; } = string.Empty;
    }
}

