[![N|Solid](http://solutis.com.br/images/logo.png)](http://solutis.com.br)

# NOSSO DESAFIO MORTY - CHATBOT
“Cada cabeça um universo” de infinitas possibilidades. Imagine-se em um multiverso inóspito onde os maiores guerreiros estão congelados em cápsulas e poderão ser acionados para batalhas a qualquer momento. O próximo guerreiro a ser escolhido tem a missão de impedir um novo ataque utilizando seus conhecimentos em tecnologia. Nesse cenário, você é um guerreiro congelado e o chatbot deve fazer com que você seja escolhido para a missão. Para isso, seu chatbot deverá saber responder no mínimo as seguintes questões:
- nome (ex: como se chama?, qual seu nome guerreiro?... )
- idade/data de nascimento (ex: quantos anos você tem?, qual sua idade?...)
- habilidades especiais: (ex: qual seu diferencial de batalha?, quais são suas habilidades especiais?...)
- experiências em combate (ex: Quais batalhas participou?, quais lições aprendidas na batalha?..)
- resumo (ex: qual o resumo do guerreiro?, fale sobre você?...)

Considere também que as características de seu personagem tenham alguma relação com você na vida real, assim a gente já lhe conhece melhor.

## REGRAS GERAIS
Estamos interessados em ver como você utiliza suas habilidades e novas tecnologias para se apresentar para o mercado. Que jeito melhor do que fazer um software que fale por você? Queremos que você nos apresente um chatbot que responda algumas perguntas sobre seu perfil. Aqui vão as regras.
- Faça a [cópia](https://help.github.com/articles/fork-a-repo/) do repositório (fork), desenvolva e submeta uma [solicitação de mudança](https://help.github.com/articles/creating-a-pull-request/) (pull request) no branch master.
- Em caso de dúvidas basta abrir uma issue com sua pergunta (aqui mesmo no github) que nossa equipe irá respondê-lo assim que possível.
- Caso ainda não tenha, crie uma conta gratuita na plataforma de nuvem da IBM (http://bluemix.com) e ative o serviço Watson Assistant.
- Seu chatbot deve ser composto por configuração e contexto no Watson e uma interface que nos permita conversar com ele. 
- Para a interface, podem ser utilizados pacotes prontos que podem ser facilmente encontrados na internet (inclusive no próprio site da IBM).
- O contexto configurado no Watson (entidades, intenções e diálogos) também deve ser exportado e enviado junto com a interface.
- Seu chatbot deve responder um conjunto mínimo de perguntas, mas não precisa parar por aí.
- Nas instruções para execução da interface devem estar presentes as credenciais da API do Watson, além de seu nome e e-mail utilizados no cadastro Gupy


### PLATAFORMA
- IBM (Watson Assistant)


### INTERFACE
O canal utilizado como interface para o chatbot deve ser uma aplicação Web. Sugerimos as seguintes tecnologias:
- Node
- Angular
- CSS


### TESTES
- Não se aplica.

### BUILD E EXECUÇÃO
# Chatbot Client Side
## Running locally

É necessário ter instalado na sua máquina:
- NodeJS, NPM e Angular/Cli

1. Install the dependencies

    ```
    cd /chatbot-ui
    npm install
    ```

2. Run the application

    ```
    npm start
    ```

Observação: Caso tenha mudado a porta no Server.js do Server será necessário mudar a porta também no ChatService.

# Chatbot Server Side
## Running locally

É necessário ter instalado na sua máquina:
- Node e NPM

1. Install the dependencies

    ```
    cd /chatbot-service
    npm install
    ```

2. Run the application

    ```
    npm start
    ```

Observação: Caso der algum erro de porta, e se for necessário trocar o número da porta, se faz necessário trocar também a URL do ChatService no Cliente. 

Acesse a aplicação por http://localhost:4200

# Informações do Criador
Lucas Mascarenhas Lauro da Silva
e-mail: lucasmasc.cc@gmail.com

