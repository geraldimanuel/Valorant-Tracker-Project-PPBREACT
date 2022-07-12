import {
	Heading,
	Flex,
	Text,
	Image,
	useColorModeValue,
	Skeleton,
	SkeletonCircle,
} from "@chakra-ui/react";
import { React, useContext, useEffect } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import { UserContext } from "../lib/UserContext";

export default function Rank() {
	const bg = useColorModeValue("#FFFFFF", "#121212");
	const { mmr } = useContext(UserContext);
	const { rankChecker } = useContext(UserContext);
	const { rankurl } = useContext(UserContext);
	const { updateRank } = useContext(UserContext);
	const { act } = useContext(UserContext);

	// ini gw ganti krn error tpi gatau kedepannya ngaruh ga
	useEffect(() => {
		if (updateRank.data != null) rankChecker();
	});

	return (
		<Flex
			bgColor={bg}
			borderRadius="20px"
			className="current-rank"
			w={{ md: "50%", base: "100%" }}
			p={{ md: 10, base: 5 }}
			flexDirection="column"
		>
			<Heading size="sm" color="#AAB5B3">
				Current rank
			</Heading>
			<Flex
				h="100%"
				alignItems="center"
				justifyContent={{ md: "space-evenly", base: "space-around" }}
			>
				<Flex
					flexDirection="column"
					w={{ md: "60%", base: null }}
					alignItems="center"
					justifyContent="center"
				>
					<Flex alignItems="center" gap={3}>
						<BsFillTriangleFill color="#46B8A3" />
						<Flex flexDirection="column">
							{updateRank.data ? (
								<Heading color="#46B8A3" size={{ md: "xl", base: "lg" }}>
									{updateRank.data.final_rank_patched}
								</Heading>
							) : (
								<Skeleton>
									<Heading color="#46B8A3" size={{ md: "xl", base: "lg" }}>
										Ascendant 2
									</Heading>
								</Skeleton>
							)}

							{mmr.data && act == "e5a1" ? (
								// RR bakal ilang kalo bukan di e5a1 krn itu kan match terakhir
								<Text color="#46B8A3" as="i">
									{mmr.data.mmr_change_to_last_game} RR
								</Text>
							) : (
								<Skeleton>
									<Text color="#46B8A3" as="i">
										200 RR
									</Text>
								</Skeleton>
							)}
						</Flex>
					</Flex>
				</Flex>
				<Flex w="40%" justifyContent="center">
					{updateRank.data ? (
						<Image src={rankurl} boxSize={{ md: "100px", base: "80px" }} />
					) : (
						<SkeletonCircle size={{ base: "85px", md: "100px" }} />
					)}
				</Flex>
			</Flex>
		</Flex>
	);
}
