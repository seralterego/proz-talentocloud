""" Crie um programa que calcule o status de aprovação do aluno a partir da nota dele. """
# O código deve seguir as instruções:
# - nota menor que 4: ele está reprovado;
# - nota menor que 7: ele está em recuperação;
# - nota maior que 7: ele está aprovado.

NOTA = 8

if NOTA < 4:
    print("Reprovado")
elif NOTA < 7:
    print("Em recuperação")
elif NOTA >= 7:
    print("Aprovado")
