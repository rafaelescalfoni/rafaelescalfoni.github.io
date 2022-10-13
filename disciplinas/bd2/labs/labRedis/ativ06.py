from pyredis import Client


'''
# MSET é um comando de atribuicao de vários 
# elementos key-value ao mesmo tempo
'''
client = Client(host="localhost")
chave_template = "resultado:{}:megasena"


data_sorteio1 = "04-09-2013"
numeros_sorteio1 = "10, 11, 18, 42, 55, 56"
chave1 = chave_template.format(data_sorteio1)

data_sorteio2 = "07-09-2013"
numeros_sorteio2 = "2, 21, 30, 35, 45, 50"
chave2 = chave_template.format(data_sorteio2)
                                
data_sorteio3 = "21-09-2013"
numeros_sorteio3 = "2, 13, 24, 41, 42, 44"
chave3 = chave_template.format(data_sorteio3)
                                
data_sorteio4 = "02-10-2013"
numeros_sorteio4 = "7, 15, 20, 23, 30, 41"
chave4 = chave_template.format(data_sorteio4)

client.bulk_start()
client.mset(chave1, numeros_sorteio1,
        chave2, numeros_sorteio2,
        chave3, numeros_sorteio3,
        chave4, numeros_sorteio4)
client.bulk_stop()

print(client.get(chave4))