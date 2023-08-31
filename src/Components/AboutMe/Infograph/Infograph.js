import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { SiExpress, SiAngularjs, SiChakraui } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import "./infograph.css";

function Infograph() {
    return (
        <Flex justifyContent={"center"} zIndex={-1} display={{base: 'none', md: 'flex'}}>
            <Flex height={"200px"} width={"200px"} alignItems={'flex-start'} flexDirection={'column'}>
                <div className="centerIcon one"></div>
                <div className="centerIcon">
                    <div className="circle"><Icon as={SiExpress} fontSize={50} color={'#68A063'}></Icon></div>
                    <div className="circle"><Icon as={FaNodeJs} fontSize={50} color={'#F0DB4F'}></Icon></div>
                    <div className="circle"><Icon as={BiLogoPostgresql} fontSize={50} color={'#336791'}></Icon></div>
                    <div className="circle"><Icon as={TbBrandTypescript} fontSize={50} color={'#007acc'}></Icon></div>
                    <div className="circle"><Icon as={SiAngularjs} fontSize={50} color={'red'}></Icon></div>
                    <div className="circle"><Icon as={SiChakraui} fontSize={50} color={'#319795'}></Icon></div>
                    <div className="circle"><Icon as={IoLogoReact} fontSize={50} color={'#61dbfb'}></Icon></div>
                </div>
            </Flex>
        </Flex>
    );
}

export default Infograph;