# OpenInfra Universe

## About

Open infrastructure goes beyond the [projects that are directly hosted at the OpenInfra Foundation](https://openinfra.dev/projects/). The OpenInfra Universe provides a look at the open source solutions available for infrastructure projects: open source projects that help provide infrastructure resources for others to build on, in use cases such as edge computing, container infrastructure, public/private hybrid cloud, AI & machine learning, CI/CD, and more. Most of these projects power or rely on LOKI (Linux OpenStack Kubernetes Infrastructure), an end-to-end open source solution for providing infrastructure. Projects in the OpenInfra Universe are discussed at [OpenInfra events](https://openinfra.dev/community-events/) around the world.

This repository contains all of the files needed to generate the [OpenInfra Universe](https://openinfra.dev/universe). 

## Adding New Projects

Before submitting a new project to the OpenInfra Universe, please ensure the follow criteria is met:
- Must be openly licensed with an OSI-approved license.
- Must be used in infrastructure.
- Must have at least one organization integrating it with an OpenInfra project.

To submit a new project to the OpenInfra Universe:
- Open a pull request
- Add your project in alphabetical order to `universeProjects.json`, including to following:
-- project name
-- link to the project website or repo
-- logo file name
-- description of the project, ideally referencing it's place in open infrastructure (190 characters max)
-- tag(s) categorizing the project
-- isOIF: boolean set to "true" if the project is an official project hosted by the OpenInfra Foundation
- Add your `logo` (ideally in SVG or PNG format) to the `src/images/universe/projects/` directory

## License

The OpenInfra Universe is available under the [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/). The trademarks, logos, and service marks (collectively the "Trademarks") displayed on the website are registered and unregistered Trademarks of their respective owners. No rights or licenses to the Trademarks are granted, or implied, by their presence on the website.
