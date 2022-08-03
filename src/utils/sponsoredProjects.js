import { getEnvVariable, SPONSORED_PROJECT_ID } from "./envVariables";

export const getSubProjectBySlug = (projects, slug) => {
    const subProjects = projects.find(project => project.id === parseInt(getEnvVariable(SPONSORED_PROJECT_ID))).subprojects;    
    return subProjects.find(project => project.slug === slug);
}