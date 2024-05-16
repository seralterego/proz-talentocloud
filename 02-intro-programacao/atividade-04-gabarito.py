def calculadora(num1, num2, operacao):
  if (operacao == 1):
    return num1 + num2
  elif (operacao == 2):
    return num1 - num2
  elif (operacao == 3):
    return num1 * num2
  elif (operacao == 4):
    return num1 / num2
  else:
    return 0

resultado = calculadora(4,7,1)
print(resultado)