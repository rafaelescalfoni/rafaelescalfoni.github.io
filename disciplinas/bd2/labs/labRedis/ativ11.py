from pyredis import Client

codigo_usuario = "1962"
chave = "sessao:usuario:"+codigo_usuario

trinta_minutos_em_segundos = 1800;
  
client = Client(host="localhost")

result = client.expire(chave, trinta_minutos_em_segundos)

print(result)