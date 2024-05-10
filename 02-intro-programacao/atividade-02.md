# Introdução à Programação

## Desenvolvimento 02

### Instruções do projeto:

Desenvolva um algoritmo que utilize as seguintes características de um veículo:

- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
A: Veículos com duas ou três rodas;
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas; E: Veículos com quatro rodas ou mais e com mais de 6000 kg.

**Realize essa atividade do WORD ou no Bloco de Notas, suba esse arquivo para algum repositório (como o Google Drive, o Dropbox ou o OneDrive) e compartilhe o link do arquivo no campo ao lado para que outros desenvolvedores possa analisá-lo.**

### Recursos:

n/d

### Resolução:

Link (enviado) do GitHub: https://github.com/seralterego/proz-talentocloud/blob/master/02-intro-programacao/atividade-02.md

<details>
<summary>Algoritmo</summary>
<code language="python">

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

</code>
</details>
