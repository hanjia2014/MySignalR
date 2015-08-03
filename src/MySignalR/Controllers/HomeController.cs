using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.SignalR.Infrastructure;
using Microsoft.AspNet.SignalR;
using MySignalR.Hubs;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MySignalR
{
    public class HomeController : Controller
    {
        private IConnectionManager _connectionManager;
        private IHubContext _productMessageHub;

        [FromServices]
        public IConnectionManager ConnectionManager
        {
            get
            {
                return _connectionManager;
            }
            set
            {
                _connectionManager = value;
                _productMessageHub = _connectionManager.GetHubContext<ProductMessageHub>();
            }
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Admin()
        {
            return View();
        }


        public IActionResult Test(string data)
        {
            _productMessageHub.Clients.All.handleProductMessage(data);
            return RedirectToAction("Admin");
        }
    }
}
