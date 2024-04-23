''' AULA AO VIVO 05 - Estruturas de repetição e funções (13/11/2023) '''

''' Regar todas as plantas '''
''' Modelo 01 '''
for i in range(6):
    planta_atual = str(i)
    print("Rega a plata" + planta_atual)

''' Modelo 02 '''
i = 0
while (i < 6):
    planta_atual = str(i)
    print("Rega a planta " + planta_atual)
    i = i + 1

''' TRABALHO EM GRUPO '''
"Nessa leva só temos tomates e batatas. Porém, as batata já foram regadas ontem, então só precisamos regar os tomates."

for h in range(6):
    tomate = str(h)
    if (h % 2 == 0):
        print("Regue a planta " + tomate)
    else:
        print("Regar só amanhã")


''' FUNÇÕES '''
''' Exemplo de criação de uma função em PYTHON '''

''' Função multiplicação Ex. 1'''


def multiplicar(a, b):
    multi = a * b
    return multi


res = multiplicar(6, 9)
print(res)

''' Função multiplicação Ex. 2'''


def escrever_multiplicacao(num1, num2):
    resultado = str(num1 * num2)
    return resultado


print(escrever_multiplicacao(2, 2))


''' EXERCíCIO FUNÇÃO '''
''' RESOLUÇÃO DO Iuri '''


def tabuada_nove():
    for i in range(11):
        for f in range(11):
            resultado = i * f
            if i == 9:
                print(f"Tabuada de {i} * {f} = {resultado}")


tabuada_nove()
