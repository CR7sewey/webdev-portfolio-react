import React from "react";
import about from "../../project-assets/about.svg";

const About = () => {
  return (
    <section className="bg-slate-200 py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={about} className="w-full h-64" />
        <article>
          <div className="border-b border-gray-200 pb-5">
            <h2 className="text-3xl font-medium tracking-wider capitalize">
              Code And Coffee
            </h2>
          </div>
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
