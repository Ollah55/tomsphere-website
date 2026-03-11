import { useState, useEffect } from "react";
import "../styles/whatsappFloat.css";
import { MessageCircle } from "lucide-react";

function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="whatsapp-wrapper">

      {showBubble && (
        <div className="whatsapp-bubble">
          Need a website? Chat with us!
        </div>
      )}

      <a
        href="https://wa.me/2347043998793?text=Hello%20I%20want%20to%20start%20a%20project%20with%20Tomsphere%20Globaltech"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={24} />
        <span className="whatsapp-text">WhatsApp</span>
      </a>

    </div>
  );
}

export default WhatsAppFloat;