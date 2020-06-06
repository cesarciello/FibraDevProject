using System;
using System.Collections.Generic;
using System.Linq;
using BancoFibra.Domain.Entities;
using BancoFibra.Domain.Interfaces;
using BancoFibra.Infra.Context;
using Microsoft.EntityFrameworkCore;

namespace BancoFibra.Infra.Repository
{
    public class BaseRepository<T> : IRepository<T> where T : BaseEntity
    {
        public readonly DbContext context = new DbBancoFibraContext();

        public BaseRepository()
        {
        }

        public void Insert(T obj)
        {
            context.Set<T>().Add(obj);
            context.SaveChanges();
        }

        public void Remove(int id)
        {
            context.Set<T>().Remove(Select(id));
            context.SaveChanges();
        }

        public T Select(int id)
        {
            return context.Set<T>().Find(id);
        }

        public IList<T> Select(Func<T, bool> func)
        {
            return context.Set<T>().Where(func).ToList();
        }

        public IList<T> SelectAll()
        {
            return context.Set<T>().ToList();
        }

        public void Update(T obj)
        {
            context.Entry(obj).State = EntityState.Modified;
            context.SaveChanges();
        }
    }
}
