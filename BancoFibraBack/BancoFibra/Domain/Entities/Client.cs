using System;
namespace BancoFibra.Domain.Entities
{
    public class Client : BaseEntity
    {
        public string CNPJ { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set;}
      }
}
