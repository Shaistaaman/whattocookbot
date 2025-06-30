
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, ChefHat, MessageSquare } from 'lucide-react';
import ChatBot from './ChatBot';
import { Link, useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const openChatBot = () => {
    // Create and dispatch a custom event to open the chat bot
    const event = new Event('openChatBot');
    window.dispatchEvent(event);
  };
  
  const goToRecipes = () => {
    navigate('/recipes');
  };
  
  return (
    <section className="bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            {/* Stats badges */}
            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              <div className="bg-smartmeal-yellow/50 text-amber-700 rounded-full py-2 px-6 flex items-center justify-center sm:justify-start">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold text-sm md:text-base">10K+ happy users</span>
              </div>
              <div className="bg-green-100 text-green-700 rounded-full py-2 px-6 flex items-center justify-center sm:justify-start">
                <ChefHat className="w-5 h-5 mr-2" />
                <span className="font-semibold text-sm md:text-base">124.5K recipes created</span>
              </div>
              <div className="bg-blue-100 text-blue-700 rounded-full py-2 px-6 flex items-center justify-center sm:justify-start">
                <MessageSquare className="w-5 h-5 mr-2" />
                <span className="font-semibold text-sm md:text-base">98% satisfaction rate</span>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none flex flex-col">
                WhatToCookBot 
                <span className="text-primary">Cooking Made Easy with AI</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 text-sm md:text-base lg:text-xl dark:text-gray-400">
                Discover delicious recipes tailored to your ingredients and preferences.
                Our AI-powered assistant helps you cook amazing meals with what you have on hand.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button onClick={openChatBot} size={isMobile ? "default" : "lg"} className="bg-smartmeal-bright-orange hover:bg-smartmeal-red">
                Get Started
              </Button>
              <Button 
                 size={isMobile ? "default" : "lg"} 
                 variant="outline"
                 onClick={goToRecipes}
               >
                 View Recipes
               </Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              No sign-up required to browse recipes. Create an account to save your favorites.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full flex items-center justify-center">
              <div className="absolute">
                <img
                  src="/finalbot.png"
                  alt="WhatToCookBot"
                  className="w-[180px] sm:w-[220px] md:w-[250px] lg:w-[300px] object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
