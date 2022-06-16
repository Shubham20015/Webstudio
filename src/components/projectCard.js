import { Icon } from "@iconify/react";
import React from "react";

export default function ProjectCard() {
  return (
    <div className="d-flex gap-2 w-100 my-3">
      <div className="bg-blue text-light px-3 py-2 rounded card-1 d-flex flex-column justify-content-between shadow-sm position-relative">
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="d-flex justify-content-between mb-4 position-relative">
          <div className="p-2 bg-tag rounded tags">
            <Icon icon="fluent:live-24-filled" className="mx-2" />
            Live projects
          </div>
          <div className="p-2 bg-tag rounded tags">View All</div>
        </div>
        <div>
          <h1 className="m-0 fw-bolder">56</h1>
          <p className="fs-8">Currently, the projects is in progress</p>
        </div>
      </div>
      <div className="bg-lightblue text-light px-3 py-2 rounded card-2 d-flex flex-column justify-content-between shadow-sm position-relative">
        <div className="wave-1">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="d-flex justify-content-between mb-4 position-relative">
          <div className="p-2 bg-tag rounded tags">
            <Icon icon="gg:sand-clock" className="mx-2" />
            In Progress
          </div>
        </div>
        <div>
          <h1 className="m-0 fw-bolder">124</h1>
          <p className="fs-8">Projects in progress</p>
        </div>
      </div>
      <div className="bg-purple text-light px-3 py-2 rounded card-2 d-flex flex-column justify-content-between shadow-sm position-relative">
        <div className="wave-3">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="d-flex justify-content-between mb-4 position-relative">
          <div className="p-2 bg-tag rounded tags">
            <Icon icon="teenyicons:file-tick-solid" className="mx-2" />
            Completed
          </div>
        </div>
        <div>
          <h1 className="m-0 fw-bolder">24</h1>
          <p className="fs-8">Completed projects</p>
        </div>
      </div>
    </div>
  );
}
