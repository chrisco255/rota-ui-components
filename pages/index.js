import Link from 'next/link';
import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
	return (
		<Box w={{ base: 'full', md: 'containers.md', lg: 'containers.md' }} p={4}>
			<Heading as="h1" fontSize={7} fontFamily="slab" pt={12} pb={6}>
				UI Components
			</Heading>
		</Box>
	);
}
