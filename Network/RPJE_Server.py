import tornado.web
import tornado.websocket
import tornado.httpserver
import tornado.ioloop

print "[INFO] Welcome to RPJE Server !"

class Client:
    def __init__(self, client):
        self.playerID = "null"
        self.client = client

class ClientManager:
    def __init__(self):
        self.Clients = []

    def getID_byClient(self, ARG_Client):

        for client_it in self.Clients :
            if ARG_Client == client_it.client:
                return client_it.playerID
        return "null"

    def setID_for_Client(self, ARG_Client, ID):
        for client_it in self.Clients :
            if ARG_Client == client_it.client:
                client_it.playerID = ID
                return "ok"
        return "null"

    def deleteClient(self, ARG_Client):
        for client_it in self.Clients :
            if ARG_Client == client_it.client:
                self.Clients.remove(client_it)
                return "ok"
        return "null"

#---------------------

class Player:
    def __init__(self, id, posx, posy, direction, spriteNumber):
        self.id = id
        self.posx = posx
        self.posy = posy 
        self.direction = direction
        self.spriteNumber = spriteNumber

class PlayerManager:

    def __init__(self):
        self.Players = []
        self.JSON = ""
        self.NeedToUpdate = True

    def GenerateJSON(self):
        if not self.NeedToUpdate :
            return self.JSON
        else :
            self.JSON = ""
            self.JSON = self.JSON + '{"Players": ['

            for player in self.Players:
                self.JSON = self.JSON + "{"

                self.JSON = self.JSON + '"id": "' + player.id + '",'
                self.JSON = self.JSON + '"posx": "' + player.posx + '",'
                self.JSON = self.JSON + '"posy": "' + player.posy + '",'
                self.JSON = self.JSON + '"direction": "' + player.direction + '",'
                self.JSON = self.JSON + '"spriteNumber": "' + player.spriteNumber + '"'


                self.JSON = self.JSON + "},"

            self.JSON = self.JSON[:-1]  #on retire le dernier caractere --> ,
            self.JSON = self.JSON + ']}'
            self.NeedToUpdate = False

            return self.JSON


    def UpdatePlayerByID(self, idPlayer, posx, posy, direction, spriteNumber):
        for player in self.Players:
            if player.id == idPlayer:
                player.posx = posx
                player.posy = posy
                player.direction = direction
                player.spriteNumber = spriteNumber
                self.NeedToUpdate = True
                return True

        tmpPlayer = Player(idPlayer,posx, posy, direction, spriteNumber)
        self.AddPlayer(tmpPlayer)
        self.NeedToUpdate = True
        return True

    def DeletePlayerByID(self, idPlayer):
        for player in self.Players:
            if player.id == idPlayer:
                self.Players.remove(player)
                self.NeedToUpdate = True
                return True
        return False

    def AddPlayer(self,player):
        self.Players.append(player)
        self.NeedToUpdate = True

 

ServerPlayerManager = PlayerManager()
MyClientManager = ClientManager()
 
class WebSocketHandler(tornado.websocket.WebSocketHandler):
    
    def open(self):
        print "New player, welcome !"
        tmpClient = Client(self)
        MyClientManager.Clients.append(tmpClient)
        print str(len(MyClientManager.Clients)) + " Players are here !"
 
    def on_message(self, message):
        id, posx, posy, direction, spriteNumber = message.split("##-##")

        MyClientManager.setID_for_Client(self, id)

        ServerPlayerManager.UpdatePlayerByID(id, posx, posy, direction, spriteNumber)
        self.write_message(ServerPlayerManager.GenerateJSON())
 
    def on_close(self):
        print "This player is leaving : " + MyClientManager.getID_byClient(self)

        ServerPlayerManager.DeletePlayerByID(MyClientManager.getID_byClient(self))

        MyClientManager.deleteClient(self)
        print str(len(MyClientManager.Clients)) + " Players are here !"  

    def check_origin(self, origin):
        return True

class Admin_WebSocketHandler(tornado.websocket.WebSocketHandler):
    
    def open(self):
        print "[ADMIN] Hello Admin"
       
 
    def on_message(self, message):
        print "[ADMIN] New command : " + message

        if message == "server_stop" :
            tornado.ioloop.IOLoop.instance().stop()
 
    def on_close(self):
        print "[ADMIN] Bye bye Admin"

    def check_origin(self, origin):
        return True
 
class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r'/RPJE', WebSocketHandler),
            (r'/RPJE_Admin', Admin_WebSocketHandler)
        ]
 
        settings = {
            'template_path': 'templates'
        }
        tornado.web.Application.__init__(self, handlers, **settings)
 
 
if __name__ == '__main__':
    ws_app = Application()
    server = tornado.httpserver.HTTPServer(ws_app)
    server.listen(8888)
    tornado.ioloop.IOLoop.instance().start()



