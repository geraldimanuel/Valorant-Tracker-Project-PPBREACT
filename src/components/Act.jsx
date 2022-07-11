import { Heading, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";

export default function Act() {
	const bg = useColorModeValue("#FFFFFF", "#121212");
	return (
		<Flex
			bgColor={bg}
			borderRadius="20px"
			className="current-act"
			w={{ md: "50%", base: "100%" }}
			p={{ md: 10, base: 5 }}
			flexDirection="column"
			rowGap={3}
		>
			<Heading size="sm" color="#AAB5B3">
				Last Act
			</Heading>
			<Flex
				className="win-loss"
				alignItems="center"
				justifyContent="center"
				gap={{ md: "80px", base: "30px" }}
				h="100%"
			>
				<Flex className="win" alignItems="center" gap={3}>
					<Flex flexDirection="column" alignItems="center">
						<VscTriangleUp color="#46B8A3" />
						<Text color="#46B8A3" fontWeight="bold" fontSize="lg">
							5
						</Text>
					</Flex>
					<Heading color="#46B8A3" size="2xl">
						Win
					</Heading>
				</Flex>
				<Flex className="lose" alignItems="center" gap={3}>
					<Flex flexDirection="column" alignItems="center">
						<VscTriangleDown color="#EB3C3C" />
						<Text color="#EB3C3C" fontWeight="bold" fontSize="lg">
							17
						</Text>
					</Flex>
					<Heading color="#EB3C3C" size="2xl">
						Loss
					</Heading>
				</Flex>
			</Flex>
		</Flex>
	);
}
