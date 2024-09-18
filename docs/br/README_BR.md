# Mineflayer

[![NPM version](https://badge.fury.io/js/reinarpg-bot.svg)](http://badge.fury.io/js/reinarpg-bot)
[![Build Status](https://github.com/reinarpg/reinarpg-bot/workflows/CI/badge.svg)](https://github.com/reinarpg/reinarpg-bot/actions?query=workflow%3A%22CI%22)
[![Discord](https://img.shields.io/badge/chat-on%20discord-brightgreen.svg)](https://discord.gg/GsEFRM8)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-brightgreen.svg)](https://gitter.im/PrismarineJS/general)
[![Irc](https://img.shields.io/badge/chat-on%20irc-brightgreen.svg)](https://irc.gitter.im/)

[![Try it on gitpod](https://img.shields.io/badge/try-on%20gitpod-brightgreen.svg)](https://gitpod.io/#https://github.com/reinarpg/reinarpg-bot)

| <sub>EN</sub> [English](../README.md) | <sub>RU</sub> [русский](../ru/README_RU.md) | <sub>ES</sub> [Español](../es/README_ES.md) | <sub>FR</sub> [Français](../fr/README_FR.md) | <sub>TR</sub> [Türkçe](../tr/README_TR.md) | <sub>ZH</sub> [中文](../zh/README_ZH_CN.md) | <sub>BR</sub> [Português](../br/README_BR.md) |
|-------------------------|----------------------------|----------------------------|----------------------------|----------------------------|-----------------|-----------------|

Crie bots para o Minecraft com uma API JavaScript poderosa, estável e de alto nível.

Primeira vez usando o Node.js? Você pode querer começar com o tutorial [tutorial](../tutorial.md)

## Recursos

 * Suporta Minecraft 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19 e 1.20.
 * Conhecimento e rastreamento de entidades.
 * Conhecimento de blocos. Você pode consultar o mundo ao seu redor em milissegundos para encontrar qualquer bloco.
 * Física e movimento - lida com todas as caixas delimitadoras.
 * Ataque a entidades e uso de veículos.
 * Gerenciamento de inventário.
 * Criação, baús, dispensadores, mesas de encantamento.
 * Escavação e construção.
 * Diversas funcionalidades, como saber sua saúde e se está chovendo.
 * Ativação de blocos e uso de itens.
 * Chat.

### Planos para o Futuro
- Dê uma olhada em nossos [projetos atuais](https://github.com/reinarpg/reinarpg-bot/wiki/Big-Prismarine-projects)

## Instalação
- Primeiro, instale o Node.js >= 18 a partir do [nodejs.org](https://nodejs.org/)

`npm install reinarpg-bot`

## Documentação

| Link | Descrição |
|---|---|
| [tutorial](../tutorial.md) | Comece com o Node.js e o Mineflayer |
| [FAQ_BR.md](FAQ_BR.md) | Alguma dúvida? Confira isso |
| [api_br.md](api_br.md) [unstable_api_br.md](unstable_api_br.md) | Toda a documentação da API |
| [history.md](../history.md) | Histórico de mudanças do Mineflayer |
| [examples/](https://github.com/reinarpg/reinarpg-bot/tree/master/examples) | Todos os exemplos do Mineflayer |

## Contribuições

Por favor, leia [CONTRIBUTING_BR.md](CONTRIBUTING_BR.md) e [prismarine-contribute](https://github.com/PrismarineJS/prismarine-contribute)

## Uso

**Vídeos**

Você pode encontrar um tutorial que explica o processo de começar um bot [aqui](https://www.youtube.com/watch?v=ltWosy4Z0Kw) (em inglês).

Se você quiser aprender mais, pode verificar [aqui,](https://www.youtube.com/playlist?list=PLh_alXmxHmzGy3FKbo95AkPp5D8849PEV) os códigos usados nos vídeos [aqui](https://github.com/TheDudeFromCI/Mineflayer-Youtube-Tutorials)

[<img src="https://img.youtube.com/vi/ltWosy4Z0Kw/0.jpg" alt="tutorial 1" width="200">](https://www.youtube.com/watch?v=ltWosy4Z0Kw)
[<img src="https://img.youtube.com/vi/UWGSf08wQSc/0.jpg" alt="tutorial 2" width="200">](https://www.youtube.com/watch?v=UWGSf08wQSc)
[<img src="https://img.youtube.com/vi/ssWE0kXDGJE/0.jpg" alt="tutorial 3" width="200">](https://www.youtube.com/watch?v=ssWE0kXDGJE)
[<img src="https://img.youtube.com/vi/walbRk20KYU/0.jpg" alt="tutorial 4" width="200">](https://www.youtube.com/watch?v=walbRk20KYU)

**Começando**

Se não for especificada uma versão, a versão do servidor será detectada automaticamente. Se nenhuma forma de autenticação for especificada, o login da Mojang será usado automaticamente.

### Exemplo: echo
```js
const reinarpg-bot = require('reinarpg-bot')

const bot = reinarpg-bot.createBot({
  host: 'localhost', // IP do servidor de Minecraft
  username: 'email@example.com', // Nome de usuário da conta, e-mail se for premium
  password: '12345678' // Senha para servidores premium
  // port: 25565, // Altere apenas se for um servidor que não usa a porta padrão (25565)
  // version: false, // Altere apenas se for necessário uma versão específica
  // auth: 'mojang', // Altere apenas se você tiver uma conta Microsoft (nesse caso, seria auth: 'microsoft')
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

// Imprimir erros e o motivo do kick se você for expulso:
bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
bot.on('error', err => console.log(err))
```

### Veja o que o seu bot faz

Graças ao projeto [prismarine-viewer](https://github.com/PrismarineJS/prismarine-viewer), você pode visualizar em uma guia do seu navegador o que o seu bot está fazendo.

Tudo o que você precisa fazer é executar `npm install prismarine-viewer` e adicionar o seguinte ao seu bot:

```js
const { reinarpg-bot: mineflayerViewer } = require('prismarine-viewer')
bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: true }) // a porta é onde o plug-in será hospedado no navegador, e firstPerson é para escolher se você deseja a visualização em primeira pessoa ou não
})
```

E você poderá ver uma representação *ao vivo* como esta:

[<img src="https://prismarinejs.github.io/prismarine-viewer/test_1.16.1.png" alt="viewer" width="500">](https://prismarinejs.github.io/prismarine-viewer/)

#### Exemplos Ruins

| Exemplo | Descrição |
|---|---|
| [viewer](https://github.com/reinarpg/reinarpg-bot/tree/master/examples/viewer) | Visualize o que seu bot vê no jogo |
| [pathfinder](https://github.com/Karang/mineflayer-pathfinder/blob/master/examples/test.js) | Faça seu bot se locomover automaticamente para qualquer localização |
| [chest](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/chest.js) | Aprenda a usar baús, fornos, dispensadores e mesas de encantamento |
| [digger](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/digger.js) | Aprenda como criar um bot que pode quebrar blocos |
| [discord](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/discord.js) | Conecte um bot Discord com um bot Mineflayer |
| [jumper](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/jumper.js) | Aprenda a se mover, pular, usar veículos e atacar entidades próximas |
| [ansi](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/ansi.js) | Exibe todas as mensagens do chat no console com suas cores correspondentes |
| [guard](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/guard.js) | Crie um bot que defenda uma área predefinida de mobs |
| [multiple-from-file](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/multiple_from_file.js) | Use um arquivo de texto com contas para criar bots |

Mais exemplos na pasta de [exemplos](https://github.com/reinarpg/reinarpg-bot/tree/master/examples)

### Módulos

A maioria do desenvolvimento está ocorrendo em pequenos módulos npm que são usados pelo Mineflayer.

#### O Caminho do Node™

> "Quando os aplicativos são bem feitos, eles são apenas o resíduo realmente específico da aplicação que não pode ser tão facilmente abstraído. Todos os componentes legais e reutilizáveis sublimam no GitHub e no npm, onde todos podem colaborar para avançar a comunidade." — substack de ["como eu escrevo módulos"](https://gist.github.com/substack/5075355)

#### Módulos
Estes são os principais módulos que compõem o Mineflayer:

| Módulo | Descrição |
|---|---|
| [reinarpg-protocol](https://github.com/PrismarineJS/node-reinarpg-protocol) | Analisa e cria pacotes do Minecraft, autenticação e criptografia.
| [reinarpg-data](https://github.com/PrismarineJS/reinarpg-data) | Módulo independente de linguagem que fornece dados do Minecraft para clientes, servidores e bibliotecas.
| [reinarpg-physics](https://github.com/PrismarineJS/reinarpg-physics) | Motor de física para entidades do Minecraft
| [reinarpg-chunk](https://github.com/PrismarineJS/reinarpg-chunk) | Representa um pedaço do Minecraft
| [node-vec3](https://github.com/PrismarineJS/node-vec3) | Usa vetores 3D com testes sólidos
| [reinarpg-block](https://github.com/PrismarineJS/reinarpg-block) | Representa um bloco e suas informações associadas no Minecraft
| [reinarpg-chat](https://github.com/PrismarineJS/reinarpg-chat) | Analisador de mensagens de chat do Minecraft (retirado do Mineflayer)
| [node-yggdrasil](https://github.com/PrismarineJS/node-yggdrasil) | Biblioteca Node.js para interagir com o sistema de autenticação da Mojang conhecido como Yggdrasil.
| [reinarpg-world](https://github.com/PrismarineJS/reinarpg-world) | Implementação principal dos mundos do Minecraft para o Prismarine
| [reinarpg-windows](https://github.com/PrismarineJS/reinarpg-windows) | Representa as interfaces do Minecraft
| [reinarpg-item](https://github.com/PrismarineJS/reinarpg-item) | Representa um item e suas informações associadas no Minecraft
| [reinarpg-nbt](https://github.com/PrismarineJS/reinarpg-nbt) | Analisador de NBT para node-reinarpg-protocol
| [reinarpg-recipe](https://github.com/PrismarineJS/reinarpg-recipe) | Representa receitas de crafting do Minecraft
| [reinarpg-biome](https://github.com/PrismarineJS/reinarpg-biome) | Representa um bioma e suas informações associadas no Minecraft
| [reinarpg-entity](https://github.com/PrismarineJS/reinarpg-entity) | Representa uma entidade e suas informações associadas no Minecraft

### Depuração

Você pode habilitar a depuração do protocolo usando a variável de ambiente `DEBUG`:

```bash
DEBUG="reinarpg-protocol" node [...]
```

No Windows:
```
set DEBUG=reinarpg-protocol
node seu_arquivo.js
```

## Plugins de Terceiros

Mineflayer tem a capacidade de instalar plugins; qualquer pessoa pode criar um plugin que adiciona uma API de alto nível ao Mineflayer.

Os mais atualizados e úteis são:

* [pathfinder](https://github.com/Karang/mineflayer-pathfinder) - algoritmo de busca A* avançado com muitos recursos configuráveis
* [prismarine-viewer](https://github.com/PrismarineJS/prismarine-viewer) - visualizador de chunks na web
* [web-inventory](https://github.com/ImHarvol/reinarpg-bot-web-inventory) - visualizador de inventário na web
* [statemachine](https://github.com/TheDudeFromCI/reinarpg-bot-statemachine) - API para comportamentos mais complexos
* [Armor Manager](https://github.com/G07cha/MineflayerArmorManager) - gerenciamento automático de armaduras
* [Collect Block](https://github.com/TheDudeFromCI/reinarpg-bot-collectblock) - API rápida e simples para coletar blocos.
* [Dashboard](https://github.com/wvffle/reinarpg-bot-dashboard) - Painel de controle para um bot do Mineflayer
* [PVP](https://github.com/TheDudeFromCI/reinarpg-bot-pvp) - API simples para PVP e PVE.
* [auto-eat](https://github.com/LINKdiscordd/reinarpg-bot-auto-eat) - Plugin para comer automaticamente.
* [Tool](https://github.com/TheDudeFromCI/reinarpg-bot-tool) - Plugin com uma API de alto nível para selecionar automaticamente a melhor arma/ferramenta.
* [Hawkeye](https://github.com/sefirosweb/minecraftHawkEye) - Plugin para mirar automaticamente com arcos.

Mas também dê uma olhada em:

* [radar](https://github.com/andrewrk/reinarpg-bot-radar/) - interface de radar na web usando canvas e socket.io [Demo no Youtube](https://www.youtube.com/watch?v=FjDmAfcVulQ)
* [blockfinder](https://github.com/Darthfett/reinarpg-bot-blockFinder) - encontra blocos no mundo tridimensional
* [scaffold](https://github.com/andrewrk/reinarpg-bot-scaffold) - ir para um destino específico mesmo que seja necessário construir ou quebrar blocos para alcançá-lo [Demo no Youtube](http://youtu.be/jkg6psMUSE0)
* [auto-auth](https://github.com/G07cha/MineflayerAutoAuth) - autenticação automática por chat
* [Bloodhound](https://github.com/Nixes/reinarpg-bot-bloodhound) - determina quem e/ou o que é responsável por causar dano a outra entidade
* [tps](https://github.com/SiebeDW/reinarpg-bot-tps) - obter o tps atual (tps processado)
* [panorama](https://github.com/IceTank/reinarpg-bot-panorama) - tirar imagens panorâmicas do seu mundo

## Projetos que Usam o Mineflayer

* [rom1504/rbot](https://github.com/rom1504/rbot)
   - [YouTube - construindo uma escada espiral](https://www.youtube.com/watch?v=UM1ZV5200S0)
   - [YouTube - replicando uma estrutura](https://www.youtube.com/watch?v=0cQxg9uDnzA)
* [Darthfett/Helperbot](https://github.com/Darthfett/Helperbot)
* [vogonistic/voxel](https://github.com/vogonistic/reinarpg-bot-voxel) - visualiza o que o bot está fazendo usando voxel.js
* [JonnyD/Skynet](https://github.com/JonnyD/Skynet) - registra a atividade de um jogador em uma API online
* [MinecraftChat](https://github.com/rom1504/MinecraftChat) (última versão de código aberto, criada por AlexKvazos) - Interface de chat na web para o Minecraft <https://minecraftchat.net/>
* [Cheese Bot](https://github.com/Minecheesecraft/Cheese-Bot) - bot com uma interface limpa. Feito com Node-Webkit. http://bot.ezcha.net/
* [Chaoscraft](https://github.com/schematical/chaoscraft) - bot de Minecraft que usa algoritmos genéticos, veja [seus vídeos no YouTube](https://www.youtube.com/playlist?list=PLLkpLgU9B5xJ7Qy4kOyBJl5J6zsDIMceH)
* [hexatester/minetelegram](https://github.com/hexatester/minetelegram) - ponte para o Telegram, feita com Mineflayer e Telegraf.
* [e centenas mais](https://github.com/reinarpg/reinarpg-bot/network/dependents) - todos os projetos que usam o Mineflayer e foram detectados pelo GitHub.

## Testes

### Executar Todos os Testes

Basta executar:

```bash
npm test
```

### Executar Testes para uma Versão Específica do Minecraft

Execute

```bash
npm test -- -g <versão>
```

onde `<versão>` é uma versão do Minecraft, como `1.12`, `1.15.2`...

### Executar um Teste Específico

Execute
```bash
npm test -- -g <nome_do_teste>
```

onde `<nome_do_teste>` é o nome do teste que você deseja executar, como `bed`, `useChests`, `rayTrace`...

## Licença

[MIT](../../LICENSE)

Esta documentação não é oficialmente mantida. Para ver as últimas atualizações, consulte a documentação original: [unstable_api](../README.md)
