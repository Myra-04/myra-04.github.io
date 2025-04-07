
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, t } from '@/contexts/LanguageContext';

const Footer = () => {
  const { currentLanguage } = useLanguage();
  
  return (
    <footer className="bg-sarawak-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <h2 className="text-2xl font-bold">
                <span className="text-sarawak-yellow">Sarawak</span>
                <span className="text-white">Connect</span>
              </h2>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Preserving and celebrating the rich cultural heritage of Sarawak, Malaysia.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sarawak-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-white">{t('home')}</Link></li>
              <li><Link to="/articles" className="text-sm text-gray-300 hover:text-white">{t('articles')}</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">{t('about')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sarawak-yellow">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-sm text-gray-300 hover:text-white">{t('login')}</Link></li>
              <li><Link to="/signup" className="text-sm text-gray-300 hover:text-white">{t('signup')}</Link></li>
              <li><Link to="/reading-history" className="text-sm text-gray-300 hover:text-white">Reading History</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sarawak-yellow">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">Email: info@sarawakconnect.com</li>
              <li className="text-sm text-gray-300">Phone: +60 82 123 456</li>
              <li className="text-sm text-gray-300">Address: Jalan Main Bazaar, 93000 Kuching, Sarawak, Malaysia</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Sarawak Heritage Connect. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-300">
                Current language: {currentLanguage.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
