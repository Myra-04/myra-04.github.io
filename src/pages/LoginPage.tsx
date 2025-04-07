
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-md mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-sarawak-brown">Log In</h1>
          <p className="mt-2 text-gray-600">
            Access your account to track your reading progress and save your favorite articles.
          </p>
        </div>
        
        <LoginForm />
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-sarawak-red hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
