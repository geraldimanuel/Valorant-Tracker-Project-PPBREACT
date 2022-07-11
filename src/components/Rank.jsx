import { Heading, Flex, Text, Box, Image } from "@chakra-ui/react";
import { BsFillTriangleFill } from "react-icons/bs";
import diamond from "../assets/diamond.png";

export default function Rank() {
	return (
		<Flex
			bgColor="white"
			borderRadius="20px"
			className="current-rank"
			w="50%"
			p={10}
			flexDirection="column"
		>
			<Heading size="sm" color="#AAB5B3">
				Current rank
			</Heading>
			<Flex h="100%" alignItems="center">
				<Flex
					flexDirection="column"
					w="60%"
					alignItems="center"
					justifyContent="center"
				>
					<Flex alignItems="center" gap={3}>
						<BsFillTriangleFill color="#46B8A3" />
						<Flex flexDirection="column">
							<Heading color="#46B8A3">Diamonds 2</Heading>
							<Text color="#46B8A3" as="i">
								200 RR
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex w="40%" justifyContent="center">
					<Image src={diamond} boxSize="100px" />
				</Flex>
			</Flex>
		</Flex>
	);
}
