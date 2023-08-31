import React from "react";
import { ListIcon, ListItem, Text } from "@chakra-ui/react";
import { BsCheckLg } from "react-icons/bs";

function ListItems({ listicle }) {
    return (
        <ListItem display={"flex"}>
            <ListIcon
                as={BsCheckLg}
                fill={"green"}
                fontSize={{ base: "10pt", md: "18pt" }}
                margin={"auto 0"}
            />
            <Text
                fontWeight={300}
                fontSize={{ base: "10pt", md: "18pt" }}
                fontFamily="Oswald, sans-serif"
            >
                {listicle}
            </Text>
        </ListItem>
    );
}

export default ListItems;
