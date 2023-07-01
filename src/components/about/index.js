import { SkillsList } from "../../utils/config";

const About = () => {
  return (
    <div id="about" className="flex justify-center p-24">
      <div className="w-3/4">
        <div className="flex items-center text-2xl">
          <span className="text-primary">01.</span>
          <span className="text-secondary font-semibold ml-2">About Me</span>
          <div className="h-[1px] w-2/5 bg-secondary ml-4" />
        </div>

        <div className="w-1/2 my-8">
          <p>
            Hello! My name is <span className="text-primary">Nihal</span> and I
            enjoy creating things that live on the internet. My interest in web
            development started back in 2016 when I was introduced to React.js
            by a friend.
          </p>

          <p className="my-4">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="grid grid-cols-2 gap-2">
            {SkillsList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
