from pyredis import Client


'''
# MSET é um comando de atribuicao de vários 
# elementos key-value ao mesmo tempo
'''


def filtrarResultados(mes, ano):
    chave_template = "resultado:*-{}-{}:megasena"

    client = Client(host="localhost")

    return client.keys(chave_template.format(mes, ano))


mes = 10
ano = 2013
chaves = filtrarResultados(mes, ano)
print(chaves)
