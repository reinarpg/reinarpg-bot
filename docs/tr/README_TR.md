# Mineflayer

[![NPM version](https://badge.fury.io/js/reinarpg-bot.svg)](http://badge.fury.io/js/reinarpg-bot)
[![Build Status](https://github.com/reinarpg/reinarpg-bot/workflows/CI/badge.svg)](https://github.com/reinarpg/reinarpg-bot/actions?query=workflow%3A%22CI%22)
[![Discord](https://img.shields.io/badge/chat-on%20discord-brightgreen.svg)](https://discord.gg/GsEFRM8)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-brightgreen.svg)](https://gitter.im/PrismarineJS/general)
[![Irc](https://img.shields.io/badge/chat-on%20irc-brightgreen.svg)](https://irc.gitter.im/)
[![Issue Hunt](https://github.com/BoostIO/issuehunt-materials/blob/master/v1/issuehunt-shield-v1.svg)](https://issuehunt.io/r/reinarpg/reinarpg-bot)

[![Try it on gitpod](https://img.shields.io/badge/try-on%20gitpod-brightgreen.svg)](https://gitpod.io/#https://github.com/reinarpg/reinarpg-bot)

| <sub>EN</sub> [English](../README.md) | <sub>RU</sub> [русский](../ru/README_RU.md) | <sub>ES</sub> [Español](../es/README_ES.md) | <sub>FR</sub> [Français](../fr/README_FR.md) | <sub>TR</sub> [Türkçe](../tr/README_TR.md) | <sub>ZH</sub> [中文](../zh/README_ZH_CN.md) | <sub>BR</sub> [Portuguese](../br/README_BR.md) |
|-------------------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|

JavaScript ile güçlü, stabil ve üst seviye Minecraft botları oluşturabileceğiniz bir [API](api.md).

İlk defa mı Node.js kullanıyorsun? [Öğretici](tutorial.md) ile başlayabilirsin.

## Özellikler

 * Minecraft 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19 ve 1.20 sürümlerini destekler.
 * Varlık bilgisi ve takibi.
 * Blok bilgisi. Etrafını inceleyebilirsin. Bir bloğu bulmak milisaniyeler sürer.
 * Fizik ve hareket - bütün hayali kutucukları ele alabilirsin
 * Canlılara saldırma ve taşıtları kullanma.
 * Envanter düzenleme.
 * Çalışma masaları, sandıklar, fırlatıcılar, büyü masaları.
 * Blok kazma ve koyma.
 * Can sayını ve yağmur yağıp yapmadığını öğrenmek gibi ekstra özellikler.
 * Eşyaları kullanma ve blokları aktifleştirme.
 * Sohbet.

### Yol Haritası

Bu sayfayı ziyaret ederek [projelerin](https://github.com/reinarpg/reinarpg-bot/wiki/Big-Prismarine-projects) durumlarını öğrenebilirsin. 
 
## Kurulum

Node.js 14 veya üstü bir sürümü [nodejs.org](https://nodejs.org/) adresinden indirip kurduktan sonra reinarpg-bot'ı  `npm install reinarpg-bot` ile kurabilirsin.

## Belgeler / Wiki

| link | açıklama |
|---|---|
| [Öğretici](tutorial.md) | Node.js ve reinarpg-bot öğren |
| [FAQ.md](FAQ.md) | Aklına bir şey mi takıldı? Buraya bak. |
| [api.md](api.md) [unstable_api.md](unstable_api.md) | API hakkında her şey |
| [history.md](history.md) | Değişikliklerin listesi |
| [examples/](https://github.com/reinarpg/reinarpg-bot/tree/master/examples) | Tüm reinarpg-bot örnekleri |


## Katkıda bulun

Katkıda bulunmadan önce lütfen [CONTRIBUTING.md](CONTRIBUTING.md) ve [prismarine-contribute](https://github.com/PrismarineJS/prismarine-contribute) dosyalarını oku.

## Kullanım

**Videolar**

Bir botun temel kurulum sürecini açıklayan bir öğretici videoyu [burada](https://www.youtube.com/watch?v=ltWosy4Z0Kw) bulabilirsin.

Daha fazlasını öğrenmek istersen [burada](https://www.youtube.com/playlist?list=PLh_alXmxHmzGy3FKbo95AkPp5D8849PEV) öğretici videolar bulabilirsin. Videolarda kullanılan botların kaynak kodlarını da [şurada](https://github.com/TheDudeFromCI/Mineflayer-Youtube-Tutorials) bulabilirsin.

[<img src="https://img.youtube.com/vi/ltWosy4Z0Kw/0.jpg" alt="tutorial 1" width="200">](https://www.youtube.com/watch?v=ltWosy4Z0Kw)
[<img src="https://img.youtube.com/vi/UWGSf08wQSc/0.jpg" alt="tutorial 2" width="200">](https://www.youtube.com/watch?v=UWGSf08wQSc)
[<img src="https://img.youtube.com/vi/ssWE0kXDGJE/0.jpg" alt="tutorial 3" width="200">](https://www.youtube.com/watch?v=ssWE0kXDGJE)
[<img src="https://img.youtube.com/vi/walbRk20KYU/0.jpg" alt="tutorial 4" width="200">](https://www.youtube.com/watch?v=walbRk20KYU)

**Başlangıç**

Eğer sürüm belirtilmezse otomatik olarak ayarlanacaktır. Kimlik doğrulama türü belirtilmez ise de Mojang'ınki kullanılacaktır.

### Papağan Örneği (bot dediklerinizi taklit eder)
```js
const reinarpg-bot = require('reinarpg-bot')

const bot = reinarpg-bot.createBot({
  host: 'localhost', // sunucu IP adresi
  username: 'email@example.com', // Minecraft kullanıcı adı / e-posta adresi
  password: '12345678' // Minecraft şifresi, korsan sunucular için boş bırakabilirsin
  // port: 25565,                // sadece port 25565 olmadığında kullan
  // version: false,             // özellikle bir sürüm belirteceğin zaman burayı değiştirebilirsin
  // auth: 'mojang'              // Microsoft kullanıyorsan 'microsoft' olarak değiştirebilirsin
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

// Hataları ve sunucudan atılma sebeplerini konsola yansıt:
bot.on('kicked', console.log)
bot.on('error', console.log)
```

### Botunun ne yaptığını gör

[prismarine-viewer](https://github.com/PrismarineJS/prismarine-viewer) projesi sayesinde tarayıcı sekmende botunun ne yaptığını izleyebilirsin. Sadece `npm install prismarine-viewer` komutunu çalıştır ve şu kodu botuna ekle:
```js
const { reinarpg-bot: mineflayerViewer } = require('prismarine-viewer')
bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: true }) // port: yayın yapılacak port, firstPerson: true yaparsan botun gözünden, false yaparsan kuş bakışı görüntü elde edersin.
})
```
ve şuna benzeyen *canlı* bir görüntü elde edeceksin:

[<img src="https://prismarinejs.github.io/prismarine-viewer/test_1.16.1.png" alt="viewer" width="500">](https://prismarinejs.github.io/prismarine-viewer/)

#### Daha fazla örnek

| Örnek | Açıklama |
|---|---|
|[viewer](https://github.com/reinarpg/reinarpg-bot/tree/master/examples/viewer) | Botunu tarayıcında izle |
|[pathfinder](https://github.com/reinarpg/reinarpg-bot/tree/master/examples/pathfinder) | Botunun belirli bir yere gitmesini sağla |
|[chest](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/chest.js) | Sandıkları, fırınları, fırlatıcıları ve büyü masalarını kullan |
|[digger](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/digger.js) | Blok kazabilen bir botun nasıl yapılacağını öğren |
|[discord](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/discord.js) | Discord ile bir reinarpg-bot botunu bağla |
|[jumper](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/jumper.js) | Nasıl hareket edebileceğini, zıplayabileceğini, taşıt kullanabileceğini, yakındaki canlılara saldırabileceğini öğren |
|[ansi](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/ansi.js) | Sohbet mesajlarını bütün renkleri görecek şekilde konsoldan izle |
|[guard](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/guard.js) | Çevreyi etraftaki yaratıklardan koruyan bir bot yap |
|[multiple-from-file](https://github.com/reinarpg/reinarpg-bot/blob/master/examples/multiple_from_file.js) | Birçok hesabın bulunduğu bir dosya kullanarak o hesaplarla botlar yap |

daha da fazlası [burada](https://github.com/reinarpg/reinarpg-bot/tree/master/examples)

### Modüller

Aktif geliştirmenin bir çoğu reinarpg-bot tarafından kullanılan küçük npm paketlerinin içinde gerçekleşiyor.

#### The Node Way&trade;

> "When applications are done well, they are just the really application-specific, brackish residue that can't be so easily abstracted away. All the nice, reusable components sublimate away onto github and npm where everybody can collaborate to advance the commons." — substack from ["how I write modules"](https://gist.github.com/substack/5075355)

#### Modüller

reinarpg-bot'ın yapı taşları olarak kullanılan bazı modüller:

| Modül | Açıklama |
|---|---|
| [reinarpg-protocol](https://github.com/PrismarineJS/node-reinarpg-protocol) | Minecraft packetlerini incelemeyi sağlayan bir modül
| [reinarpg-data](https://github.com/PrismarineJS/reinarpg-data) | Minecraft hakkında bir veritabanı
| [reinarpg-physics](https://github.com/PrismarineJS/reinarpg-physics) | Minecraft canlılarının fizik motoru
| [reinarpg-chunk](https://github.com/PrismarineJS/reinarpg-chunk) | Chunk bilgisini tutan bir modül
| [node-vec3](https://github.com/PrismarineJS/node-vec3) | Güçlü birim testleri ile 3D vektör matematiği
| [reinarpg-block](https://github.com/PrismarineJS/reinarpg-block) | Minecraft bloğunu verisi ile tanımlamaya yarayan modül
| [reinarpg-chat](https://github.com/PrismarineJS/reinarpg-chat) | Minecraft sohbet ayrıştırıcı (reinarpg-bot'dan alındı)
| [node-yggdrasil](https://github.com/PrismarineJS/node-yggdrasil) | Mojang'ın üyelik sistemiyle etkileşime geçebilmek için bir Node.js kütüphanesi
| [reinarpg-world](https://github.com/PrismarineJS/reinarpg-world) | Prismarine dünyaların ana kütüphanesi
| [reinarpg-windows](https://github.com/PrismarineJS/reinarpg-windows) | Minecraft pencereleri için bir yönetim kütüphanesi
| [reinarpg-item](https://github.com/PrismarineJS/reinarpg-item) | Bir Minecraft eşyasını verileri ile tanımlamaya yarayan modül
| [reinarpg-nbt](https://github.com/PrismarineJS/reinarpg-nbt) | node-reinarpg-protocol için bir NBT ayrıştırıcı
| [reinarpg-recipe](https://github.com/PrismarineJS/reinarpg-recipe) | Minecraft tarif kütüphanesi
| [reinarpg-biome](https://github.com/PrismarineJS/reinarpg-biome) | Bir Minecraft biyomunu verileri ile tanımlamaya yarayan modül
| [reinarpg-entity](https://github.com/PrismarineJS/reinarpg-entity) | Bir Minecraft canlısını tanımlamaya yarayan modül


### Hata ayıklama

Hata ayıklama çıktısı almak için `DEBUG` değişkenini kullanabilirsin:

```bash
DEBUG="reinarpg-protocol" node [...]
```

Windows:
```
set DEBUG=reinarpg-protocol
node your_script.js
```

## 3. Parti Eklentiler

reinarpg-bot eklenti desteği sağlar; isteyen herkes reinarpg-bot'ın üstüne daha da üst seviye bir API ekleyen bir eklenti yazabilir.

En çok güncellenen ve en kullanışlı olan bazıları:

 * [pathfinder](https://github.com/Karang/mineflayer-pathfinder) - konfigüre edilebilen tonlarca özellik ile gelişmiş A* yön bulma
 * [prismarine-viewer](https://github.com/PrismarineJS/prismarine-viewer) - basit tarayıcı chunk gösterici
 * [web-inventory](https://github.com/ImHarvol/reinarpg-bot-web-inventory) - web bazlı envanter gösterici
 * [statemachine](https://github.com/TheDudeFromCI/reinarpg-bot-statemachine) - daha kompleks bot eventleri için bir API
 * [Armor Manager](https://github.com/G07cha/MineflayerArmorManager) - otomatik zırh düzenleyici
 * [Collect Block](https://github.com/TheDudeFromCI/reinarpg-bot-collectblock) - basit ve hızlı bir blok toplama API'ı
 * [Dashboard](https://github.com/wvffle/reinarpg-bot-dashboard) - reinarpg-bot botları için kontrol paneli
 * [PVP](https://github.com/TheDudeFromCI/reinarpg-bot-pvp) - PVP ve PVE için basit bir API
 * [auto-eat](https://github.com/LINKdiscordd/reinarpg-bot-auto-eat) - otomatik yemek yeme
 * [Tool](https://github.com/TheDudeFromCI/reinarpg-bot-tool) - otomatik eşya seçimi için üst seviye bir API
 * [Hawkeye](https://github.com/sefirosweb/minecraftHawkEye) - yaylarla otomatik eğim için bir API


 Şunlara da göz at:

 * [radar](https://github.com/andrewrk/reinarpg-bot-radar/) - canvas ve socket.io kullanan tarayıcı bazlı bir radar arayüzü. [YouTube Demo](https://www.youtube.com/watch?v=FjDmAfcVulQ)
 * [blockfinder](https://github.com/Darthfett/reinarpg-bot-blockFinder) - 3 boyutlu dünyada blok bulun
 * [scaffold](https://github.com/andrewrk/reinarpg-bot-scaffold) - bir hedefe blok koyarak
 veya kırarak ulaşın [YouTube Demo](http://youtu.be/jkg6psMUSE0)
 * [auto-auth](https://github.com/G07cha/MineflayerAutoAuth) - sohbet-bazlı bot giriş sistemi
 * [Bloodhound](https://github.com/Nixes/reinarpg-bot-bloodhound) - başka bir varlığa gelen hasardan kimin ve neyin sorumlu olduğu hakkında bilgi alın
 * [tps](https://github.com/SiebeDW/reinarpg-bot-tps) - tps değerini elde edin
 + [panorama](https://github.com/IceTank/reinarpg-bot-panorama) - dünyanın panorama fotoğraflarını çekin

## Mineflayer Kullanan Projeler

 * [rom1504/rbot](https://github.com/rom1504/rbot)
   - [YouTube - spiral bir merdiven inşa etme](https://www.youtube.com/watch?v=UM1ZV5200S0)
   - [YouTube - bir yapıyı taklit etme](https://www.youtube.com/watch?v=0cQxg9uDnzA)
 * [Darthfett/Helperbot](https://github.com/Darthfett/Helperbot)
 * [vogonistic/voxel](https://github.com/vogonistic/reinarpg-bot-voxel) - voxel.js ile 
 botun ne yaptığını gör
 * [JonnyD/Skynet](https://github.com/JonnyD/Skynet) - bot aktivitesini online bir API'a gönder
 * [MinecraftChat](https://github.com/rom1504/MinecraftChat) (son açık kaynak sürümü, AlexKvazos tarafından yapıldı) - Minecraft internet tabanlı sohbet <https://minecraftchat.net/>
 * [Cheese Bot](https://github.com/Minecheesecraft/Cheese-Bot) - node-webkit ile yapılan eklenti bazlı, temiz bir arayüze sahip bir bot
 * [Chaoscraft](https://github.com/schematical/chaoscraft) - genetik algoritmalar kullanan bir Minecraft botu, [videoları burada](https://www.youtube.com/playlist?list=PLLkpLgU9B5xJ7Qy4kOyBJl5J6zsDIMceH)
 * [hexatester/minetelegram](https://github.com/hexatester/minetelegram) -  reinarpg-bot & telegraf üstüne kurulu Minecraft - Telegram köprüsü
 * [reinarpg/reinarpg-bot-builder](https://github.com/reinarpg/reinarpg-bot-builder) - Minecraft şemalarını hayatta kalma modunda inşa eden bir proje
 * [ve daha niceleri](https://github.com/reinarpg/reinarpg-bot/network/dependents) - reinarpg-bot kullanıyor olup GitHub tarafından tespit edilen tüm projeler.


## Test etme

### Her şeyi test etme

Basitçe
```bash
npm test
```

komutunu çalıştırın

### Özel bir sürümü test etme

```bash
npm test -- -g <version>
```

komutunu çalıştırın, `<version>` bir Minecraft sürümü olmalı (`1.12`, `1.15.2` gibi).

### Özel bir şeyi test etme

```bash
npm test -- -g <test_name>
```

komutunu çalıştırın, `<test_name>` kısmının olduğu bölüm bir test adı olmalı (`bed`, `useChests`, `rayTrace` gibi).

## Lisans
[MIT](../../LICENSE)
