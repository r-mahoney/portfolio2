import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Icon,
    Image,
    Link,
    Stack,
    StackDivider,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

function ProjectCard({ name, githubLink, liveLink, summary, images, subheading, liveIcon }) {
    return (
        <Card m={5}>
            <CardHeader>
                <Heading size="md">{name}</Heading>
                {subheading && (
                    <Text>{subheading}</Text>
                )}
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Summary
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            {summary}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Links
                        </Heading>
                        <Flex display="flex" flexDirection={{base: "column", md: "row"}}>
                            <Icon as={AiFillGithub} fontSize={25} mr={2}/>
                            <Text mr={5}>
                                See the project code repo{" "}
                                <Link
                                    target="_blank"
                                    href={githubLink}
                                    color="blue"
                                >
                                    here
                                </Link>
                            </Text>
                            {liveLink && (
                                <>
                                    <Icon as={liveIcon} fontSize={25} mr={2}/>
                                    <Text>
                                        See the live demo{" "}
                                        <Link
                                            target="_blank"
                                            href={liveLink}
                                            color="blue"
                                        >
                                            here
                                        </Link>
                                    </Text>
                                </>
                            )}
                        </Flex>
                    </Box>
                    {images && (
                        <Box>
                            <Heading
                                size="xs"
                                textTransform="uppercase"
                                alignSelf="left"
                            >
                                Images
                            </Heading>
                            <Flex
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                overflowY="scroll"
                                maxH="250px"
                                sx={{
                                    "&::-webkit-scrollbar-thumb": {
                                        backgroundColor: "gray",
                                        borderRadius: "20px",
                                        border: "3px solid white",
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        background: "none",
                                    },
                                    "&::-webkit-scrollbar": {
                                        width: "12px",
                                    },
                                }}
                            >
                                {images.map((image, idx) => (
                                    <Image
                                        key={idx}
                                        src={image}
                                        boxSize="500px"
                                        objectFit="fill"
                                        mb={3}
                                    />
                                ))}
                            </Flex>
                        </Box>
                    )}
                </Stack>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;
