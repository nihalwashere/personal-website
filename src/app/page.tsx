import Nav from "../components/nav";
import Hero from "../components/hero";
import Social from "../components/social";
import About from "../components/about";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Nav />
      <Hero />
      <Social />
      <About />
    </main>
  );
}
