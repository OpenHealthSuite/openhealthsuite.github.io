/* eslint-disable max-len */
import Head from "next/head";
import React from "react";
import { Text, Heading, Container } from "@chakra-ui/react";

export default function Diary() {
    return (
        <>
            <Head>
                <title>Terms of Service :: OpenHealthSuite</title>
            </Head>
            <Container marginTop={"2em"}>
                <Heading as='h1' textAlign={"center"}>Terms of Service</Heading>
                <Text>OpenHealthSuite is provided as-is, privately hosted at the administrator&apos;s discretion. 
          All efforts will be made to ensure reliable service, security and data integrity, however nothing is guarunteed.</Text>
            </Container>
        </>
    );
}