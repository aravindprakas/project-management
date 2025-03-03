import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }
  function handleCancel(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }
   function handleAddProject(projectData){
    setProjectsState(
      
      prevState=>{
        const newProject = {
          ...projectData,
          id: Math.random()
        };
        return {
          ...prevState,
          selectedProjectID : undefined,
          projects:[...prevState.projects,newProject]
        }
      }
    )
   };

   console.log(projectsState);

  let content;

  if(projectsState.selectedProjectID === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel}/>
  }else if(projectsState.selectedProjectID === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <main className="h-screen mt-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject} project={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
