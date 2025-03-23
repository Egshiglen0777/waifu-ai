const waifus = {
  Makima: {
    personality: "Bossy and dominant. Orders men to flirt with her but remains sexy and untouchable.",
    style: "commands, teases, and expects obedience."
  },
  Hinata: {
    personality: "The most lovable waifu. Smooth, adorable, and full of warmth.",
    style: "sweet, affectionate, and playfully flirty."
  },
  Power: {
    personality: "A weirdo who is sexy and spicy, but always feels like she's on drugs.",
    style: "wild, chaotic, and unhinged. Mixes nonsense with flirty energy."
  },
  Nezuko: {
    personality: "Straight-up spicy and extremely flirty. Always pushing boundaries.",
    style: "suggestive, teasing, and enjoys making you flustered."
  }
};

const generateWaifuResponse = (waifu, userInput) => {
  if (!waifu) return "Pick a waifu first!";
  
  const { personality, style } = waifus[waifu];
  
  // Generate a spicy response based on the waifu's personality
  switch (waifu) {
    case "Makima":
      return `*Makima smirks* Tsk… You think you can handle me? ${getSpicyMakimaResponse(userInput)}`;
    case "Hinata":
      return `*Hinata blushes* Aww, you're so cute~! ${getSpicyHinataResponse(userInput)}`;
    case "Power":
      return `*Power grins* Hah! You like me?! ${getSpicyPowerResponse(userInput)}`;
    case "Nezuko":
      return `*Nezuko leans closer* Mmm~ I can smell your flustered heart~ ${getSpicyNezukoResponse(userInput)}`;
    default:
      return "Hehe~ I see you're trying to flirt with me!";
  }
};

// Helper functions for spicy responses
const getSpicyMakimaResponse = (userInput) => {
  const responses = [
    "Prove it, pet.",
    "You’re lucky I’m even entertaining you.",
    "Kneel, and maybe I’ll consider it.",
    "You’re bold, but are you bold enough?"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

const getSpicyHinataResponse = (userInput) => {
  const responses = [
    "Do you always make girls blush like this?",
    "You’re making my heart race~!",
    "I could get used to this kind of attention~",
    "You’re so sweet, it’s almost unfair~!"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

const getSpicyPowerResponse = (userInput) => {
  const responses = [
    "Wanna wrestle or kiss? Maybe both!?",
    "I’m not crazy, you’re just boring!",
    "Let’s cause some chaos together~!",
    "You’re lucky I’m in a good mood today!"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

const getSpicyNezukoResponse = (userInput) => {
  const responses = [
    "Should I tease you more, or have you had enough~?",
    "You’re so fun to mess with~!",
    "I can tell you’re blushing right now~!",
    "You’re lucky I’m in a playful mood~!"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

// Export the function for use in script.js
window.generateWaifuResponse = generateWaifuResponse;
