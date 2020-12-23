import { Box, Grid, Text } from '@chakra-ui/core';

import Avatar from '../avatar';

function TableInfo() {
	return (
		<Box maxW="160px" flex={1} mr={3}>
			<Text as="h4" fontFamily="slab" fontSize={4} color="outline.500">
				Members
			</Text>
			<Grid templateColumns="repeat(auto-fill, 48px)" gap={1}>
				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>
				<Box bg="green.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>
				<Box bg="yellow.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>
				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>
				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>
				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>
				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>
				<Box bg="blue.500" rounded="lg" width={12} height={12}>
					<Avatar />
				</Box>
			</Grid>
		</Box>
	);
}

export default TableInfo;
