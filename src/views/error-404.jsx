import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

export default function Error404() {
    return (
        <>
            <Heading>404</Heading>
            <Text color="gray.500">
                The page you were looking does not exist.
            </Text>
        </>
    );
}
