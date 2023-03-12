/* eslint-disable max-len */
import Head from "next/head";
import React from "react";
import { Text, Heading, UnorderedList, ListItem, Container } from "@chakra-ui/react";
import Link from "next/link";
export default function Diary() {
    return (
        <>
            <Head>
                <title>Privacy Policy :: OpenHealthSuite</title>
            </Head>
            <Container marginTop={"2em"}>
                <Heading as='h1' textAlign={"center"}>Privacy Policy</Heading>
                <Text>
At OpenHealthSuite, we are committed to protecting the privacy and security of our users&apos; personal information. 
This Privacy Policy outlines how we collect, use, and disclose your information when you use our web application and services 
(collectively, the &quot;Services&quot;).
                </Text>

                <Heading as='h2' textAlign={"center"}>Information We Collect</Heading>


                <Text>
We collect the following types of information when you use our Services:
                </Text>
                <UnorderedList>
                    <ListItem>    Personal Information: We may collect personal information such as your name, email address, and other contact information that you provide when you register for an account or use our Services.
                    </ListItem>
                    <ListItem>    Usage Information: We may collect information about how you use our Services, such as the pages you visit, the features you use, and the time and date of your interactions.
                    </ListItem>
                    <ListItem>    Device Information: We may collect information about the device you use to access our Services, including the type of device, operating system, and browser.
                    </ListItem>

                </UnorderedList>


                <Heading as='h2' textAlign={"center"}>How We Use Your Information</Heading>

                <Text>

We may use the information we collect for the following purposes:
                </Text>
                <UnorderedList>
                    <ListItem>    To provide and improve our Services.
                    </ListItem>
                    <ListItem>    To communicate with you about your account and our Services.
                    </ListItem>
                    <ListItem>    To personalize your experience with our Services.
                    </ListItem>
                    <ListItem>    To comply with legal obligations.
                    </ListItem>

                </UnorderedList>






                <Heading as='h2' textAlign={"center"}>Sharing of Your Information</Heading>
                <Text>

To all possible measures will be taken to avoid sharing your data - we will only share your data with third parties if:
                </Text>
                <UnorderedList>
                    <ListItem>    You expressly give your consent.
                    </ListItem>
                    <ListItem>    To comply with legal obligations or respond to legal requests.
                    </ListItem>

                </UnorderedList>



                <Heading as='h2' textAlign={"center"}>Security of Your Information</Heading>


                <Text>

We take appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                </Text>

                <Heading as='h2' textAlign={"center"}>Updates to Our Privacy Policy</Heading>
                <Text>

We may update this Privacy Policy from time to time. If we make material changes, we will provide you with notice as required by law.
                </Text>

                <Heading as='h2' textAlign={"center"}>Contact Us</Heading>
                <Text>

If you have any questions or concerns about our Privacy Policy, please contact us at <Link href='mailto:admin@openhealthsuite.com'>admin@openhealthsuite.com</Link>.
                </Text>
     
            </Container>
        </>
    );
}