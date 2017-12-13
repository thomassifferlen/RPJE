import tornado.web
import tornado.websocket
import tornado.httpserver
import tornado.ioloop

print "[INFO] Welcome to RPJE Server !"

class Player:
    def __init__(self, id, posx, posy):
        self.id = id
        self.posx = posx
        self.posy = posy 

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
                self.JSON = self.JSON + '"posy": "' + player.posy + '"'

                self.JSON = self.JSON + "},"

            self.JSON = self.JSON[:-1]  #on retire le dernier caractere --> ,
            self.JSON = self.JSON + ']}'
            self.NeedToUpdate = False

            return self.JSON


    def UpdatePlayerByID(self, idPlayer, posx, posy):
        for player in self.Players:
            if player.id == idPlayer:
                player.posx = posx
                player.posy = posy
                self.NeedToUpdate = True
                return True

        tmpPlayer = Player(idPlayer,posx, posy)
        self.AddPlayer(tmpPlayer)
        self.NeedToUpdate = True
        return True

    def DeletePlayerByID(self, idPlayer):
        compteur = 0
        for player in self.Players:
            if player.id == idPlayer:
                del self.Players[compteur]
                self.NeedToUpdate = True
                return True
            else :
                compteur = compteur + 1 
        return False

    def AddPlayer(self,player):
        self.Players.append(player)
        self.NeedToUpdate = True

 

ServerPlayerManager = PlayerManager()
 
class WebSocketHandler(tornado.websocket.WebSocketHandler):

    #clients = []
    
    def open(self):
        print "New player, welcome !"
        #self.clients.append(self)
        #self.write_message("Hello World")
 
    def on_message(self, message):
        id, posx, posy = message.split("##-##")

        ServerPlayerManager.UpdatePlayerByID(id, posx, posy)
        self.write_message(ServerPlayerManager.GenerateJSON())

        #print str(len(ServerPlayerManager.Players))

        #print message
 
    def on_close(self):
        print "Goodbye player, see you later !"
        #self.clients.remove(self)
        

    def check_origin(self, origin):
        return True
 
class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r'/RPJE', WebSocketHandler)
        ]
 
        settings = {
            'template_path': 'templates'
        }
        tornado.web.Application.__init__(self, handlers, **settings)
 
 
if __name__ == '__main__':
    ws_app = Application()
    server = tornado.httpserver.HTTPServer(ws_app)
    server.listen(8080)
    tornado.ioloop.IOLoop.instance().start()
