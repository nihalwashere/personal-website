import Icon from "../icons/icon";
import { ProjectList } from "../../utils/config";

const Work = () => {
  return (
    <div id="work" className="p-4 md:p-24 my-12 md:my-0">
      <div className="flex items-center text-xl">
        <span className="text-primary">03.</span>
        <span className="text-secondary font-semibold ml-2">
          Some Things I&apos;have Built
        </span>
        <div className="hidden md:block h-[1px] w-2/5 bg-secondary ml-4" />
      </div>

      <div className="my-8">
        {/* eslint-disable-next-line */}
        <img
          src="/images/codekickbot.png"
          alt="CodeKickBot"
          className="rounded-md"
          width="100%"
          height="100%"
        />

        <div className="flex flex-col mt-4">
          <div className="text-sm my-2">Featured Project</div>

          <a
            href="https://codekickbot.com/"
            rel="noopener noreferer"
            target="_blank"
            className="text-primary font-semibold text-2xl w-fit"
          >
            CodeKickBot
          </a>

          <p className="my-4">
            A developer tool that helps you to collaborate on pull requests
            efficiently. It integrates with GitHub and Slack.
          </p>
        </div>
      </div>

      <div className="my-12 md:my-24">
        <div className="text-2xl font-semibold text-center">
          Other Noteworthy Projects
        </div>

        {/* <div className="flex justify-center mt-2">
            <a className="w-fit text-sm hover:underline" href="/archive">
              <span className="">view archive</span>
            </a>
          </div> */}
      </div>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 my-8">
        {ProjectList.map((project) => (
          <div
            key={project?.title}
            className="flex flex-col justify-between bg-menu h-80 rounded-md p-8 my-4 md:my-0"
          >
            <div>
              <div className="flex justify-between">
                <div className="text-primary text-lg">{project?.title}</div>
                <a
                  href={project?.github}
                  rel="noopener noreferer"
                  target="_blank"
                >
                  <Icon
                    name="GitHub"
                    width={24}
                    height={24}
                    className="text-secondary hover:text-primary cursor-pointer"
                  />
                </a>
              </div>

              <div className="text-sm mt-4">{project?.description}</div>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-4">
              {project?.tags?.map((tag) => (
                <span key={tag} className="text-xs ">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
