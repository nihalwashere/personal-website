const Hero = () => (
  <div className="min-h-screen flex flex-col justify-center p-4 md:p-24">
    <div>Hi, my name is</div>

    <div className="text-4xl md:text-[64px] text-primary font-semibold my-2 md:my-4">
      Nihal Kaul.
    </div>

    <div className="text-3xl md:text-[60px] font-semibold my-2 md:my-4">
      I build things for the{" "}
      <span className="text-primary underline">web.</span>
    </div>

    <div className="w-11/12 md:w-3/4 my-4">
      <p>
        I&apos;m a software engineer specializing in building exceptional
        digital experiences. I like creating accessible, human-centered
        products. Currently, I&apos;m focused on building{" "}
        <a
          className="text-primary font-normal"
          rel="noopener noreferer"
          href="https://codekickbot.com"
          target="_blank"
        >
          CodeKickBot
        </a>
        .
      </p>
    </div>
  </div>
);

export default Hero;
