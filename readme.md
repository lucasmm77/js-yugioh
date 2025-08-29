# Yu-Gi-Oh! Duelo Simplificado
Este é um projeto web que simula um duelo de cartas de Yu-Gi-Oh!, com uma interface que inclui placar, cartas interativas e uma experiência de fundo imersiva. O jogo é uma representação simplificada das mecânicas de duelo, onde o jogador enfrenta um oponente virtual.

## Visão Geral do Jogo
O jogo se desenrola em um painel dividido em duas seções:

<b>Painel Esquerdo:</b> Exibe o placar de vitórias e derrotas e a carta que foi selecionada.

<b>Painel Direito:</b> Contém as mãos de cartas (sua e do oponente) e a área de duelo central.

<b>O objetivo é simples:</b> o jogador seleciona uma carta de sua mão para duelar contra uma carta aleatória do oponente. A carta com o maior valor de Ataque vence a rodada. O jogo é acionado automaticamente assim que uma carta é selecionada.

## Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes tecnologias web:

<b>HTML:</b> Para a estrutura e marcação da página.

<b>CSS:</b> Para o design, layout (utilizando Flexbox), e estilização dos elementos, incluindo os efeitos de moldura dourada e o posicionamento dos painéis.

<b>JavaScript:</b> Para a lógica do jogo, manipulação do DOM, gestão do estado do jogo e controle da mídia (áudio e vídeo de fundo).

## Funcionalidades Principais
<b>Duelo Automático:</b> O jogo inicia a comparação de cartas imediatamente após o usuário clicar em uma carta de sua mão.

<b>Mãos de Cartas Dinâmicas:</b> As mãos do jogador e do oponente são geradas aleatoriamente a partir de um deck de 3 cartas, permitindo repetições.

<b>Cartas Viradas:</b> As cartas nas mãos são exibidas com o verso, adicionando um efeito de "esconder" a carta até que ela seja selecionada.

<b>Placar Interativo:</b> O placar de vitórias e derrotas é atualizado automaticamente após cada duelo.

<b>Mídia Imersiva:</b> A página inclui um vídeo de fundo e áudio que iniciam com a primeira interação do usuário, proporcionando uma experiência imersiva.

## Como Executar o Projeto
Para rodar o projeto em sua máquina local, siga estes passos:

<b>Clone o repositório:</b>

    Bash

    git clone https://github.com/SEU_USUARIO/SEU_PROJETO.git
    Navegue até o diretório do projeto:

    Bash

    cd SEU_PROJETO

<b>Abra o arquivo index.html:</b>
Simplesmente clique duas vezes no arquivo index.html em seu navegador de arquivos ou arraste-o para o seu navegador web preferido.
