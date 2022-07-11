import { Flex } from "@chakra-ui/react";
import { useEffect, useContext, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Act from "../components/Act";
import Rank from "../components/Rank";
import MatchHistory from "../components/MatchHistory";

export default function MainPage() {
	const [api, setApi] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setIsError(false);
			try {
				const result = await axios(
					"https://api.henrikdev.xyz/valorant/v1/account/steeb/IWL"
				);
				setIsLoaded(true);
				setApi(result.data);
				console.log(api);
			} catch (error) {
				setIsError(true);
				setError(error);
				console.log(error);
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);

	return (
		<Flex maxW="2000px" h="100vh" overflow="hidden">
			<Navbar />
			<Flex w="96%" bgColor="#F4F6F8" className="main-page">
				<Profile />
				<Flex
					className="tracker-bar"
					w="75%"
					p={8}
					flexDirection="column"
					rowGap={5}
				>
					<Flex h="45%" columnGap={5}>
						<Rank />
						<Act />
					</Flex>
					<Flex h="55%">
						<MatchHistory />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
