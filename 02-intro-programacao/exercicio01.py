""" Crie um programa que calcule o status de aprovação do aluno a partir da nota dele. """
# O código deve seguir as instruções:
# - nota menor que 4: ele está reprovado;
# - nota menor que 7: ele está em recuperação;
# - nota maior que 7: ele está aprovado.

# NOTA = 8

# if NOTA < 4:
#     print("Reprovado")
# elif NOTA < 7:
#     print("Em recuperação")
# elif NOTA >= 7:
#     print("Aprovado")


QNTD_RODAS = 3
PESO_BRUTO = 6100
QNTD_PESSOAS = 2

if (QNTD_RODAS <= 3):
  print ("Categoria A")
elif (QNTD_RODAS == 4) and (QNTD_PESSOAS <= 8) and (PESO_BRUTO <= 3500):
  print ("Categoria B")
elif (PESO_BRUTO >= 3500 and PESO_BRUTO <= 6000):
  print ("Categoria C")
elif (QNTD_PESSOAS > 8):
  print ("Categoria D")
elif (PESO_BRUTO >= 6000):
  print ("Categoria E")
