# Lógica Imperativa

## Desenvolvimento 06

### Instruções do projeto:

> Num torneio de e-sports é necessário que todos os integrantes da mesma equipe tenham etiquetas que os identifiquem. Por exemplo, se o nome da equipe é “Os Lutadores”, o primeiro membro deve ter uma etiqueta “Os Lutadores – 1", o segundo membro “Os Lutadores – 2", e assim pela frente.
>
> Elabore um algoritmo que permita ao usuário inserir o nome da equipe, e imprime etiquetas para os 5 membros da equipe seguindo o exemplo mostrado acima.
>
> **Realize essa atividade no WORD ou no Bloco de Notas, suba esse arquivo para algum repositório e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.**

### Resolução:

<details>
<summary>Algoritmo</summary>
<code style="display: block; width: 100%;">
  Var
    nomeEquipe = caractere
    contador = inteiro
  Inicio
    escreva ("Digite o nome da sua equipe: ")
    leia(nomeEquipe)
    <!-- para contador <= 5 faca -->
    enquanto(contador <=5)faca
      escreva(nomeEquipe "-" contador)
      contador <- contador+1
    fimquanto
    fimalgoritmo

</code>
</details>
