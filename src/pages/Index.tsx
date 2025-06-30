
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeaturedRecipes from '@/components/FeaturedRecipes';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AdTicker from '@/components/AdTicker';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AdTicker />
        <Features />
        <FeaturedRecipes />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
