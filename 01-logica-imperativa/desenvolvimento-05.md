# Lógica Imperativa

## Desenvolvimento 05

### Instruções do projeto:
> Elabore um algoritmo que possa descobrir, através de perguntas e respostas, em qual área de um restaurante uma pessoa ou grupo de pessoas precisa ser alocada.
>
> O restaurante tem três áreas: térreo, 1ro andar, e área externa.
>
> **Clientes fumantes ou com animais de estimação precisam ser alocadas na área externa.**
>
> **Grupos de 5 ou mais precisam ser alocados no 1º andar**, pois não dá para juntar mesas no térreo.
>
> **Qualquer outro grupo de pessoas pode ser alocado no térreo.**
>
> **Realize essa atividade no WORD ou no Bloco de Notas, suba esse arquivo para algum repositório e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.**

### Resolução:
<details>
<summary>Algoritmo</summary>
<code style="display: block; width: 100%;">
Var
area-terreo = caractere
area-primeiro-andar = caractere
area-externa = caractere
quantidade-pessoas = inteiro
grupo-fumante = boleano
grupo-animais-estimacao = boleano

Inicio
escreva("Mesa para quantas pessoas?: ")
leia(quantidade-pessoas)


escolha quantidade-pessoas
  caso ">= 5"
    leia quantidade-pessoas
    escreva("Tem algum fumante ou animal de estimação no grupo?: ")
      leia(grupo-fumante)
      leia(grupo-animais-estimacao)
      caso "Sim"
        escreva("Encaminhar grupo para área externa.")
      caso "Não"
        escreva("Encaminhar clientes para o 1º andar.")
  caso "< 5"
    leia quantidade-pessoas
    escreva("Encaminhar clientes para o térreo.")
fimescolha
fimalgoritmo
</code>
</details>
