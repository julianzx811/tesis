namespace QuickMerk.Domain.Dto
{
    public class UsuarioDTO
    {
        public String? Nombre { get; set; }
        public string? Apellido { get; set; }
        public int Edad { get; set; }
        public DateTime Nacimiento { get; set; }
        public string? Sexo { get; set; }
        public string? Telefono { get; set; }
        public string? direcion { get; set; }
        public string? Ciudad { get; set; }
        public string? Documento { get; set; }
        public string? correo { get; set; }
        public string? contrasena { get; set; }
        public int tipo_Documento_id { get; set; }
    }
}
