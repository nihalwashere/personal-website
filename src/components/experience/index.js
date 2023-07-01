"use client";

import React from "react";
import { JobsList } from "../../utils/config";

const Experience = () => {
  const [selectedJob, setSelectedJob] = React.useState(JobsList[0]);

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <div id="experience" className="flex justify-end p-24">
      <div className="w-3/4">
        <div className="flex items-center text-2xl">
          <div className="h-[1px] w-2/5 bg-secondary mr-4" />

          <span className="text-primary">02.</span>
          <span className="text-secondary font-semibold ml-2">
            Where I&apos;have Worked
          </span>
        </div>

        <div className="flex my-8">
          <div>
            {JobsList.map((job) => (
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
