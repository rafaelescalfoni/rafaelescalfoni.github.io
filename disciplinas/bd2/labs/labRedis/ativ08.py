from pyredis import Client

data_sorteio = "09-11-2013"
chave = "resultado:{}:megasena".format(data_sorteio)

ganhadores = "22"
numeros = "8, 18, 26, 42, 56, 58"

client = Client(host="localhost")
client.bulk_start()
client.hset(chave, "ganhadores", ganhadores)
client.hset(chave, "numeros", numeros)
client.bulk_stop()

