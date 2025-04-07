
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage, t } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, Globe, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { currentLanguage, languages, changeLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-sarawak-brown/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-sarawak-red">Sarawak</span>
              <span className="text-xl font-bold text-sarawak-green">Connect</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 text-sarawak-brown hover:text-sarawak-red">{t('home')}</Link>
            <Link to="/articles" className="px-3 py-2 text-sarawak-brown hover:text-sarawak-red">{t('articles')}</Link>
            <Link to="/about" className="px-3 py-2 text-sarawak-brown hover:text-sarawak-red">{t('about')}</Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Globe size={16} />
                  <span>{currentLanguage.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((language) => (
                  <DropdownMenuItem 
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={language.code === currentLanguage.code ? "bg-accent text-accent-foreground" : ""}
                  >
                    {language.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <User size={16} />
                    <span>{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/reading-history">Reading History</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t('logout')}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">{t('login')}</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="default" size="sm" className="bg-sarawak-red hover:bg-sarawak-red/90">
                    {t('signup')}
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-sarawak-brown hover:text-sarawak-red focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-sarawak-brown/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-sarawak-brown hover:text-sarawak-red" onClick={toggleMenu}>
              {t('home')}
            </Link>
            <Link to="/articles" className="block px-3 py-2 text-sarawak-brown hover:text-sarawak-red" onClick={toggleMenu}>
              {t('articles')}
            </Link>
            <Link to="/about" className="block px-3 py-2 text-sarawak-brown hover:text-sarawak-red" onClick={toggleMenu}>
              {t('about')}
            </Link>
            
            <div className="border-t border-sarawak-brown/10 my-2 pt-2">
              <div className="px-3 py-2 text-sarawak-brown">{t('language')}</div>
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    changeLanguage(language.code);
                    toggleMenu();
                  }}
                  className={`block w-full text-left px-3 py-2 ${
                    language.code === currentLanguage.code 
                      ? 'text-sarawak-red font-medium' 
                      : 'text-sarawak-brown hover:text-sarawak-red'
                  }`}
                >
                  {language.name}
                </button>
              ))}
            </div>
            
            <div className="border-t border-sarawak-brown/10 my-2 pt-2">
              {user ? (
                <>
                  <div className="px-3 py-2 text-sarawak-brown">
                    Logged in as <span className="font-medium">{user.name}</span>
                  </div>
                  <Link to="/profile" className="block px-3 py-2 text-sarawak-brown hover:text-sarawak-red" onClick={toggleMenu}>
                    My Profile
                  </Link>
                  <Link to="/reading-history" className="block px-3 py-2 text-sarawak-brown hover:text-sarawak-red" onClick={toggleMenu}>
                    Reading History
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                    className="block w-full text-left px-3 py-2 text-sarawak-brown hover:text-sarawak-red"
                  >
                    {t('logout')}
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block px-3 py-2 text-sarawak-brown hover:text-sarawak-red" onClick={toggleMenu}>
                    {t('login')}
                  </Link>
                  <Link to="/signup" className="block px-3 py-2 text-sarawak-brown hover:text-sarawak-red" onClick={toggleMenu}>
                    {t('signup')}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
