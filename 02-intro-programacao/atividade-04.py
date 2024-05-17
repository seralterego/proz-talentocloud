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


numero1 = float(input('Digite o primeiro número: '))
operador = input('Digite a operação (+,-,*,/,**): ')
numero2 = float(input('Digite o segundo número: '))
print(numero1, operador, numero2)
resultado = calculadora(numero1, numero2, operador)
print('=', resultado)