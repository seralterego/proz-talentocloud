
def anoDeNascimentoUsuario(anoNascimento):
  ano = len(str(anoNascimento))
  if (ano < 4) or (ano > 4):
    print('Ano inválido, digite novamente')
  else:
    print('Seu ano de nascimento é', anoNascimento)

  return anoNascimento


anoNascimento = int(input('Digite o seu ano de nascimento: '))
res = anoDeNascimentoUsuario(anoNascimento)
print(res)