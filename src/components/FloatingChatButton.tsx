
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';
import ChatBot from './ChatBot';

type Language = {
  code: string;
  direction: 'ltr' | 'rtl';
};

const languages: Record<string, Language> = {
  'en': { code: 'en', direction: 'ltr' },
  'ur': { code: 'ur', direction: 'rtl' },
  'hi': { code: 'hi', direction: 'ltr' },
  'ar': { code: 'ar', direction: 'rtl' }
};

const FloatingChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>(languages['en']);
  const location = useLocation();

  // Close the chat when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Listen for language changes and custom openChatBot event
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      if (event.detail && event.detail.code && languages[event.detail.code]) {
        setCurrentLang(languages[event.detail.code]);
      }
    };

    const handleOpenChatBot = () => {
      setIsOpen(true);
    };

    // Add event listener for custom language change events
    window.addEventListener('languageChange' as any, handleLanguageChange as EventListener);
    
    // Add event listener for openChatBot event
    window.addEventListener('openChatBot', handleOpenChatBot);

    // Check if there's a language stored in localStorage
    const storedLang = localStorage.getItem('selectedLanguage');
    if (storedLang && languages[storedLang]) {
      setCurrentLang(languages[storedLang]);
    }

    return () => {
      window.removeEventListener('languageChange' as any, handleLanguageChange as EventListener);
      window.removeEventListener('openChatBot', handleOpenChatBot);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div 
        className={`fixed top-1/2 transform -translate-y-1/2 z-30 cursor-pointer transition-all duration-300 hover:scale-110 ${
          currentLang.direction === 'rtl' ? 'left-0' : 'right-0'
        }`}
      >
        <button 
          onClick={toggleChat}
          className="flex items-center justify-center bg-smartmeal-bright-orange hover:bg-smartmeal-red text-white rounded-l-full p-4 shadow-lg"
          aria-label="Open chat assistant"
          style={{ borderTopRightRadius: currentLang.direction === 'rtl' ? '9999px' : '0', 
                   borderBottomRightRadius: currentLang.direction === 'rtl' ? '9999px' : '0',
                   borderTopLeftRadius: currentLang.direction === 'rtl' ? '0' : '9999px',
                   borderBottomLeftRadius: currentLang.direction === 'rtl' ? '0' : '9999px' }}
        >
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Chat Bot" 
              className="w-10 h-10"
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40 backdrop-blur-sm">
          <div className="relative animate-scale-in">
            <button 
              onClick={toggleChat}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-50"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <ChatBot />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatButton;
