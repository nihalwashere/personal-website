import Icon from "../icons/icon";

const projects = [
  {
    title: "Social Network for Developers",
    description:
      "A social network for developers who can connect with other developers around the globe, create profiles,share and like blog posts.",
    github: "https://github.com/nihalwashere/react-dev-connector",
    external: "",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "ToDo App Powered by Hasura",
    description:
      "A simple ToDo App powered by Hasura GraphQL Engine at the backend and React.",
    github: "https://github.com/nihalwashere/todo-app",
    external: "",
    tags: ["React.js", "Node.js", "GraphQL", "Auth0"],
  },
  {
    title: "Lyric Finder App",
    description: "React app that finds song lyrics using the Musixmatch API.",
    github: "https://github.com/nihalwashere/lyric-finder",
    external: "",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Netlify Playground",
    description: "Playing around with netlify dev and deploy.",
    github: "https://github.com/nihalwashere/netlify-dev",
    external: "",
    tags: ["Netlify", "CircleCI"],
  },
  {
    title: "Nuxt Dad Jokes",
    description: "Nuxt.js app that lists corny dad jokes.",
    github: "https://github.com/nihalwashere/nuxt-dad-jokes",
    external: "",
    tags: ["Nuxt.js", "Vue.js"],
  },
  {
    title: "Twitter Clone",
    description: "Clone of Twitter built using React.js and MaterialUI.",
    github: "https://github.com/nihalwashere/twitter",
    external: "",
    tags: ["React.js", "MaterialUI"],
  },
  {
    title: "Sliding Form",
    description: "Sliding sign-in and sign-up form built using HTML and CSS.",
    github: "https://github.com/nihalwashere/sliding-form",
    external: "",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Dev Connector Sass Theme",
    description: "Theme for DevConnector app built using Sass.",
    github: "https://github.com/nihalwashere/devconnector-sass",
    external: "",
    tags: ["HTML", "CSS", "Sass"],
  },
  {
    title: "Countdown page in HTML",
    description:
      "A simple coming soon page using HTML, CSS and Vanilla JavaScript.",
    github: "https://github.com/nihalwashere/countdown-page",
    external: "",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "State Capital Search",
    description:
      "A state capital search app based on JSON data filtering built using HTML, CSS and Vanilla JavaScript.",
    github: "https://github.com/nihalwashere/state-capital-search",
    external: "",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Netlify Form Handling",
    description:
      "Demonstrating Netlify's form handling and recaptcha mechanisms.",
    github: "https://github.com/nihalwashere/netlify-form-handling",
    external: "",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Playing around with Kafka.js",
    description:
      "This example demonstrates how we can setup Kafka.js with Node.js. We have bootstrapped Winston logger with Kafka.js and of-course a small example demonstrating the communication between producer and consumer.",
    github: "https://github.com/nihalwashere/kafka-playground",
    external: "",
    tags: ["Node.js", "Kafka.js"],
  },
  {
    title: "Restify Customer API",
    description:
      "RESTful API built with Node.js, Restify, Mongoose and JWT. It uses 'jsonwebtoken' to create tokens and restify-jwt-community to protect routes.",
    github: "https://github.com/nihalwashere/restify-customer-api",
    external: "",
    tags: ["Node.js", "Restify", "MongoDB", "JWT"],
  },
  {
    title: "Node.js & Passport Login",
    description:
      "This is a user login and registration app using Node.js, Express, Passport, Mongoose, EJS and some other packages.",
    github: "https://github.com/nihalwashere/node-passport-login",
    external: "",
    tags: ["Node.js", "Passport", "Express.js", "EJS"],
  },
  {
    title: "Shopping List",
    description:
      "Shopping list app built with the MERN stack along with Redux for state management, Reactstrap and react-transition-group.",
    github: "https://github.com/nihalwashere/shopping-list",
    external: "",
    tags: ["Node.js", "React.js", "Express.js", "MongoDB", "Redux"],
  },
  {
    title: "CRUD REST API",
    description:
      "A CRUD REST API built using the NestJS framework and MongoDB.",
    github: "https://github.com/nihalwashere/nest-rest-api",
    external: "",
    tags: ["Node.js", "NestJS", "MongoDB"],
  },
];

const Work = () => {
  return (
    <div id="work" className="flex justify-center p-24">
      <div className="w-3/4">
        <div className="flex items-center text-2xl">
          <span className="text-primary">03.</span>
          <span className="text-secondary font-semibold ml-2">
            Some Things I&apos;have Built
          </span>
          <div className="h-[1px] w-2/5 bg-secondary ml-4" />
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

        <div className="my-8">
          <div className="text-2xl font-semibold text-center">
            Other Noteworthy Projects
          </div>

          {/* <div className="flex justify-center mt-2">
            <a className="w-fit text-sm hover:underline" href="/archive">
              <span className="">view archive</span>
            </a>
          </div> */}
        </div>

        <div className="grid grid-cols-3 gap-3 my-8">
          {projects.map((project) => (
            <div
              key={project?.title}
              className="flex flex-col justify-between bg-menu h-80 rounded-md p-8"
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
    </div>
  );
};

export default Work;
