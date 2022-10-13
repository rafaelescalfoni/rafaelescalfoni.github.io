from pyredis import Client

codigo_usuario = "1962"
nome_usuario = "Peter Parker"
email_usuario = "spidey@marvel.com"

chave = "sessao:usuario:"+codigo_usuario

client = Client(host="localhost")
client.bulk_start()
client.hmset(chave, "codigo", codigo_usuario, 
    chave, "nome", nome_usuario, 
    chave, "email", email_usuario)
client.bulk_stop()

print(client.hmget(chave, "codigo"))