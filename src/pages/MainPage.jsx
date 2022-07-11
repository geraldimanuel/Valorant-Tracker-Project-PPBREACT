import {
	Heading,
	Flex,
	Text,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useContext, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Act from "../components/Act";
import Rank from "../components/Rank";
import MatchHistory from "../components/MatchHistory";

import { RiMedalFill, RiTrophyFill } from "react-icons/ri";
import profile from "../assets/profile.png";

export default function MainPage() {
	const [api, setApi] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setIsLoading(true);
	// 		setIsError(false);
	// 		try {
	// 			const result = await axios(
	// 				"https://api.henrikdev.xyz/valorant/v1/account/steeb/IWL"
	// 			);
	// 			setIsLoaded(true);
	// 			setApi(result.data);
	// 			console.log(api);
	// 		} catch (error) {
	// 			setIsError(true);
	// 			setError(error);
	// 			console.log(error);
	// 		}
	// 		setIsLoading(false);
	// 	};
	// 	fetchData();
	// }, []);

	const bg = useColorModeValue("#F4F6F8", "#2C2C2C");

	return (
		<Flex maxW="2000px" h="100vh" overflow="hidden">
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
					rowGap={{ base: 5, md: 0 }}
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
					<Flex h={{ md: "55%", base: "100%" }}>
						<MatchHistory />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
