def calculadora (num1, num2, operador):
    if operador == '+':
        resultado = num1+num2
    elif operador == '-':
        resultado = num1-num2
    elif operador == '*':
        resultado =  num1*num2
    elif operador == '/':
        resultado = num1/num2
    elif operador=='^':
        resultado =  num1**num2
    return resultado

continuar_calcular = True
while continuar_calcular is True:
  numero1 = float(input('Digite o primeiro número: '))
  operacao = input('Digite a operação (+, -, *, /, ^): ')
  numero2 = float(input('Digite o segundo número: '))
  resultado = calculadora(numero1, numero2, operacao)
  print(resultado)

  sair = input('Sair? (s/n): ')
  if sair == 's':
    continuar_calcular = False
    print('calculadora encerrada')