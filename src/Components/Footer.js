import { Container, Flex, Link, Stack, Box, Icon } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function Footer() {
    return (
        <Container
            as="footer"
            role="contentinfo"
            backgroundColor={"lightgray"}
            m={"auto 0"}
            display={"flex"}
            maxWidth={"100%"}
        >
            <Flex
                w={"100%"}
                justifyContent={"space-evenly"}
                backgroundColor={"lightgray"}
                bottom={0}
            >
                <Flex flex={1}></Flex>
                <Flex flex={3} justifyContent={"center"}>
                    <Link
                        as={ReactRouterLink}
                        to={"/"}
                        fontFamily={"Amatic SC , cursive"}
                        fontSize={{ base: "10pt", md: "30pt" }}
                        display={"flex"}
                        alignItems={"center"}
                    >
                        Ryan Mahoney Web Dev
                    </Link>
                </Flex>
                <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
                    <Stack display="flex" flexDirection="row" m={'auto'}>
                        <Box m={2}>
                            <Link
                                target="_blank"
                                href="https://github.com/r-mahoney"
                            >
                                <Icon as={AiFillGithub} fontSize={36} />
                            </Link>
                        </Box>
                        <Box m={2}>
                            <Link
                                target="_blank"
                                href="https://www.linkedin.com/in/ryan-mahoney211/"
                            >
                                <Icon as={AiFillLinkedin} fontSize={36} />
                            </Link>
                        </Box>
                        <Box m={2}>
                            <Link href={`mailto:rsmahoney211@gmail.com`}>
                                <Icon as={AiFillMail} fontSize={36} />
                            </Link>
                        </Box>
                    </Stack>
                </Flex>
            </Flex>
        </Container>
    );
}

export default Footer;
