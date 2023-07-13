namespace QuickMerk.Domain.Entitys
{
    public class Tipo_documento
    {
        public int Id { get; set; }
        public string? TipoDeDocumento { get; set; }
        public List<Documento>? documentos { get; set; }
    }
}
