"use client";

import React from "react";

const jobs = [
  {
    title: "Lead Engineer",
    company: "LoneWolf",
    location: "San Jose, CA",
    date: "Aug 2022 - Present",
    link: "https://thelonewolf.tech/",
    accomplishments: [""],
  },
  {
    title: "Senior Software Engineer - Frontend",
    company: "Volopay",
    location: "Bangalore, IN",
    date: "Sept 2021 - July 2022",
    link: "https://www.volopay.com/",
    accomplishments: [""],
  },
  {
    title: "Software Engineer",
    company: "Emproto",
    location: "Bangalore, IN",
    date: "Jan 2020 - March 2021",
    link: "https://www.emproto.com/",
    accomplishments: [""],
  },
  {
    title: "JavaScript Developer",
    company: "Properly",
    location: "Pune, IN",
    date: "Sept 2018 - Jan 2020",
    link: "https://getproperly.com/",
    accomplishments: [""],
  },
];

const Experience = () => {
  const [selectedJob, setSelectedJob] = React.useState(jobs[0]);

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <div id="experience" className="flex justify-center p-24">
      <div className="w-3/4">
        <div className="flex items-center text-2xl">
          <span className="text-primary">02.</span>
          <span className="text-secondary font-semibold ml-2">
            Where I&apos;have Worked
          </span>
          <div className="h-[1px] w-2/5 bg-secondary ml-4" />
        </div>

        <div className="flex my-8">
          <div>
            {jobs.map((job) => (
              <div
                key={job?.company}
                onClick={() => handleSelectJob(job)}
                className={`w-40 h-10 border-l-[1px] border-secondary flex items-center cursor-pointer hover:text-primary ${
                  selectedJob?.company === job?.company
                    ? "border-l-2 border-l-primary text-primary bg-menu"
                    : ""
                }`}
              >
                <div className="pl-4 text-sm">{job?.company}</div>
              </div>
            ))}
          </div>

          <div className="pl-8">
            <div className="mt-2">
              <span>{selectedJob?.title}</span>{" "}
              <a
                className="text-primary"
                href={selectedJob?.link}
                rel="noopener noreferer"
                target="_blank"
              >
                @ {selectedJob?.company}
              </a>
            </div>

            <div className="text-sm mt-2">{selectedJob?.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
