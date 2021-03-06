import { Box, Flex, useColorMode, Text } from '@chakra-ui/react';
import { format, differenceInHours, differenceInSeconds } from 'date-fns';

import Avatar from '../avatar';
import { textColor } from '../../styles/theme';
import convertLengthInSecondsToText from '../../lib/convertLengthInSecondsToText';

function TableThreadClipItem({
	authorName = 'Christopher Johnson',
	mentionName = 'chrisjo',
	avatar = {
		topType: 'LongHairDreads',
		accessoriesType: 'Blank',
		hairColor: 'BrownDark',
		hatColor: 'Red',
		facialHairType: 'BeardLight',
		facialHairColor: 'BrownDark',
		clotheType: 'BlazerShirt',
		clotheColor: 'PastelRed',
		graphicType: 'Deer',
		eyeType: 'Squint',
		eyebrowType: 'RaisedExcitedNatural',
		mouthType: 'Smile',
		skinColor: 'DarkBrown',
	},
	datePosted = new Date(),
	lengthInSeconds = 30,
}) {
	const { colorMode } = useColorMode();

	return (
		<Flex overflow="hidden" h={12} align="center">
			<Box w={10} h={10} bg="blue.500" rounded="lg" ml={2} mr={2} flexShrink={0}>
				<Avatar avatarStyle="Transparent" {...avatar} />
			</Box>
			<Flex align="baseline" flexGrow={1} overflow="hidden">
				<Text fontSize={1} mr="1" mt="1" color={textColor[colorMode]} fontFamily="slab" isTruncated>
					{authorName}
				</Text>
				<Text fontSize={0} color={textColor[colorMode]} fontFamily="book">
					{`@${mentionName}`}
				</Text>
			</Flex>
			<Box w={16} textAlign="left" ml={1} flexShrink={0}>
				<Text isTruncated fontSize={0} fontFamily="book" textAlign="center" color={textColor[colorMode]}>
					{differenceInHours(new Date(), datePosted) > 1 ? (
						format(datePosted, 'MM/dd/yyyy')
					) : (
						`${convertLengthInSecondsToText({
							lengthInSeconds: differenceInSeconds(new Date(), datePosted),
						})} ago`
					)}
				</Text>
			</Box>
			<Box w={16} textAlign="left" ml={1} flexShrink={0}>
				<Text isTruncated fontSize={0} fontFamily="book" textAlign="center" color={textColor[colorMode]}>
					{convertLengthInSecondsToText({ lengthInSeconds: lengthInSeconds })}
				</Text>
			</Box>
		</Flex>
	);
}

export default TableThreadClipItem;
