import {
    IconButton,
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
    function setzIndex(isOpen) {
        const anchor = document.querySelector(".anchorDiv");
        if (anchor) {
            if (isOpen) {
                anchor.setAttribute("style", "z-index: 1");
            } else {
                anchor.setAttribute("style", "z-index: 0");
            }
        }
    }
    return (
        <>
            <Flex
                justifyContent={"space-between"}
                borderBottom={"1px solid lightgray"}
                position={"sticky"}
                top={"0px"}
                background={"rgba(0, 151, 19, 0.5)"}
                backdropFilter={"blur(5px)"}
                className="navBar"
                zIndex={1}
            >
                <Text
                    fontSize={{ base: "20pt", md: "32pt" }}
                    margin={"auto 20px"}
                    fontFamily={"Amatic SC , cursive"}
                    color="white"
                >
                    Ryan Mahoney Web Dev
                </Text>
                <Flex
                    alignItems={"center"}
                    fontSize={"20pt"}
                    mr={5}
                    display={{ base: "none", sm: "flex" }}
                    fontFamily={"Amatic SC , cursive"}
                    color={"white"}
                >
                    <Link to={"/"} style={{ marginLeft: "10px" }}>
                        Home
                    </Link>
                    <Link to={"/projects"} style={{ marginLeft: "10px" }}>
                        Projects
                    </Link>
                    <Link to={"/contacts"} style={{ marginLeft: "10px" }}>
                        Contacts
                    </Link>
                    <Link
                        target="_blank"
                        to={
                            "https://docs.google.com/document/d/1wPO3ZKHDHpAX7z9Kb15tj2vHLHn7HoWs/edit?usp=sharing&ouid=102154159387760561729&rtpof=true&sd=true"
                        }
                        style={{ marginLeft: "10px" }}
                    >
                        Resume
                    </Link>
                </Flex>
                <Flex
                    alignItems={"center"}
                    fontSize={"20pt"}
                    mr={5}
                    display={{ base: "block", sm: "none" }}
                >
                    <Menu autoSelect={false}>
                        {({ isOpen }) => (
                            <>
                                <MenuButton
                                    isActive={isOpen}
                                    as={IconButton}
                                    aria-label="Options"
                                    icon={
                                        isOpen ? (
                                            <CloseIcon />
                                        ) : (
                                            <HamburgerIcon />
                                        )
                                    }
                                    m={2}
                                    onClick={() => setzIndex(isOpen)}
                                ></MenuButton>
                                <MenuList
                                    minW="0"
                                    w={"auto"}
                                    minH="0"
                                    h={"auto"}
                                    p="0"
                                    border={"1px solid lightgray"}
                                >
                                    <MenuItem
                                        w={"100px"}
                                        h={"25px"}
                                        fontSize={"12pt"}
                                        borderBottom={"1px solid lightgray"}
                                        borderRadius={"5px 5px 0 0 "}
                                    >
                                        <Link
                                            to={"/"}
                                            style={{ marginLeft: "10px" }}
                                        >
                                            Home
                                        </Link>
                                    </MenuItem>
                                    <MenuItem
                                        w={"100px"}
                                        h={"25px"}
                                        fontSize={"12pt"}
                                        borderBottom={"1px solid lightgray"}
                                    >
                                        <Link
                                            to={"/projects"}
                                            style={{ marginLeft: "10px" }}
                                        >
                                            Projects
                                        </Link>
                                    </MenuItem>
                                    <MenuItem
                                        w={"100px"}
                                        h={"25px"}
                                        fontSize={"12pt"}
                                        borderRadius={"0 0 5px 5px"}
                                    >
                                        <Link
                                            to={"/contacts"}
                                            style={{ marginLeft: "10px" }}
                                        >
                                            Contacts
                                        </Link>
                                    </MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                </Flex>
            </Flex>
        </>
    );
}

export default Navbar;
