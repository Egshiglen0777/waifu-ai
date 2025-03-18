import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

export default function WaifuChat() {
  const [selectedWaifu, setSelectedWaifu] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const waifuResponse = generateWaifuResponse(selectedWaifu, input);
    setMessages([...messages, { text: input, sender: "user" }, { text: waifuResponse, sender: "waifu" }]);
    setInput("");
  };

  const generateWaifuResponse = (waifu, userInput) => {
    if (!waifu) return "Pick a waifu first!";
    
    const { personality, style } = waifus[waifu];
    return `*${waifu} smirks* ${generateFlirtyResponse(waifu)}`;
  };

  const generateFlirtyResponse = (waifu) => {
    switch (waifu) {
      case "Makima":
        return "Tsk… You think you can handle me? Prove it, pet.";
      case "Hinata":
        return "Aww, you're so cute when you text me~! Do you always make girls blush like this?";
      case "Power":
        return "Hah! You like me?! Bold of you to assume I won't bite~! Wanna wrestle or kiss? Maybe both!?";
      case "Nezuko":
        return "Mmm~ I can just *smell* how flustered you are. Should I tease you more, or have you had enough~?";
      default:
        return "Hehe~ I see you're trying to flirt with me!";
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Choose Your Waifu</h1>
      <div className="flex space-x-4 mb-4">
        {Object.keys(waifus).map((waifu) => (
          <Button key={waifu} onClick={() => setSelectedWaifu(waifu)}>{waifu}</Button>
        ))}
      </div>
      {selectedWaifu && <h2 className="text-xl mb-2">Chatting with {selectedWaifu}</h2>}
      <div className="border p-4 w-96 h-64 overflow-y-auto bg-white rounded-md mb-2">
        {messages.map((msg, i) => (
          <p key={i} className={msg.sender === "user" ? "text-right" : "text-left"}>{msg.text}</p>
        ))}
      </div>
      <div className="flex w-96">
        <Input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1" placeholder="Type a message..." />
        <Button onClick={sendMessage} className="ml-2">Send</Button>
      </div>
    </div>
  );
}
