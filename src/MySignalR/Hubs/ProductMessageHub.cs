using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MySignalR.Hubs
{
    public class ProductMessageHub : Hub
    {
        public void HandleProductMessage(string receivedString)
        {
            var responseString = "hello world " + DateTime.Now.ToLocalTime();

            bool dataProcessedSuccessfully = true;

            Thread.Sleep(1000);

            if (dataProcessedSuccessfully)
            {
                Clients.All.handleProductMessage(responseString);
            }
            else
            {
                Clients.Caller.handleProductMessage(responseString);
            }
        }
    }
}
