import { MessageCircle } from 'lucide-react';

const FloatingElements = () => {
  return (
    <>
      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919346122148"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </a>
    </>
  );
};

export default FloatingElements;