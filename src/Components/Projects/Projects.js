import { Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectObj";
import "./projects.css";

function Projects() {
    const [tabIndex, setTabIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navigationHeight, setNavigationHeight] = useState(0);
    const [projectsHeight, setProjectsHeight] = useState(0);

    useEffect(() => {
        setNavigationHeight(document.querySelector(".navBar").offsetHeight);
        setProjectsHeight(document.querySelector(".project").offsetHeight);
        document.documentElement.style.setProperty(
            "--scroll-padding",
            navigationHeight + "px"
        );
    }, [navigationHeight]);

    const handleScroll = useCallback(() => {
        const position = window.scrollY;
        setScrollPosition(position);
        if (scrollPosition <= projectsHeight) {
            setTabIndex(0);
        }
        if (
            scrollPosition > projectsHeight &&
            scrollPosition <= projectsHeight * 2
        ) {
            setTabIndex(1);
        }
        if (scrollPosition > projectsHeight * 2) {
            setTabIndex(2);
        }
    }, [projectsHeight, scrollPosition]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <Flex
            className="projectsDiv"
            minHeight={"100vh"}
            flexDirection={{ base: "column", md: "row" }}
            onScroll={() => console.log("scroll")}
        >
            <Flex m={5} display={{ base: "none", md: "flex" }}>
                <Tabs
                    index={tabIndex}
                    orientation={"vertical"}
                    variant={{ base: "none", md: "soft-rounded" }}
                    colorScheme="green"
                    size={"sm"}
                >
                    <TabList>
                        {projects.map((project, idx) => (
                            <Tab
                                position={"sticky"}
                                top={`${65 + 50 * idx}px`}
                                key={idx}
                            >
                                <a href={`#${project.name}`}>{project.name}</a>
                            </Tab>
                        ))}
                    </TabList>
                </Tabs>
            </Flex>
            <Flex
                className="anchorDiv"
                display={{ base: "flex", md: "none" }}
                justifyContent={"space-evenly"}
                position={"sticky"}
                top={{ base: "60px", md: "65px" }}
                backdropFilter={"blur(2px)"}
                m={"0 25px"}
                zIndex={1}
            >
                {projects.map((project, idx) => (
                    <a href={`#${project.name}`} className="anchor" key={idx}>
                        {project.name}
                    </a>
                ))}
            </Flex>
            <Flex flexDirection={"column"}>
                {projects.map((project, idx) => (
                    <Flex
                        id={`${project.name}`}
                        key={idx}
                        border="1px solid gray"
                        m={5}
                        borderRadius="10px"
                        display="flex"
                        flexDir="column"
                        zIndex={0}
                        className="project"
                    >
                        <ProjectCard
                            name={project.name}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                            summary={project.summary}
                            images={project.images}
                            subheading={project.subheading}
                            liveIcon={project.liveIcon}
                        />
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}

export default Projects;
