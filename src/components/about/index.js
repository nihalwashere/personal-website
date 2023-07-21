import { SkillsList } from "../../utils/config";

const About = () => {
  return (
    <div id="about" className="p-4 md:p-24">
      <div className="flex items-center text-xl">
        <span className="text-primary">01.</span>
        <span className="text-secondary font-semibold ml-2">About Me</span>
        <div className="hidden md:block h-[1px] w-2/5 bg-secondary ml-4" />
      </div>

      <div className="w-11/12 md:w-3/4 my-4">
        <p>
          Hello! My name is <span className="text-primary">Nihal</span> and I
          enjoy building things that live in the cloud. My interest in cloud
          development started back in 2016 when an apple from the cloud fell on
          my head.
        </p>

        <p className="my-4">
          Here are a few technologies I&apos;ve been working with:
        </p>

        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 px-4">
          {SkillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
