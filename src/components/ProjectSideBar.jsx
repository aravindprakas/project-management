import React from "react";
import Button from "./Button";

export default function ProjectSideBar({onStartAddProject,project}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}> + Add project</Button>
      </div>
      <ul className="mt-8">
        {project.map(projects=><li key={projects.id}>
          <button className="w-full text-left px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800">{projects.title}</button>
        </li>)}
      </ul>
    </aside>
  );
}
