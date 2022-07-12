import { Flex, useColorModeValue } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Act from "../components/Act";
import Rank from "../components/Rank";
import ValorantNews from "../components/ValorantNews";

export default function MainPage() {
	const bg = useColorModeValue("#F4F6F8", "#2C2C2C");

	return (
		<Flex maxW="2000px">
			<Navbar />
			<Flex
				w={{ md: "96%", base: "87%" }}
				bgColor={bg}
				className="main-page"
				alignItems="center"
				flexDirection={{ base: "column", md: "row" }}
			>
				<Flex p={{ base: 5, md: 0 }} w={{ md: "25%", base: "100%" }}>
					<Profile />
				</Flex>
				<Flex
					className="tracker-bar"
					w={{ md: "75%", base: "100%" }}
					p={{ md: 8, base: null }}
					px={{ md: 8, base: 5 }}
					flexDirection="column"
					rowGap={{ base: 5, md: 5 }}
					h="100vh"
				>
					<Flex
						h={{ md: "45%", base: "100%" }}
						columnGap={5}
						flexDirection={{ md: "row", base: "column" }}
						rowGap={{ base: 5, md: null }}
					>
						<Rank />
						<Act />
					</Flex>
					<Flex overflow="auto">
						<ValorantNews />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
