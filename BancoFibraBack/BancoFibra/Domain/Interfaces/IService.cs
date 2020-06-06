using System;
using System.Collections.Generic;
using BancoFibra.Domain.Entities;

namespace BancoFibra.Domain.Interfaces
{
    public interface IService<T> where T : BaseEntity
    {
        T Post(T obj);

        T Put(T obj);

        void Delete(int id);

        T Get(int id);

        IList<T> Get();

        IList<T> Get(Func<T, bool> func);
    }
}
