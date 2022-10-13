from pyredis import Client

client = Client(host="localhost")
print(client.ping())
print(client.echo("alo mundo!"))
