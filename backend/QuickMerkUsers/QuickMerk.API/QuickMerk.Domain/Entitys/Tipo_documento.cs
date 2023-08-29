namespace QuickMerk.Domain.Entitys
{
    public class Tipo_documento
    {
        public int Id { get; set; }
        public string TipoDeDocumento { get; set; } = string.Empty;
        public List<Documento>? documentos { get; set; }
    }
}
