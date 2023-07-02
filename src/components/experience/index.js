"use client";

import React from "react";
import { JobsList } from "../../utils/config";

const Experience = () => {
  const [selectedJob, setSelectedJob] = React.useState(JobsList[0]);

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <div id="experience" className="p-4 md:p-24 my-12 md:my-0">
      <div className="flex items-center text-xl">
        <span className="text-primary">02.</span>
        <span className="text-secondary font-semibold ml-2">
          Where I&apos;have Worked
        </span>
        <div className="hidden md:block h-[1px] w-2/5 bg-secondary ml-4" />
      </div>

      <div className="md:flex my-8">
        <div className="flex md:block overflow-x-auto">
          {JobsList.map((job) => (
            <div
              key={job?.company}
              onClick={() => handleSelectJob(job)}
              className={`w-40 h-10 border-b-[1px] md:border-b-0 md:border-l-[1px] border-secondary flex items-center cursor-pointer hover:text-primary ${
                selectedJob?.company === job?.company
                  ? "border-b-2 md:border-b-0 md:border-l-[1px] border-primary text-primary bg-menu"
                  : ""
              }`}
            >
              <div className="pl-4 text-sm">{job?.company}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 pl-4 min-h-[300px] md:pl-8 md:mt-0">
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

          <ul className="text-sm mt-2">
            {selectedJob?.accomplishments?.map((accomplishment, i) => (
              <li key={i} className="mb-2">
                {accomplishment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
