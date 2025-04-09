"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Application Mobile Android Food",
        description: "Description de l'application1",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Lego Swape NodeJs et Express",
        description: "Description de l'application2",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    }
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-whitemt-4 mt-[90px]'>
                My Projects
            </h2>
            <div className='flex justify-center px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base space-x-2'>
                <ProjectTag onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
                <ProjectTag onClick={handleTagChange}
                    name="iOS"
                    isSelected={tag === "iOS"}
                />
            </div>

            <div className='grid md:grid-cols-3 gap-8 md:gap-12 p-8'>
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        tag={project}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectsSection;