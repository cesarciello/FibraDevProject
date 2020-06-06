using System;
using BancoFibra.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace BancoFibra.Infra.Context
{
    public class DbBancoFibraContext : DbContext
    {
        public DbBancoFibraContext()
        {
        }

        public DbBancoFibraContext(DbContextOptions<DbBancoFibraContext> options): base(options)
        {
        }

        public virtual DbSet<Client> Clients { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlite("DataSource=DbBancoFibra.db");

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Client>().HasKey(m => m.Id);
            base.OnModelCreating(builder);
        }
    }
}
