const Hero = () => (
  <div className="min-h-screen flex flex-col justify-center p-4 md:p-24">
    <div>Hi, my name is</div>

    <div className="text-4xl md:text-[64px] text-primary font-semibold my-2 md:my-4">
      Nihal Kaul.
    </div>

    <div className="text-3xl md:text-[40px] font-semibold my-2 md:my-4">
      I build things on and for the{" "}
      <span className="text-primary underline">cloud.</span>
    </div>

    <div className="w-11/12 md:w-3/4 my-4">
      <p>
        I&apos;m a software engineer specializing in building exceptional
        digital tools. I like creating accessible, human-centered products.{" "}
        <span className="text-primary font-semibold">
          Obsessed with developer experience.
        </span>
      </p>
    </div>
  </div>
);

export default Hero;
