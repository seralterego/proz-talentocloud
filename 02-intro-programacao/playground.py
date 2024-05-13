""" import random

numero = random.randint(1, 10)
while(numero != 5):
  print(numero)
  numero = random.randint(1,10) """

i = 0
while (i < 10):
  print(i)
  i = i + 1


""" numero = 10
for i in range(10):
  numero = numero + 2
  if (numero == 14):
    continue
  if (numero == 20):
    break
  print(numero) """




# import time
# tempoInicial = 1
# tempoFinal = 45
# print("Iniciando descanso...")
# for i in range(tempoInicial, tempoFinal+1):
#   print(i)
#   time.sleep(1)
#   print("Fim do descanso!")