var RPJE_NETWORK_LAST_RESPONSE = "NULL";

class NetworkManager
{
    constructor(id_client)
    {
      this.id_client = id_client;
      this.Socket = null;
      this.url_serv = "";
      this.lastResponse = "Please getLastResponse()";

      console.log("[INFO] NetworkManager Ready");
    }

    updateLastResponse()
    {
       this.lastResponse = RPJE_NETWORK_LAST_RESPONSE;
    }

    getLastResponse()
    {
      this.updateLastResponse();
      return this.lastResponse;
    }

    sendCmd(str)
    {
        this.Socket.send(this.id_client + "##-##" + str);
    }

    send_Player_To_Server(currentPlayer)
    {
        this.sendCmd(currentPlayer.position.x.toString() + "##-##" + currentPlayer.position.y.toString() + "##-##" + currentPlayer.direction.toString() + "##-##" + currentPlayer.spriteNumber.toString());
    }

    connect(url_serv)
    {
        this.url_serv = url_serv;
        this.Socket = new WebSocket(url_serv);

        this.Socket.onmessage = function(e)
        {
            RPJE_NETWORK_LAST_RESPONSE = e.data;
            //console.log(RPJE_NETWORK_LAST_RESPONSE);
        };

        console.log("[INFO] Multiplayer enabled, NetworkManager is connecting to : " + url_serv);
    }
 
}