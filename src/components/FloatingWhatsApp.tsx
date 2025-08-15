import React from 'react';

/**
 * Floating WhatsApp contact button
 *
 * Configuration:
 * - Set your WhatsApp number in .env as VITE_WHATSAPP_NUMBER (digits only, with country code, e.g., 919876543210)
 *   Falls back to the placeholder if not provided.
 */
const FloatingWhatsApp: React.FC = () => {
  const envNumber = (import.meta as ImportMeta).env?.VITE_WHATSAPP_NUMBER as string | undefined;
  // Use a clear placeholder if not set. Replace with your real number (digits only, with country code)
  const number = (envNumber && envNumber.trim()) || '+919360055204';

  const defaultMsg = 'Hello! I would like to know more about ScalePOS.';
  const encodedMsg = encodeURIComponent(defaultMsg);
  const waLink = `https://wa.me/${number}?text=${encodedMsg}`;

  return (
    <div className="fixed bottom-4 right-4 z-40">
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="group relative flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
            {/* WhatsApp SVG Icon (brand) */}
            <svg xmlns="http://www.w3.org/2000/svg"  height="50" fill="currentColor"
                 className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path
                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>


            {/* Tooltip on hover (desktop) */}
            <span
                className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:block">
          Chat on WhatsApp
        </span>
        </a>
    </div>
  );
};

export default FloatingWhatsApp;
