using System;
using System.Collections.Generic;
using BancoFibra.Domain.Entities;
using BancoFibra.Domain.Interfaces;
using BancoFibra.Infra.Repository;

namespace BancoFibra.Service.Services
{
    public class BaseService<T> : IService<T> where T : BaseEntity
    {
        private readonly BaseRepository<T> repository = new BaseRepository<T>();

        public BaseService()
        {
        }

        public IList<T> Get()
        {
            return repository.SelectAll();
        }

        public T Get(int id)
        {
            return repository.Select(id);
        }

        public IList<T> Get(Func<T, bool> func)
        {
            return repository.Select(func);
        }

        public void Delete(int id)
        {
            repository.Remove(id);
        }

        public T Post(T obj)
        {
            repository.Insert(obj);
            return obj;
        }

        public T Put(T obj)
        {
            repository.Update(obj);
            return obj;
        }

    }
}
