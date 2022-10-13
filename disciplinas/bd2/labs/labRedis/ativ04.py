from pyredis import Client

client = Client(host="localhost")
chave = "resultado:megasena"

numeros = "2, 13, 24, 41, 42, 44"

client.bulk_start()
client.set(chave, numeros)
client.bulk_stop()

print(client.get(chave))