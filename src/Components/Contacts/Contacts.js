import {
    Flex,
    Heading,
    Image,
    Link,
    List,
    ListIcon,
    ListItem,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Contacts() {
    return (
        <Flex minHeight={"100vh"}>
            <Flex flex={1} display={{ base: "none", md: "flex" }}></Flex>
            <Flex flex={3} flexDirection={{ base: "column", lg: "row" }}>
                <Flex>
                    <Flex
                        m={5}
                        flexDirection={"column"}
                        justify={"center"}
                    >
                        <Heading size="md" mb={3}>
                            Contact Me
                        </Heading>
                        <Text>
                            I am currently available for hire and open to any
                            cooperative projects.
                        </Text>
                        <List m={5}>
                            <Flex m={2} ml={-2}>
                                <ListItem
                                    flex={1}
                                    fontSize={{ base: "8pt", md: "12pt" }}
                                    display="flex"
                                    flexDir={{ base: "column", md: "row" }}
                                >
                                    <ListIcon as={BsLinkedin} fontSize={20} />
                                    <Text>LinkedIn</Text>
                                </ListItem>
                                <ListItem
                                    flex={2}
                                    fontSize={{ base: "8pt", md: "12pt" }}
                                >
                                    <Link
                                        target="_blank"
                                        href="https://www.linkedin.com/in/ryan-mahoney211/"
                                    >
                                        linkedin.com/in/ryan-mahoney211
                                    </Link>
                                </ListItem>
                            </Flex>
                            <Flex m={2} ml={-2}>
                                <ListItem
                                    flex={1}
                                    fontSize={{ base: "8pt", md: "12pt" }}
                                    display="flex"
                                    flexDir={{ base: "column", md: "row" }}
                                >
                                    <ListIcon as={BsGithub} fontSize={20} />
                                    <Text>GitHub</Text>
                                </ListItem>
                                <ListItem
                                    flex={2}
                                    fontSize={{ base: "8pt", md: "12pt" }}
                                >
                                    <Link
                                        target="_blank"
                                        href="https://github.com/r-mahoney"
                                    >
                                        github.com/r-mahoney
                                    </Link>
                                </ListItem>
                            </Flex>
                            <Flex m={2} ml={-2}>
                                <ListItem
                                    flex={1}
                                    fontSize={{ base: "8pt", md: "12pt" }}
                                    display="flex"
                                    flexDir={{ base: "column", md: "row" }}
                                >
                                    <ListIcon as={TfiEmail} fontSize={20} />
                                    <Text>Email</Text>
                                </ListItem>
                                <ListItem
                                    flex={2}
                                    fontSize={{ base: "8pt", md: "12pt" }}
                                >
                                    <Link
                                        target="_blank"
                                        href={`mailto:rsmahoney211@gmail.com`}
                                    >
                                        rsmahoney211@gmail.com
                                    </Link>
                                </ListItem>
                            </Flex>
                        </List>
                    </Flex>
                </Flex>
                <Flex m={5} borderRadius="10px" flex={1}>
                    <Image
                        src={require("../../images/housetown.jpg")}
                        borderRadius="10px"
                        objectFit={{ base: "fill", lg: "none" }}
                    />
                </Flex>
            </Flex>
            <Flex flex={1} display={{ base: "none", md: "flex" }}></Flex>
        </Flex>
    );
}

export default Contacts;
