
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-sarawak-brown mb-6">About Sarawak Heritage Connect</h1>
        
        <div className="prose prose-lg">
          <p>
            Sarawak Heritage Connect is dedicated to celebrating and preserving the rich cultural tapestry 
            of Sarawak, Malaysia's largest state located on the island of Borneo. Our mission is to connect 
            people with the diverse heritage of Sarawak's indigenous communities and their traditions.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            We aim to document, preserve, and share the cultural knowledge, traditions, and heritage
            of Sarawak's ethnic groups including the Iban, Bidayuh, Orang Ulu, Melanau, Malay, and Chinese communities.
            Through articles, stories, and digital resources, we hope to foster appreciation for Sarawak's 
            multicultural identity and ensure these valuable cultural elements are passed on to future generations.
          </p>
          
          <h2>Sarawak's Cultural Diversity</h2>
          <p>
            Sarawak is home to more than 27 ethnic groups, each with its own language, customs, and cultural practices.
            This extraordinary diversity creates a vibrant cultural landscape that is unique in Malaysia and the world.
            From the intricate beadwork of the Orang Ulu to the rhythmic beats of Iban traditional music, from the 
            distinctive architecture of the longhouses to the rich flavors of the local cuisine – Sarawak's heritage
            is as diverse as it is fascinating.
          </p>
          
          <div className="my-8">
            <img 
              src="https://images.unsplash.com/photo-1585222183529-386e0b8097b9?q=80&w=2070&auto=format&fit=crop" 
              alt="Sarawak Cultural Village" 
              className="rounded-lg w-full h-auto object-cover shadow-lg"
              onError={(e) => {
                console.error("Image failed to load");
                e.currentTarget.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1280";
              }}
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              The Sarawak Cultural Village showcases the traditional architecture and lifestyle of ethnic groups in Sarawak.
            </p>
          </div>
          
          <h2>Language Preservation</h2>
          <p>
            One of our key initiatives is the preservation and promotion of Sarawak's indigenous languages.
            Many of these languages are endangered, with fewer young people learning to speak them fluently.
            By providing content in multiple local languages including Bahasa Iban, Bidayuh, Kayan, and others,
            we hope to contribute to language preservation efforts and make cultural knowledge accessible to 
            all communities.
          </p>
          
          <h2>Join Our Community</h2>
          <p>
            We invite you to explore the articles, stories, and resources on our platform. By creating an account,
            you can track your reading progress, save favorite articles, and contribute to our growing community
            of cultural enthusiasts, researchers, students, and curious minds.
          </p>
          
          <p>
            Together, we can ensure that the rich cultural heritage of Sarawak continues to thrive and inspire
            for generations to come.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
