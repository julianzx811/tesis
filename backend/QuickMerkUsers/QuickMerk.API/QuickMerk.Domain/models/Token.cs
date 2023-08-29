namespace QuickMerk.Domain.models
{
    public class Token
    {
        public string token { get; set; } = string.Empty;
        public  int CuentaId { get; set; }
        //public string RefreshToken { get; set; } = string.Empty;
    }
}
