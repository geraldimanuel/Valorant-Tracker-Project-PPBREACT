import {
	Heading,
	Flex,
	Text,
	Box,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";
import { React, useContext, useEffect } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import { UserContext } from "../lib/UserContext";

export default function Rank() {
	const bg = useColorModeValue("#FFFFFF", "#121212");
	const { mmr } = useContext(UserContext);
	const { rankChecker } = useContext(UserContext);
	const { rankurl } = useContext(UserContext);

	useEffect(() => {
		rankChecker();
	}, [mmr]);

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
							{mmr.data ? (
								<Heading color="#46B8A3" size={{ md: "xl", base: "lg" }}>
									{mmr.data.currenttierpatched}
								</Heading>
							) : null}

							<Text color="#46B8A3" as="i">
								200 RR
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex w="40%" justifyContent="center">
					{mmr.data ? (
						<Image src={rankurl} boxSize={{ md: "100px", base: "80px" }} />
					) : null}
				</Flex>
			</Flex>
		</Flex>
	);
}
