const Hero = () => (
  <div className="flex justify-center p-24">
    <div className="w-3/4">
      <div>Hi, my name is</div>
      <div className="text-[64px] text-primary font-semibold">Nihal Kaul.</div>

      <div className="text-[64px] font-semibold">
        I like to make <span className="text-primary underline">things.</span>
      </div>

      <div className="w-1/2 my-4">
        I&apos;m a software engineer specializing in building exceptional
        digital experiences. Currently, I lead engineering at{" "}
        <a
          className="text-primary font-normal"
          rel="noopener noreferer"
          href="https://www.cherrysubscription.com"
          target="_blank"
        >
          Cherry
        </a>
        .
      </div>
    </div>
  </div>
);

export default Hero;
