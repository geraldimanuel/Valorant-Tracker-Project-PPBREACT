import { Heading, Flex, Text } from "@chakra-ui/react";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import HenrikDevValorantAPI from "unofficial-valorant-api";

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
				const result = await axios.get(
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
		<Flex>
			<Heading>Main Page</Heading>
			<Heading>Valorant Stats</Heading>
		</Flex>
	);
}
