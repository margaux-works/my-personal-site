import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="flex h-screen bg-background">
      <div className="flex flex-col">
        <Header />

        <Hero />
        <Projects />
      </div>
    </main>
  );
}
