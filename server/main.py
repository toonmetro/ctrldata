"""
    Сервер.
    Главная точка входа в приложение.
"""


from websocket_server import WebsocketServer
from client_poll import ClientPoll

CFG = dict(
  debug  = True,
  host    = "127.0.0.1",
  ws_port = 9001,
  wss     = False
)

poll = ClientPoll('Websocket Transport'
                  , WebsocketServer(CFG['ws_port']
                  , CFG['host'])
                  )
poll.start()
poll.join()





# ---------------------------------------------
# Когда конфиг читался из файла
# CFG = 0
# with open('config.json', 'r') as cfg_file:
#     CFG = json.load(cfg_file)
#
# jjj = json.dumps(web_comp.root)
# jjj.encode()
# print(jjj)