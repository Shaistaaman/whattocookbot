
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { CircleDot, Image, Link as LinkIcon, Youtube, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

interface Message {
  role: 'user' | 'bot';
  content: string;
  links?: {
    type: 'blog' | 'video' | 'image';
    url: string;
    title: string;
  }[];
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      content: 'Hello! I\'m WhatToCookBot. Tell me what ingredients you have, and I\'ll suggest delicious recipes you can make. Do you have any dietary preferences or cuisine preferences?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fileInputs, setFileInputs] = useState<File[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleLinkClick = (url: string) => {
    // Check if the user is already logged in (this is a mock - you would check actual auth state)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!isLoggedIn && !url.includes('login')) {
      // Save the intended URL to redirect after login
      localStorage.setItem('redirectAfterLogin', url);
      
      // Redirect to login
      toast({
        title: "Login Required",
        description: "Please log in to access this content"
      });
      
      navigate('/login');
    } else {
      // User is logged in or already going to login, proceed to the URL
      // In a real app, you might want to handle external URLs differently
      if (url.startsWith('http')) {
        window.open(url, '_blank');
      } else {
        navigate(url);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && fileInputs.length === 0) return;
    
    let userMessage = input;
    if (fileInputs.length > 0) {
      userMessage += fileInputs.length > 0 ? ` [Uploaded ${fileInputs.length} image(s): ${fileInputs.map(file => file.name).join(', ')}]` : '';
    }
    
    // Add user message
    const newMessages = [...messages, { role: 'user' as const, content: userMessage }];
    setMessages(newMessages);
    setInput('');
    setFileInputs([]);
    setIsLoading(true);

    // Simulate bot response with recipe suggestions and links
    setTimeout(() => {
      let botResponse = '';
      let links = [];
      
      if (input.toLowerCase().includes('vegetarian') || input.toLowerCase().includes('vegan')) {
        botResponse = "Based on your dietary preference, I recommend a Vegetable Stir-Fry with tofu, bell peppers, broccoli, and carrots. Here's the recipe and some helpful links:";
        links = [
          { type: 'blog', url: '/login', title: 'Complete Vegetable Stir-Fry Guide' },
          { type: 'video', url: '/login', title: 'Quick Tofu Stir-Fry Tutorial' },
          { type: 'image', url: '/login', title: 'Stir-Fry Preparation' }
        ];
      } else if (input.toLowerCase().includes('italian') || input.toLowerCase().includes('pasta')) {
        botResponse = "How about a classic Italian Pasta Primavera with seasonal vegetables and a light olive oil sauce? Here's the full recipe and some resources:";
        links = [
          { type: 'blog', url: '/recipes', title: 'Ultimate Pasta Primavera Recipe' },
          { type: 'video', url: '/recipes', title: "Chef\'s Pasta Techniques" },
          { type: 'image', url: '/recipes', title: 'Perfect Pasta Plating' }
        ];
      } else if (input.toLowerCase().includes('chicken') || input.toLowerCase().includes('rice')) {
        botResponse = "I can suggest an easy Chicken and Rice bowl with vegetables. It's quick, nutritious, and delicious! Here's the recipe and helpful resources:";
        links = [
          { type: 'blog', url: '/recipes', title: 'One-Pot Chicken Rice Meals' },
          { type: 'video', url: '/recipes', title: 'Perfect Rice Cooking Tips' },
          { type: 'image', url: '/recipes', title: 'Chicken Rice Bowl Presentation' }
        ];
      } else if (fileInputs.length > 0) {
        botResponse = "I've analyzed your uploaded images of ingredients! Based on what I can see, I recommend making a delicious Roasted Vegetable Medley with herb seasoning. Here's the recipe and helpful resources:";
        links = [
          { type: 'blog', url: '/recipes', title: 'Best Vegetable Roasting Techniques' },
          { type: 'video', url: '/recipes', title: 'Perfect Seasoning for Roasted Vegetables' },
          { type: 'image', url: '/recipes', title: 'Beautiful Vegetable Presentation' }
        ];
      } else {
        botResponse = "Thanks for sharing! Based on those ingredients, I can suggest several dishes. Here's a quick and easy option for you: Mediterranean Quinoa Bowl. Combine your ingredients with some olive oil, lemon juice, and herbs.";
        links = [
          { type: 'blog', url: '/recipes', title: 'Mediterranean Diet Benefits' },
          { type: 'video', url: '/recipes', title: 'Quick Quinoa Bowl Preparation' },
          { type: 'image', url: '/recipes', title: 'Quinoa Bowl Variations' }
        ];
      }
      
      setMessages([...newMessages, { 
        role: 'bot' as const, 
        content: botResponse,
        links: links
      }]);
      setIsLoading(false);
      
      toast({
        title: "Recipe Suggestions Ready",
        description: "Check out the personalized recipes based on your ingredients!"
      });
    }, 1500);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      
      // Limit to max 3 files
      const updatedFiles = [...fileInputs];
      
      for (let i = 0; i < newFiles.length; i++) {
        if (updatedFiles.length < 3) {
          updatedFiles.push(newFiles[i]);
        } else {
          toast({
            title: "Upload Limit Reached",
            description: "You can upload a maximum of 3 images"
          });
          break;
        }
      }
      
      setFileInputs(updatedFiles);
      
      toast({
        title: "Images Uploaded",
        description: `We're analyzing your ingredients... (${updatedFiles.length}/3)`
      });
    }
  };

  const removeImage = (index: number) => {
    const updatedFiles = [...fileInputs];
    updatedFiles.splice(index, 1);
    setFileInputs(updatedFiles);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className="w-full max-w-md shadow-lg border-primary/20 animate-float">
      <CardHeader className="bg-smartmeal-bright-orange rounded-t-lg py-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center p-1">
              <Logo />
            </div>
            <div>
              <CardTitle className="text-white text-lg">WhatToCookBot</CardTitle>
              <CardDescription className="text-white/80 text-xs">Your AI cooking assistant</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <CircleDot className="h-3 w-3 text-green-400 animate-pulse" />
            <span className="text-xs text-white/90">Online</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 h-80 overflow-y-auto flex flex-col gap-3 bg-white">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`
              ${message.role === 'user' ? 'ml-auto bg-primary/20' : 'mr-auto bg-muted'}
              p-3 rounded-lg max-w-[80%] transition-all hover:shadow-md
            `}
          >
            <p>{message.content}</p>
            {message.links && (
              <div className="mt-2 flex flex-col gap-1">
                {message.links.map((link, linkIndex) => (
                  <button 
                    key={linkIndex} 
                    onClick={() => handleLinkClick(link.url)}
                    className="flex items-center gap-1 text-xs underline text-primary hover:text-primary/80 transition-colors"
                  >
                    {link.type === 'blog' && <LinkIcon className="h-3 w-3" />}
                    {link.type === 'video' && <Youtube className="h-3 w-3" />}
                    {link.type === 'image' && <Image className="h-3 w-3" />}
                    {link.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="mr-auto bg-muted p-3 rounded-lg flex items-center gap-2">
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/70 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-primary/80 rounded-full animate-pulse delay-150"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="border-t p-4 bg-white">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={triggerFileInput}
              className="cursor-pointer p-2 border rounded hover:bg-accent transition-colors"
            >
              📷
            </button>
            <input 
              ref={fileInputRef}
              id="image-upload" 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageUpload}
              multiple
            />
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell me what ingredients you have..."
              className="flex-1"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-smartmeal-bright-orange hover:bg-smartmeal-red transition-colors"
            >
              Send
            </Button>
          </div>
          {fileInputs.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {fileInputs.map((file, index) => (
                <div key={index} className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-xs">
                  <span className="truncate max-w-[120px]">{file.name}</span>
                  <button 
                    type="button" 
                    onClick={() => removeImage(index)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
              <div className="text-xs text-muted-foreground">
                {fileInputs.length}/3 images
              </div>
            </div>
          )}
        </form>
      </CardFooter>
    </Card>
  );
};

export default ChatBot;
