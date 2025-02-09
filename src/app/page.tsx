import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex h-screen bg-background">
      <div className="flex flex-col">
        <Header />
        <Hero />
        <Projects />
        <ContactForm />
        <hr className="w-full text-lightGray text-center" />
        <Footer />
      </div>
    </main>
  );
}
