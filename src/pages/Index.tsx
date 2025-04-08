
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage, t } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';

const Index: React.FC = () => {
  const { translations, currentLanguage } = useLanguage();
  const featuredArticles = articles.slice(0, 3);
  
  // Translation helpers for the page content
  const translate = (key: string, fallback: string) => {
    return translations[key] || fallback;
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1628744448840-bedc0f9e0944?q=80&w=2070&auto=format&fit=crop')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
              {translations.welcomeMessage}
            </h1>
            <p className="text-lg text-white mb-8 animate-fade-in drop-shadow-lg font-medium">
              {translations.exploreMessage}
            </p>
            <div className="space-x-4 animate-fade-in">
              <Link to="/articles">
                <Button className="bg-sarawak-red hover:bg-sarawak-red/90 text-white">
                  {translations.readMore}
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                  {translations.about}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Articles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-sarawak-brown">
              {translate('featuredArticles', 'Featured Articles')}
            </h2>
            <Link to="/articles" className="text-sarawak-red hover:underline">
              {translate('viewAllArticles', 'View all articles')}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Cultural Categories Section */}
      <section className="py-16 bg-sarawak-cream/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sarawak-brown mb-8 text-center">
            {translate('exploreSarawak', 'Explore Sarawak\'s Heritage')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1628744448840-bedc0f9e0944?q=80&w=2070&auto=format&fit=crop"
                  alt="Traditional textiles"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    console.error("Image failed to load");
                    e.currentTarget.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1280";
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-sarawak-brown">
                  {translate('traditionalTextiles', 'Traditional Textiles')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {translate('textilesDescription', 'Discover the intricate patterns and rich history behind Sarawak\'s textile traditions.')}
                </p>
                <Link to="/articles">
                  <Button variant="outline" className="text-sarawak-red border-sarawak-red hover:bg-sarawak-red/10">
                    {translate('explore', 'Explore')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1583077874340-79db6564698e?q=80&w=2223&auto=format&fit=crop"
                  alt="Culinary Traditions"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    console.error("Image failed to load");
                    e.currentTarget.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1280";
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-sarawak-brown">
                  {translate('culinaryTraditions', 'Culinary Traditions')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {translate('culinaryDescription', 'Experience the diverse flavors and culinary heritage of Sarawak\'s ethnic communities.')}
                </p>
                <Link to="/articles">
                  <Button variant="outline" className="text-sarawak-red border-sarawak-red hover:bg-sarawak-red/10">
                    {translate('explore', 'Explore')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop"
                  alt="Traditional music"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    console.error("Image failed to load");
                    e.currentTarget.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1280";
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-sarawak-brown">
                  {translate('musicFestivals', 'Music & Festivals')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {translate('musicDescription', 'Immerse yourself in the rhythms and celebrations that define Sarawak\'s cultural landscape.')}
                </p>
                <Link to="/articles">
                  <Button variant="outline" className="text-sarawak-red border-sarawak-red hover:bg-sarawak-red/10">
                    {translate('explore', 'Explore')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-sarawak-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {translate('stayUpdated', 'Stay Updated')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {translate('newsletterDescription', 'Subscribe to our newsletter to receive updates on new articles, cultural events, and heritage preservation initiatives.')}
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder={translate('emailPlaceholder', 'Your email address')}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button className="bg-sarawak-yellow text-sarawak-brown hover:bg-sarawak-yellow/90">
              {translate('subscribe', 'Subscribe')}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
