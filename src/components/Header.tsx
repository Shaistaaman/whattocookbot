import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const getUserInitials = () => {
    if (user?.full_name) {
      return user.full_name.split(' ').map(n => n[0]).join('').toUpperCase();
    }
    if (user?.username) {
      return user.username.slice(0, 2).toUpperCase();
    }
    if (user?.email) {
      return user.email.slice(0, 2).toUpperCase();
    }
    return 'U';
  };

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
                    {isAuthenticated && (
                      <Link to="/recommendations" className="block p-3 space-y-1 rounded-md hover:bg-accent">
                        <div className="font-medium">Recommendations</div>
                        <div className="text-sm text-muted-foreground">Restaurants & more</div>
                      </Link>
                    )}
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
          
          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {user?.full_name && (
                        <p className="font-medium">{user.full_name}</p>
                      )}
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}

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
                  {isAuthenticated && (
                    <Link to="/recommendations" className="flex items-center">
                      <Button variant="ghost" className="w-full justify-start text-lg font-medium" onClick={() => setIsOpen(false)}>
                        Recommendations
                      </Button>
                    </Link>
                  )}
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
                  
                  {isAuthenticated ? (
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                      <div className="px-3 py-2">
                        <p className="font-medium">{user?.full_name || user?.username}</p>
                        <p className="text-sm text-muted-foreground">{user?.email}</p>
                      </div>
                      <Button variant="outline" className="w-full" onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 mt-4">
                      <Link to="/login" className="w-full">
                        <Button variant="outline" className="w-full">Login</Button>
                      </Link>
                      <Link to="/signup" className="w-full">
                        <Button className="w-full">Sign Up</Button>
                      </Link>
                    </div>
                  )}
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
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-col items-center text-xs">
                  <Button variant="ghost" size="icon">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                  <span>Profile</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login" className="flex flex-col items-center text-xs">
              <Button variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </Button>
              <span>Login</span>
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;