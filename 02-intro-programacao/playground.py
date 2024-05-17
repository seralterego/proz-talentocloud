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
# def operacao(num_lim, incre):
#   contador = 0
#   for i in range(0, num_lim, incre):
#     contador = contador + 1
#     return contador

# resutador = operacao(5, 1)
# print(resutador)

# ---------------------------------------------------------------------------------------------
# Problema: Desenvolva um programa que só deve aceitar números pares. Siga as seguintes instruções:
# caso um número ímpar seja digitado, informe ao usuário que ele digitou um valor ímpar e peça novamente por um número par;
# caso uma letra seja digitada, informe ao usuário que ele digitou um caractere inválido e peça novamente por um número par.

# def paresApenas(num):
#   if (num % 2 == 0):
#     return "É um número par"
#   elif (num !=):
#     return "Não é um número par"

# numeroDigitado = int(input("Digite um número: "))
# resultado = paresApenas(numeroDigitado)
# print(resultado)

# ---------------------------------------------------------------------------------------------
# Resolução de erro com if
# def calculadora(num1, num2, op):
#   if (op == 1):
#     res = num1 + num2
#   elif (op == 2):
#     res = num1 - num2
#   elif (op == 3):
#     res = num1 * num2
#   elif (op == 4) and (num2 != 0):
#     res = num1 / num2
#   else:
#     res = "erro"
#   return res

# resultado = calculadora(20,0,4)
# if (resultado == "erro"):
#   print("Ocorreu um erro")
# else:
#   print(resultado)

# Resolução de erro com try/except
# print("Insira um número")
# try:
#   valor = int(input())
#   valor = valor + 5
#   print("O valor digitado + 5 e igual a " + str(valor))
# except Exception as e:
#   print("não foi digitado um número...", e)

# Resolução de erro com raise exceptions
# def calculadora(num1, num2, op):
#   if (op == 1):
#     res = num1 + num2
#   elif (op == 2):
#     res = num1 - num2
#   elif (op == 3):
#     res = num1 * num2
#   elif (op == 4):
#     if (num2 != 0):
#       res = num1 / num2
#     else:
#       raise Exception("Divisão por zero não é possível!")
#   else:
#     raise Exception("Operação não existe!")
#   return res

# try:
#   res = calculadora(2,0,8)
#   print(res)
# except Exception as err:
#   print("Ocorreu um erro")
#   print(err)

# ---------------------------------------------------------------------------------------------
# Praticando
# Problema: Desenvolva um programa que só deve aceitar números pares. Siga as seguintes instruções:
# caso um número ímpar seja digitado, informe ao usuário que ele digitou um valor ímpar e peça novamente por um número par;
# caso uma letra seja digitada, informe ao usuário que ele digitou um caractere inválido e peça novamente por um número par.
# numeroCorreto = False
# while(numeroCorreto == False):
#   print("Insira um número par")
#   try:
#     numero = int(input())
#     if (numero % 2 == 0):
#       numeroCorreto = True
#       print("Você digitou um número par!")
#     else:
#       print("Você digitou um número ímpar!")
#   except:
#     print("Caracter inválido, por favor digite um número par.")

# ---------------------------------------------------------------------------------------------
# def calcular_imc(peso, altura):
#   if (peso < 0) or (altura < 0):
#     raise Exception("Valores preenchidos incorretamente")
#   imc = (peso) / (altura * altura)
#   return imc

# resultado = imc(110, 1.70)
# print(resultado)