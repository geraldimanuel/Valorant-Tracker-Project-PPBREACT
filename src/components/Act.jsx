import { Heading, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { UserContext } from "../lib/UserContext";
import { React, useContext } from "react";
import ActMenu from "./ActMenu";

export default function Act() {
	const bg = useColorModeValue("#FFFFFF", "#121212");
	const { updateRank } = useContext(UserContext);
	let winCount;
	let loseCount;

	if (updateRank.data != null) {
		winCount = updateRank.data.wins;
		loseCount = updateRank.data.number_of_games;
	}

	const losstotal = loseCount - winCount;

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
			<ActMenu />
			<Flex
				className="win-loss"
				alignItems="center"
				justifyContent="space-evenly"
				gap={{ md: "80px", base: "30px" }}
				h="100%"
			>
				<Flex className="win" alignItems="center" gap={3}>
					<Flex flexDirection="column" alignItems="center">
						<VscTriangleUp color="#46B8A3" />
						{updateRank.data ? (
							<Text color="#46B8A3" fontWeight="bold" fontSize="lg">
								{updateRank.data.wins}
							</Text>
						) : null}
					</Flex>
					<Heading color="#46B8A3" size="2xl">
						Win
					</Heading>
				</Flex>
				<Flex className="lose" alignItems="center" gap={3}>
					<Flex flexDirection="column" alignItems="center">
						<VscTriangleDown color="#EB3C3C" />
						{updateRank.data ? (
							<Text color="#EB3C3C" fontWeight="bold" fontSize="lg">
								{losstotal}
							</Text>
						) : null}
					</Flex>
					<Heading color="#EB3C3C" size="2xl">
						Loss
					</Heading>
				</Flex>
			</Flex>
		</Flex>
	);
}
