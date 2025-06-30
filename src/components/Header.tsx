
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-bold text-xl hidden sm:inline-block">WhatToCookBot</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className="px-4 py-2">Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/recipes">
                  <NavigationMenuLink className="px-4 py-2">Recipes</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                    <Link to="/blog" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                      <div className="font-medium">Blog</div>
                      <div className="text-sm text-muted-foreground">Cooking tips and insights</div>
                    </Link>
                    <Link to="/recommendations" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                      <div className="font-medium">Recommendations</div>
                      <div className="text-sm text-muted-foreground">Restaurants & more</div>
                    </Link>
                    <Link to="/nutrition-guide" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                      <div className="font-medium">Nutrition Guide</div>
                      <div className="text-sm text-muted-foreground">Healthy eating tips</div>
                    </Link>
                    <Link to="/help-center" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                      <div className="font-medium">Help Center</div>
                      <div className="text-sm text-muted-foreground">Get assistance</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className="px-4 py-2">About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <div className="hidden md:flex gap-2">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw]">
                <div className="mt-6 flex flex-col gap-6">
                  <Link to="/" className="flex items-center">
                    <Button variant="ghost" className="w-full justify-start text-lg font-medium" onClick={() => setIsOpen(false)}>
                      Home
                    </Button>
                  </Link>
                  <Link to="/recipes" className="flex items-center">
                    <Button variant="ghost" className="w-full justify-start text-lg font-medium" onClick={() => setIsOpen(false)}>
                      Recipes
                    </Button>
                  </Link>
                  <Link to="/blog" className="flex items-center">
                    <Button variant="ghost" className="w-full justify-start text-lg font-medium" onClick={() => setIsOpen(false)}>
                      Blog
                    </Button>
                  </Link>
                  <Link to="/recommendations" className="flex items-center">
                    <Button variant="ghost" className="w-full justify-start text-lg font-medium" onClick={() => setIsOpen(false)}>
                      Recommendations
                    </Button>
                  </Link>
                  <Link to="/about" className="flex items-center">
                    <Button variant="ghost" className="w-full justify-start text-lg font-medium" onClick={() => setIsOpen(false)}>
                      About
                    </Button>
                  </Link>
                  <Link to="/nutrition-guide" className="flex items-center">
                    <Button variant="ghost" className="w-full justify-start text-lg font-medium" onClick={() => setIsOpen(false)}>
                      Nutrition Guide
                    </Button>
                  </Link>
                  <Link to="/help-center" className="flex items-center">
                    <Button variant="ghost" className="w-full justify-start text-lg font-medium" onClick={() => setIsOpen(false)}>
                      Help Center
                    </Button>
                  </Link>
                  <div className="flex flex-col gap-2 mt-4">
                    <Link to="/login" className="w-full">
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link to="/signup" className="w-full">
                      <Button className="w-full">Sign Up</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-50 py-2 px-4 flex justify-around items-center">
          <Link to="/" className="flex flex-col items-center text-xs">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </Button>
            <span>Home</span>
          </Link>
          <Link to="/recipes" className="flex flex-col items-center text-xs">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </Button>
            <span>Recipes</span>
          </Link>
          <Link to="/blog" className="flex flex-col items-center text-xs">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
            </Button>
            <span>Blog</span>
          </Link>
          <Link to="/login" className="flex flex-col items-center text-xs">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </Button>
            <span>Login</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
