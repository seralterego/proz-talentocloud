# """ AULA AO VIVO 04 - Variáveis, operadores e estruturas condicionais no Python (08/11/2023) """
NUMERO = 5
NUMERO2 = 0.5
NUMERO3 = "Leitão"
print(NUMERO)
print(NUMERO2)
print(NUMERO3)
print(type(NUMERO))
print(type(NUMERO2))
print(type(NUMERO3))

# --------------------

# Cria um algoritmo que salve as informações da sua bebida favorita
#   - Preço
#   - Nome
#   - Alcoolica

PRECO = 3
NOME = 'Cerveja'
ALCOOLICA = "alcoolica"

# modelo 01
print("Minha bebida favorita é", NOME,
      ", com preço aproximado de", PRECO,  "e é", ALCOOLICA)
# modelo 02
print(f"Minha bebida favorita é {
      NOME}, com preço aproximado de {PRECO} e é {ALCOOLICA}.")

# --------------------
# ''' NOVO EXERCÍCIO - Almoço preferido '''

prato = "Baião de Dois"
preco = 30.00
bebida = 7.00
orcamento = 10.00

print(prato)
print(preco)
print(orcamento)

valorTotal = preco + bebida

print("O valor total da minha compra é de", valorTotal)

# --------------------

# Criar um algoritmo para salvar as informações de um almoço e orçamento. Comparar se a pessoa teria dinheiro ou não e informar a ela.
# Percentual do garçom: O percentual será variável.
# Bom amigo, ou é verdadeiro ou é falso.

# VARIÁVEIS
pratoEntrada = "Salada de beringela"
pratoPrincipal = "Picanha ao alho com arroz integral"
sobremesa = "Salada de frutas"
bebida = "Suco de laranja"
precoEntrada = 15.00
precoPratoPrincipal = 60.00
precoSobremesa = 10.00
precoBebida = 6.00
orcamento = 100.00
percentualGarcom = 0.1
bomAmigo = True
# PRINT DAS VARIÁVEIS INDIVIDUALMENTE
print("Prato de entrada:", pratoEntrada)
print("Prato Principal:", pratoPrincipal)
print("Sobremesa:", sobremesa)
print("Bebida:", bebida)
print("Valor prato entrada: R$", precoEntrada)
print("Valor prato principal: R$", precoPratoPrincipal)
print("Valor sobremesa: R$", precoSobremesa)
print("Valor bebida: R$", precoBebida)
print("Valor em carteira: R$", orcamento)
print("Valor do garçom: R$", percentualGarcom)
print("Tem um parça?", bomAmigo)

# SOMA DOS VALORES
valorTotalAlmocoSemGarcom = precoEntrada + \
    precoPratoPrincipal + precoSobremesa + precoBebida
print(valorTotalAlmocoSemGarcom)
valorTotalAlmocoComGarcom = valorTotalAlmocoSemGarcom + \
    (percentualGarcom * 100)
print(valorTotalAlmocoComGarcom)

# SEM PAGAMENTO DO GARÇOM
if (orcamento >= valorTotalAlmocoSemGarcom):
    print("Tenho saldo pra pagar a conta")

# COM PAGAMENTO DO GARÇOM
if (orcamento <= valorTotalAlmocoComGarcom):
    print("Não tenho saldo pra pagar a conta")
elif bomAmigo() == True:
    print("Amigo salvou o almoço")
else:
    print("Bora lavar uns pratos...")


# ''' Link da resolução do colega '''
