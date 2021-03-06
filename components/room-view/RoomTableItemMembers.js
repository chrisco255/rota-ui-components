import { Grid, Box } from '@chakra-ui/react';

import { RoomTableItemMemberAvatar, RoomTableItemMemberEmpty } from '.';

const MAX_TABLE_ITEM_MEMBERS = 6;

function RoomTableItemMembers({ members = [] }) {
	const membersToDisplay = members.slice(0, MAX_TABLE_ITEM_MEMBERS);
	const emptySeats = new Array(MAX_TABLE_ITEM_MEMBERS - membersToDisplay.length).fill('');

	return (
		<Box mr={4}>
			<Grid templateColumns="repeat(3, 1fr)" gridGap={1}>
				{membersToDisplay.map((member) => <RoomTableItemMemberAvatar avatar={member.avatar} key={member.id} />)}
				{emptySeats.map((s, index) => <RoomTableItemMemberEmpty key={index} />)}
			</Grid>
		</Box>
	);
}

export default RoomTableItemMembers;
