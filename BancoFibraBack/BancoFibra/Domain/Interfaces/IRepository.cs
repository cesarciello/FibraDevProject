using System;
using System.Collections.Generic;
using BancoFibra.Domain.Entities;

namespace BancoFibra.Domain.Interfaces
{
    public interface IRepository<T> where T : BaseEntity
    {
        void Insert(T obj);

        void Update(T obj);

        void Remove(int id);

        T Select(int id);

        IList<T> SelectAll();

        IList<T> Select(Func<T, bool> func);
    }
}
