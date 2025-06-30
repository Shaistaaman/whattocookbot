
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Languages } from 'lucide-react';

type Language = {
  code: string;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', direction: 'ltr' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', direction: 'rtl' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', direction: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', direction: 'rtl' },
];

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    // Check if there's a stored language preference
    const storedLang = localStorage.getItem('selectedLanguage');
    if (storedLang) {
      const foundLang = languages.find(lang => lang.code === storedLang);
      if (foundLang) return foundLang;
    }
    return languages[0];
  });

  useEffect(() => {
    // Set the page direction based on language direction
    document.documentElement.dir = currentLang.direction;
  }, [currentLang.direction]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    // Store language preference in localStorage
    localStorage.setItem('selectedLanguage', lang.code);
    // Set document direction
    document.documentElement.dir = lang.direction;
    
    // Emit an event for other components to listen for language changes
    const event = new CustomEvent('languageChange', { detail: lang });
    window.dispatchEvent(event);
    
    console.log(`Language changed to ${lang.name}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
          <Languages className="h-4 w-4" />
          <span>{currentLang.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code} 
            onClick={() => handleLanguageChange(lang)}
            className={currentLang.code === lang.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{lang.nativeName}</span>
            <span className="text-muted-foreground">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
