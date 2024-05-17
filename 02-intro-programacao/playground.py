# """ Números aleatórios entre 1 e 10, menos o 5 """
# import random
# numero = random.randint(1, 10)
# while(numero != 5):
#   print(numero)
#   numero = random.randint(1,10)

# ---------------------------------------------------------------------------------------------
# """ Contagem de 0 a 10 """
# i = 0
# while (i < 10):
#   print(i)
#   i = i + 1

# ---------------------------------------------------------------------------------------------
# """ Números pares entre 10 e 20, menos o 14 """
# numero = 10
# for i in range(10):
#   numero = numero + 2
#   if (numero == 14):
#     continue
#   if (numero == 20):
#     break
#   print(numero)

# ---------------------------------------------------------------------------------------------
# """ Intervalo de descanso """
# import time
# tempoInicial = 1
# tempoFinal = 45
# print("Iniciando descanso...")
# for i in range(tempoInicial, tempoFinal+1):
#   print(i)
#   time.sleep(1)
#   print("Fim do descanso!")

# ---------------------------------------------------------------------------------------------
# """ Média de Aluno """
# def media_aluno(nota1, nota2):
#   media = (nota1 + nota2) / 2
#   return media

# resultado = media_aluno(10, 8)
# print(resultado)

# ---------------------------------------------------------------------------------------------
# """ Número antecessor e sucessor """
# def ant_e_suc(num):
#   ant = num - 1
#   suc = num + 1
#   return ant, suc

# antecessor, sucessor = ant_e_suc(5)
# print(antecessor)
# print(sucessor)

# ---------------------------------------------------------------------------------------------
# """ Cálculo IMC """
# def calculadorImc(peso, altura):
#   imc = peso/(altura*altura) * 10000
#   if(imc <= 18.5):
#     return "Magreza"
#   elif(imc > 18.5) and (imc <= 24.9):
#     return "Saudável"
#   elif(imc >= 25) and (imc <= 29.9):
#     return "Sobrepeso"
#   elif(imc > 30) and (imc <= 34.9):
#     return "Obesidade grau 1"
#   elif(imc > 35) and (imc <= 39.9):
#     return "Obesidade severa grau 2"
#   else:
#     return "Obesidade morbida grau 3"

# peso = 60
# altura = 160
# resultado = calculadorImc(peso, altura)
# print(resultado)

# ---------------------------------------------------------------------------------------------
# def operacao(num_lim, incre):
#   contador = 0
  
#   for i in range(0, num_lim, incre):
#     contador = contador + 1
#   return contador

# ---------------------------------------------------------------------------------------------
def operacao(num_lim, incre):
  contador = 0
  for i in range(0, num_lim, incre):
    contador = contador + 1
    return contador

resutador = operacao(5, 1)
print(resutador)