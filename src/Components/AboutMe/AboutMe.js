import { Box, Flex, Image, Text, SimpleGrid, List } from "@chakra-ui/react";
import React, { useEffect } from "react";
import propic from "../../images/propic.jpg";
import rBrace from "../../images/curlyBrace.png";
import lBrace from "../../images/LcurlyBrace.png";
import Slide from "./Slide";
import Infograph from "./Infograph/Infograph";
import "./about-me.css";
import { slideObj } from "./slidesObj.js";
import { column1, column2 } from "./skills";
import ListItems from "./ListItems";

function AboutMe() {
    useEffect(() => {
        document.documentElement.style.setProperty("--scroll-padding", "7rem");
    }, []);
    return (
        <>
            <Flex minHeight={"100vh"} flexDirection={"column"}>
                <Flex m={5} justifyContent={"space-around"}>
                    <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        h={"auto"}
                        w={"auto"}
                        flex={1}
                        p={5}
                    >
                        <Text
                            fontFamily={"Lexend Deca, sans-serif"}
                            fontSize={{ base: "10pt", md: "50pt" }}
                            flexWrap={"wrap"}
                        >
                            BUILDING RESPONSIVE WEB PAGES
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        flex={1}
                    >
                        <Box>
                            <Image
                                borderRadius="full"
                                boxSize={{
                                    base: "150px",
                                    sm: "250px",
                                    md: "350px",
                                }}
                                objectFit="cover"
                                src={propic}
                                alt="Ryan Mahoney"
                            />
                        </Box>
                    </Flex>
                </Flex>
                <Flex mt={{ base: 10, md: 50 }} mb={{ base: 10, md: 100 }}>
                    <Flex flex={1} justifyContent={"flex-end"}>
                        <Image
                            h={{ base: "auto", md: "400px" }}
                            src={lBrace}
                            alt="left curly brace"
                        />
                    </Flex>
                    <Flex flex={2}>
                        <div className="slider">
                            <a href="#Where-Ive-Been">1</a>
                            <a href="#Where-Im-At">2</a>
                            <a href="#Where-Im-Going">3</a>
                            <div className="slides">
                                {slideObj.map((slide) => (
                                    <Slide
                                        key={slide.id}
                                        id={slide.id}
                                        header={slide.header}
                                        body={slide.body}
                                    />
                                ))}
                            </div>
                        </div>
                    </Flex>
                    <Flex flex={1}>
                        <Image
                            h={{ base: "auto", md: "400px" }}
                            src={rBrace}
                            alt="right curly brace"
                        />
                    </Flex>
                </Flex>
                <Text
                    transform={{
                        base: "translatey(-25px)",
                        md: "translatey(-75px)",
                    }}
                    justifyContent={"center"}
                    display={"flex"}
                    fontWeight={500}
                    fontSize={{ base: "14pt", md: "20pt" }}
                    fontFamily="Oswald, sans-serif"
                >
                    Current Skills
                </Text>
                <Flex>
                    <Flex
                        flex={1}
                        justifyContent={"center"}
                        alignItems={"center"}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Infograph />
                    </Flex>
                    <Flex
                        flex={1}
                        transform={{
                            base: "translatey(-5px)",
                            md: "translatey(-50px)",
                        }}
                    >
                        <Flex flexDir={"column"}>
                            <Text
                                p={"0  0 0 20px "}
                                fontFamily="Oswald, sans-serif"
                                fontWeight={300}
                                fontSize={{ base: "10pt", md: "18pt" }}
                            >
                                <>
                                    Most of my projects are completed in a
                                    <b>
                                        {" "}
                                        JavaScript, React, Express.js, and Node{" "}
                                    </b>
                                    stack. Occassionally I use{" "}
                                    <b>TypeScript </b>and<b> Next.js </b> in a
                                    side project in order to gain experience. I
                                    actively seek to build projects with
                                    technologies I have yet to use in order to
                                    be able to make informed decisions on how a
                                    project should be built.
                                </>
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        flex={1}
                        transform={{
                            base: "translatey(-5px)",
                            md: "translatey(-50px)",
                        }}
                        justifyContent={"center"}
                    >
                        <SimpleGrid
                            gap={{base: 2, md: 10}}
                            columns={2}
                            justifyContent="center"
                            alignItems="flex-start"
                        >
                            <Box>
                                <List
                                    p={2}
                                    fontSize={{ base: "8pt", md: "10pt" }}
                                >
                                    {column1.map((skill) => (
                                        <ListItems
                                            listicle={skill}
                                            key={skill}
                                        />
                                    ))}
                                </List>
                            </Box>
                            <Box>
                                <List
                                    p={2}
                                    fontSize={{ base: "8pt", md: "10pt" }}
                                >
                                    {column2.map((skill) => (
                                        <ListItems
                                            listicle={skill}
                                            key={skill}
                                        />
                                    ))}
                                </List>
                            </Box>
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default AboutMe;
