namespace QuickMerk.Domain.Entitys
{
    public class Documento
    {
        public int Id { get; set; }
        public string? DocumentoName { get; set; }
        public Tipo_documento? tipo_Documento { get; set; }
        public int usuarioId { get; set; }
        public Usuario? usuario { get; set; }

    }
}
