
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SignupForm from '@/components/SignupForm';

const SignupPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-md mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-sarawak-brown">Create an Account</h1>
          <p className="mt-2 text-gray-600">
            Join our community to track your reading progress and access exclusive content.
          </p>
        </div>
        
        <SignupForm />
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-sarawak-red hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
