import mascotHeadset from "@/assets/mascot-headset.jpeg";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20digital%20marketing%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform animate-pulse-glow overflow-hidden"
    aria-label="Chat on WhatsApp"
  >
    <img src={mascotHeadset} alt="Chat with us" className="w-full h-full object-cover" />
  </a>
);

export default WhatsAppButton;
