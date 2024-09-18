import { getEnvVariable, SPONSORED_PROJECT_ID } from "./envVariables";

export const getSubProjectById = (projects, id) => {
    const sponsoredProject = projects.find(project => project.id === parseInt(getEnvVariable(SPONSORED_PROJECT_ID)));
    
    if (!sponsoredProject) {
        console.error("Sponsored project not found");
        return null;
    }
    
    return sponsoredProject.subprojects.find(project => project.id === id);
}