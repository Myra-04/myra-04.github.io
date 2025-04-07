
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h1 className="text-6xl font-bold text-sarawak-brown mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-sarawak-brown mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-sarawak-red hover:bg-sarawak-red/90 inline-flex items-center gap-2">
            <Home size={18} /> Return to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
