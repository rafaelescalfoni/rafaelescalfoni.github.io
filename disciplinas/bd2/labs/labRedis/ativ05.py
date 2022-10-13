from pyredis import Client

client = Client(host="localhost")
chave = "resultado:megasena"
print(client.get(chave))
