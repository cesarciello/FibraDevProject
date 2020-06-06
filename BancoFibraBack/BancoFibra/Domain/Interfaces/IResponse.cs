namespace BancoFibra.Controllers
{
    internal class IResponse<T>
    {
        public string Message { get; set; }
        public string Code { get; set; }
        public object Data { get; set; }
    }
}