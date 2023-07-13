namespace QuickMerk.Domain.Entitys
{
    public class Cuenta
    {
        public int Id { get; set; }
        public Tipo_cuenta tipo_Cuenta { get; set; }
        public int usuarioId { get; set; }
        public Usuario usuario { get; set; }
        public DateTime Creacion { get; set; }
        public string? correo { get; set; }
        public string? contrasena { get; set; }
    }
}
