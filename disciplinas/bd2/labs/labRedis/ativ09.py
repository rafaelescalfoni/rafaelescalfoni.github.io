from pyredis import Client

data_sorteio = "09-11-2013"
chave = "resultado:{}:megasena".format(data_sorteio)

client = Client(host="localhost")
resultado1 = client.hget(chave, "ganhadores") 
resultado2 = client.hget(chave, "numeros") 

mensagem = "Total de ganhadores = {}\nNúmeros sorteados = {}".format(resultado1,resultado2)

print(mensagem);
