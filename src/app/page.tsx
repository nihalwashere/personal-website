import Nav from "../components/nav";
import Hero from "../components/hero";
import Social from "../components/social";
import About from "../components/about";
import Experience from "../components/experience";
import Work from "../components/work";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Nav />

      <div className="flex flex-col justify-center items-center">
        <div className="w-11/12 md:w-3/4">
          <Hero />
          <About />
          <Experience />
          <Work />
          <Contact />
        </div>
      </div>

      <Social />
    </main>
  );
}
