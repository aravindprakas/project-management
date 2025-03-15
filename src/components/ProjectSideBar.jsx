import React from "react";
import Button from "./Button";

export default function ProjectSideBar({
  onStartAddProject,
  project,
  onSelectProject,
  selectedProjectId
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}> + Add project</Button>
      </div>
      <ul className="mt-8">
        {project.map((projects) => {
          let cssClasses =  "w-full text-left px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800";
          if(project.id === selectedProjectId){
            cssClasses += ' bg-stone-800 text-stone-200';
          }
          else{
            cssClasses += " text-stone-400";
          }
          return (
            <li key={projects.id}>
              <button
                className={cssClasses}
                onClick={()=>onSelectProject(projects.id)}
              >
                {projects.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
