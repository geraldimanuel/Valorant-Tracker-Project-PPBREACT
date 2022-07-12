import {
	Heading,
	Flex,
	Text,
	Box,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";

export default function MatchHistory() {
	const bg = useColorModeValue("#FFFFFF", "#121212");
	return (
		<Flex
			bgColor={bg}
			borderRadius="20px"
			className="current-rank"
			alignItems="center"
			w="100%"
			mb={{ base: 5, md: 0 }}
		></Flex>
	);
}
