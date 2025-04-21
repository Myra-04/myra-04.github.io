
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { mockDb } from '@/data/mockDatabase';
import { User } from '@/types/database';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUserId = localStorage.getItem('sarawak-user-id');
    if (storedUserId) {
      const userId = parseInt(storedUserId, 10);
      const foundUser = mockDb.getUserById(userId);
      if (foundUser) {
        setUser(foundUser);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Find user in our mock database
      const foundUser = mockDb.getUserByEmail(email);
      
      if (!foundUser) {
        throw new Error('User not found');
      }
      
      // In a real app, we would verify the password hash here
      // For now, we'll just simulate a successful login
      
      setUser(foundUser);
      localStorage.setItem('sarawak-user-id', foundUser.user_id.toString());
      toast({
        title: "Login successful",
        description: `Welcome back, ${foundUser.full_name}!`,
      });
    } catch (error) {
      console.error('Login failed', error);
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      // Check if email already exists
      const existingUser = mockDb.getUserByEmail(email);
      if (existingUser) {
        throw new Error('Email already in use');
      }
      
      // In a real app, we would create a new user in the database
      // For now, we'll create a mock user
      const newUser: User = {
        user_id: mockDb.getUsers().length + 1,
        full_name: name,
        email: email,
        phone_number: '',
        password_hash: 'hashed_' + password, // In a real app, we would hash the password
        role: 'user',
        location: 'Sarawak',
        created_at: new Date().toISOString()
      };
      
      // In a mock database, we can't actually add the user permanently
      // But we can simulate a successful signup
      setUser(newUser);
      localStorage.setItem('sarawak-user-id', newUser.user_id.toString());
      toast({
        title: "Account created",
        description: `Welcome to Sarawak Heritage Connect, ${name}!`,
      });
    } catch (error) {
      console.error('Signup failed', error);
      toast({
        title: "Signup failed",
        description: "Please try again with different information",
        variant: "destructive",
      });
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sarawak-user-id');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
