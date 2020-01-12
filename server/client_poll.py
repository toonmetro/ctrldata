# из клиентских коннектов (фонт-сущности) данные сводятся в сессию (бэк-сущности)
# формируются задания, добавляются в очереди на выполнение, одна очередь на обработку, по одной каждый коннект к БД,
#   одина на рассылку писем, одна на обратную рассылку сообщений, одна для отчётов

from threading import Thread
from datetime import datetime

import json
import web_component_format



def LOG(m):
    print(datetime.now().isoformat('\u005f'), ' > ' + m)

class ClientPoll(Thread):

    ws = {}
    buf = ''
    thread_name = ''

    def __init__(self, thread_name, srv_ws):
        self.ws = srv_ws

        # Выставляем обработчики на события от клиентов
        self.ws.set_fn_new_client(self.new_client)
        self.ws.set_fn_client_left(self.client_left)
        self.ws.set_fn_message_received(self.message_received)

        self._name = thread_name
        super().__init__(self, self.run())

    def run(self):
        LOG("New thread: " + self._name)
        self.ws.run_forever()



    # Called for every client connecting (after handshake)
    def new_client(self, client, server):
        LOG("New client connected and was given id = %d" % client['id'])
        server.send_message_to_all("Hey all, a new client has joined us")

    # Called for every client disconnecting
    def client_left(self, client, server):
        LOG("Client(%d) disconnected" % client['id'])

    # Called when a client sends a message
    def message_received(self, client, server, message):
        if len(message) > 200:
            message = message[:200] + '..'
        LOG("Client(%d) send: %s" % (client['id'], message))
        self.ws.send_message(client, json.dumps(web_component_format.root))     #!!! Тут посылается JSON в ответ на любое сообщение


        # приход сообщещния от клиента
        # находим его сессию
