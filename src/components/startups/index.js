import Icon from "../icons/icon";

const Startups = () => {
  return (
    <div id="startups" className="p-4 md:p-24 my-12 md:my-0">
      <div className="flex items-center text-xl">
        <div>
          <span className="text-primary">03.</span>
          <span className="text-secondary font-semibold ml-2">
            Startups I have helped go 0 to 1
          </span>
        </div>
        <div className="hidden md:block h-[1px] w-2/5 bg-secondary ml-4" />
      </div>

      <div className="my-8">
        <div className="text-2xl font-semibold text-center my-12">
          My best work so far
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mt-2">
            <a
              href="https://www.cherrysubscription.com/"
              rel="noopener noreferer"
              target="_blank"
              className="text-primary font-semibold text-2xl w-fit"
            >
              Cherry Subscription
            </a>

            <a
              href="https://www.cherrysubscription.com/"
              rel="noopener noreferer"
              target="_blank"
            >
              <Icon
                name="External"
                width={24}
                height={24}
                className="text-secondary hover:text-primary cursor-pointer"
              />
            </a>
          </div>

          <p className="mt-2">
            Leading in person subscription platform designed for small
            businesses. Cherry is an{" "}
            <a
              href="https://www.beondeck.com/"
              rel="noopener noreferer"
              target="_blank"
              className="text-primary font-medium"
            >
              On Deck (ODX 1)
            </a>{" "}
            backed startup.
          </p>
        </div>
        {/* eslint-disable-next-line */}
        <img
          src="/images/cherry.png"
          alt="Cherry Subscription"
          className="rounded-md mt-4"
        />
        <p className="mt-8 italic">
          I highly recommend Nihal to anyone who is looking for an amazing lead
          engineer and phenomenal teammate who can bring concepts to life.
          He&apos;s that good. Not only is he great to work with but he knows
          his stuff. One of the best things about Nihal is his analytical
          thinking, he thinks about the purpose behind product and user
          experience. As well, Nihal, is highly responsible and everything you
          could want in a team member. I would trust any project to him and
          believe he is going to make an imprint in tech. I would definitely
          work with him again in the future.
        </p>

        <a
          href="https://www.linkedin.com/in/bentaran/"
          rel="noopener noreferer"
          target="_blank"
          className="text-primary"
        >
          - Benjamin Taran (Founder & CEO @ Cherry Subscription)
        </a>
      </div>
    </div>
  );
};

export default Startups;
