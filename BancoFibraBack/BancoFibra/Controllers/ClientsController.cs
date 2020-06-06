using System;
using BancoFibra.Controllers;
using BancoFibra.Domain.Entities;
using BancoFibra.Domain.Interfaces;
using BancoFibra.Service.Services;
using Microsoft.AspNetCore.Mvc;


namespace BancoFibra
{
    [ApiController]
    [Route("api/client")]
    public class ClientsController : Controller
    {

        public BaseService<Client> clientService = new BaseService<Client>();

        [HttpGet]
        public ActionResult Get()
        {
            IResponse<Client> response = new IResponse<Client>();
            try
            {
                var Atendimentos = clientService.Get();
                response.Message = "Sucesso! Está é lista dos clientes.";
                response.Code = "200";
                response.Data = Atendimentos ?? throw new Exception("Clientes não encontrados");
                return new ObjectResult(response);
            }
            catch (Exception err)
            {
                response.Message = $"Falha! Não foi possivel retornar uma lista dos clientes. {err}";
                response.Code = "400";
                response.Data = null;
                return BadRequest(response);
            }
        }

        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {

            IResponse<Client> response = new IResponse<Client>();
            try
            {
                var Atendimento = clientService.Get(id);
                response.Message = "Sucesso! Este é o Cliente.";
                response.Code = "200";
                response.Data = Atendimento ?? throw new Exception("Cliente não encontrado");
                return new ObjectResult(response);
            }
            catch (Exception err)
            {
                response.Message = $"Falha! Não foi possivel retornar o Cliente.\n{err}";
                response.Code = "400";
                response.Data = null;
                return BadRequest(response);
            }
        }

        [HttpPost("filter")]
        public ActionResult Get([FromBody] IFilterNameCnpj value)
        {

            IResponse<Client> response = new IResponse<Client>();
            try
            {
                var Atendimento = clientService.Get((client) =>
                {
                    return client.Name.Contains(value.Name) && client.CNPJ.Contains(value.Cnpj);
                });
                response.Message = "Sucesso! Este é o Cliente.";
                response.Code = "200";
                response.Data = Atendimento ?? throw new Exception("Cliente não encontrado");
                return new ObjectResult(response);
            }
            catch (Exception err)
            {
                response.Message = $"Falha! Não foi possivel retornar o Cliente.\n{err}";
                response.Code = "400";
                response.Data = null;
                return BadRequest(response);
            }
        }

        [HttpPost]
        public ActionResult Post([FromBody] Client value)
        {
            IResponse<Client> response = new IResponse<Client>();
            try
            {
                var Atendimento = clientService.Post(value);
                response.Message = "Sucesso! Cliente inserido.";
                response.Code = "200";
                response.Data = Atendimento ?? throw new Exception("Cliente não pode ser inserido");
                return new ObjectResult(response);
            }
            catch (Exception err)
            {
                response.Message = $"Falha! Não foi possivel inserir o Cliente.\n{err}";
                response.Code = "400";
                response.Data = null;
                return BadRequest(response);
            }
        }

        [HttpPut()]
        public ActionResult Put([FromBody] Client value)
        {
            IResponse<Client> response = new IResponse<Client>();
            try
            {
                var Atendimento = clientService.Put(value);
                response.Message = "Sucesso! Cliente atualizado.";
                response.Code = "200";
                response.Data = Atendimento ?? throw new Exception("Cliente não foi atualizado");
                return new ObjectResult(response);
            }
            catch (Exception err)
            {
                response.Message = $"Falha! Não foi possivel atulizar o Cliente.\n{err}";
                response.Code = "400";
                response.Data = null;
                return BadRequest(response);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            IResponse<Client> response = new IResponse<Client>();
            response.Data = $"Cliente de id {id}.\n";
            try
            {
                clientService.Delete(id);
                response.Message = "Sucesso! Cliente deletado.";
                response.Code = "200";
                return new ObjectResult(response);
            }
            catch (Exception err)
            {
                response.Message = $"Falha! Não foi possivel deletar o Cliente.\n{err}";
                response.Code = "400";
                return BadRequest(response);
            }
        }
    }
}
