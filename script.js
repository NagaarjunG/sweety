const startBtn = document.getElementById('startKiss');
const lipsBtn = document.getElementById('lipsBtn');
const cheeksBtn = document.getElementById('cheeksBtn');
const stopBtn = document.getElementById('stopBtn');
const rainContainer = document.getElementById('rain-container');
const finalMessage = document.getElementById('finalMessage');

const startMusic = document.getElementById('startMusic');
const lipsMusic = document.getElementById('lipsMusic');
const cheeksMusic = document.getElementById('cheeksMusic');
const stopMusic = document.getElementById('stopMusic');

const sweetWords = [
  "En thangameyyy krishuuuu 💞 ummaahhhhhhhhhhhhhhh diii krishhuu 💋", "muththameyyy 💖", "kisssss 😘", "sweetyyyyyyy 😚", "krishuuu 🥰",
  "chellameyyyy 💞", "thangameyyyyy💝", "laddu 😍", "en jiluuuu 😍","pooveyyy 💐", "en krishnaveniiii..😍","azhagiyeee 💗",
  "kanmaniyeeee 💓", "rose milkuhhh 🥛", "poongotheyyyy 🌸", "en poongotheyyyy 💓", "koththamalli 🌿",
  "en aaasaa krishhhheeyyy 💘", "cup cake ehhhhh 💖", "sweeteyyy love 💝", "honeyyy",
  "Ummmmaaahh 💋💞",
  "Ummaahhhhhh 💗😘",
  "Ummaaaaahhhh 💓😙",
  "Ummaaaaaahhh 💖😍",
  "Ummmmmaaaaah 💝🥰",
  "Ummaaaahhhhhh 💘😘",
  "Uuuummmaahhhh 💞😚",
  "Ummaaaahhh 💋😗",
  "Ummaahhhhh 💓😘",
  "Ummmmmahhhhh 💖😙",
  "Ummaaaaaahhh 💗🥰",
  "Uuuuummmaahhh 💝😍",
  "Ummmmaaahhh 💘😘",
  "Ummaahhhhh 💋😚",
  "Ummaahhhh💞💓",


  
  // New sweet words and romantic quotes
  "love u diii krishuuuu ❤️", "love you to the moon 🌙", "Kaadhaleyyyy💘",
  "sweet dreams, my dear 🌟", "you complete me 💞", "heart and soul ❤️‍🔥", "endless hugs 🤗",
  "kanavu pola un mugam 🌸", "en idhayam un pakkam 💓", "thunai naan irukken 🤝",
  "my sunshine on cloudy days ☀️", " yours 💍", "i wish better half 💕", "always in my thougt 💫",
  "sweetest melody in my heart 🎶", "you’re my girl 🏡", "love’s gentle touch 💗", "together always 💞",
  "my sweetest addiction 🍬", "with you, everything’s better 🌈", "you are angry bird🌠",
  "en manadhil unna 🧡", "nee en vizhiyil 🌺", "my heart’s delight 💖", "beloved forever 💝",
  "you make my heart smile 😊", "kanmaniye varuvadhu ennai 🥰", "precious gem girl uhhh💎",
  "my soul’s partner 👫", "happiness is you 😊", "love beyond words 💌", "you are my peace ☮️",
  "my heart skips a beat 💓", "my sweetest joy 🥰", "un azhagiye unna paarkkum pothu 💐",
  "with you, life sparkles ✨", "you’re my one and only 💕", "sweetest memories with you 📸",
  "my favorite hello and hardest goodbye 💔", "thunai naan irukken en kaiyil 🤝", "un mugam en kanavil 🌙",
  "my love, my life 💖", "kanavilum unathu thunai 🌟", "my heart’s whisper 💗",
  "eternal love 🔥", "with every heartbeat, I love you more ❤️", "you are my forever muse 🎨",
  "en manathin rani 💝", "you’re my sweetest blessing 🙏", "unthan idhayam thunai 🧡",
  "you are my dream 💫", "sweet kisses and warm hugs 💋🤗", "en santhoshameyyyyyyyyyy 🌺",
  "you light up my world 🌞", "my darling, my dear 💕", "un vizhiyin thunai 🧡",
  "my heart’s home 🏠", "love’s gentle flame 🔥", "kanmaniye unathu kalangal 💖",
  "you’re my forever and always 💞", "sweetest love story ever told 📖", "en nenjil unnai 🧡",
  "my sweetest love song 🎵", "eternal flame of love 🔥", "unthan kanavil naan irukken 🌙",
  "you’re my sweetest obsession 💝", "love’s gentle embrace 🤗", "unthan mugam en manam 🌸",
  "my forever flame 🔥", "unthan paattu en kannil 🎶", "you make my heart bloom 🌹",
  "with you, I’m whole 💕", "you’re my heart’s delight 💓", "unthan vizhiyil naan 🌟",
  "sweet love, endless joy 💖", "my heart beats only for you ❤️", "un paattu en kavithai 🎵",
  "you’re my sweetest drlng uhhh🌠", "en manadhil unna 🧡", "my heart’s desire 💘",
  "you light my path 🌟", "unthan uravugal ennai vaazhum 🌸", "love you forever and always 💞",
  "you’re my sweetest blessing 💝", "unthan kaiyil en vaazhvum 🌿", "en loveyyy, en hapinesseyyy 💖",
  "sweet whispers of love 💌", "unthan azhagiye naan 🌹", "my heart sings for you 🎶",
  "with you, life is sooo angryyyyy 🌷", "unthan magizhchi en vaazhvum 🌞", "my sweetest angel 😇"
];

const lipsEmojis = ["💋", "💋 ummaahhh 💋", "💋"];
const cheeksEmojis = ["😘", "😚", "😘💖", "😘🎈"];

const colors = ["#7B1FA2", "#4A148C", "#880E4F", "#6A1B9A", "#AD1457"];

function createRain(items) {
  const rainItem = document.createElement('div');
  rainItem.classList.add('rain-item');
  rainItem.textContent = items[Math.floor(Math.random() * items.length)];
  rainItem.style.left = Math.random() * 100 + "vw";
  rainItem.style.fontSize = (Math.random() * 2 + 1) + "rem";
  rainContainer.appendChild(rainItem);

  setTimeout(() => {
    rainItem.remove();
  }, 10000);
}

function startRain(type) {
  clearInterval(window.rainInterval);
  window.rainInterval = setInterval(() => {
    createRain(type);
  }, 300);
}

function stopAll() {
  clearInterval(window.rainInterval);
  startMusic.pause();
  lipsMusic.pause();
  cheeksMusic.pause();
  stopMusic.pause();
  rainContainer.innerHTML = '';
}

function showButtons(...buttons) {
  [startBtn, lipsBtn, cheeksBtn, stopBtn].forEach(btn => {
    btn.classList.add('hidden');
  });
  buttons.forEach(btn => {
    btn.classList.remove('hidden');
  });
}

function changeBg() {
  document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}

startBtn.addEventListener('click', () => {
  showButtons(lipsBtn, cheeksBtn, stopBtn);
  startMusic.play();
  startRain(sweetWords);
  window.bgInterval = setInterval(changeBg, 2000);
});

lipsBtn.addEventListener('click', () => {
  startMusic.pause();
  cheeksMusic.pause();
  lipsMusic.play();
  startRain(lipsEmojis);
});

cheeksBtn.addEventListener('click', () => {
  startMusic.pause();
  lipsMusic.pause();
  cheeksMusic.play();
  startRain(cheeksEmojis);
});

stopBtn.addEventListener('click', () => {
  stopAll();
  clearInterval(window.bgInterval);
  document.body.style.background = "#4A148C";
  finalMessage.classList.remove('hidden');
  stopMusic.play();
  startRain(["❤️", "❤️", "❤️"]);
  showButtons(startBtn);
});
