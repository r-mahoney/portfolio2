import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function Slide({ id, header, body }) {
    return (
        <>
            <div id={id}>
                <Flex flexDirection={"column"} fontFamily='Oswald, sans-serif'>
                    <Text
                        display={"flex"}
                        flex={1}
                        alignItems={"center"}
                        justifyContent={"center"}
                        fontWeight={500}
                        fontSize={{base: '14pt', md: '25pt'}}
                    >
                        {header}
                    </Text>
                    <Text className="aboutMes" flex={3} overflowY={'scroll'} fontWeight={300} fontSize={{base: '10pt', md: '18pt'}}>{body}</Text>
                </Flex>
            </div>
        </>
    );
}

export default Slide;
