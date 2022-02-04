# Descrição

Seu segundo projeto com JavaScript será a implementação do jogo Parrot Card Game, um jogo da memória temático com aleatoridade, efeitos e transição, responsividade e papagaios dançantes!

# Requisitos

- Geral
    - [ ]  Não utilize nenhuma biblioteca para implementar este projeto (jQuery, lodash, react, etc), nem outras linguagens que compilem para JS (TypeScript, ELM, etc), somente JavaScript puro.
    - [ ]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub, em um repositório público.
    - [ ]  **A cada requisito implementado** faça um *commit* com uma mensagem descritiva do que você evoluiu.
- Layout
    - [ ]  Aplicar layout para desktop e mobile, seguindo o figma oferecido.
- Distribuição de cartas
    - [ ]  Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar (utilize `prompt`)
    - [ ]  O usuário só poderá inserir números pares no `prompt`, de 4 a 14. Qualquer número que fuja a essa regra não deve ser aceito. No caso de números inválidos, o `prompt` deverá ficar sendo repetido, até que o usuário coloque um número válido.
    - [ ]  Após inserir um número de cartas válido, o jogo deverá inserir as cartas viradas pra baixo na página de forma que a distribuição seja aleatória
        
- Clique na carta
    - [ ]  Ao clicar em uma carta, a mesma deve ser virada
    - [ ]  Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta
    - [ ]  Caso seja a segunda carta virada, existem 2 situações:
    - [ ]  Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo
    - [ ]  Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve **aguardar 1 segundo** e então virar as duas cartas para baixo novamente
        
- Fim do Jogo
    - [ ]  Quando o usuário terminar de virar todas as cartas corretamente, deverá ser exibido um `alert` com a mensagem **"Você ganhou em X jogadas!"** sendo X a quantidade de vezes que o usuário virou uma carta no jogo.

# Bônus (opcional)

- [ ]  Coloque um relógio no topo superior direito da tela, contando quantos segundos já passaram desde o início do jogo. Ao final, informe na mensagem de vitória a quantidade de segundos.
- [ ]  Ao final do jogo, pergunte com um `prompt` se o usuário gostaria de reiniciar a partida. Se ele responder sim, comece novamente o jogo perguntando a quantidade de cartas.
