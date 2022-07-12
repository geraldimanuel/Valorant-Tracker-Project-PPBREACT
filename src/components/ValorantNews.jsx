import {
	Heading,
	Flex,
	Text,
	Box,
	Image,
	useColorModeValue,
	SimpleGrid,
	Spinner,
} from "@chakra-ui/react";
import { ImNewspaper } from "react-icons/im";
import { UserContext } from "../lib/UserContext";
import { React, useContext } from "react";

function News() {
	const { news } = useContext(UserContext);
	return (
		<SimpleGrid columns={{ md: 2, base: 0 }} spacing={{ base: 3, md: 2 }}>
			{news.data != null ? (
				news.data.map((news) => (
					<Flex
						key={news.id}
						w={{ md: "400px", base: "290px" }}
						p={{ md: 5, base: 3 }}
						flexDirection="column"
						mx={{ md: 8, base: 0 }}
						gap={3}
					>
						<Image src={news.banner_url} w="400px" borderRadius="5px" />
						<a href={`${news.external_link}`} target="_blank" rel="noreferrer">
							<Heading fontSize={{ md: "xl", base: "lg" }}>
								{news.title}
							</Heading>
						</a>
					</Flex>
				))
			) : (
				<Spinner size="xl" thickness="5px" color="red.500" />
			)}
		</SimpleGrid>
	);
}

export default function ValorantNews() {
	const bg = useColorModeValue("#FFFFFF", "#121212");
	const { news } = useContext(UserContext);

	return (
		<Flex
			className="ValorantNews"
			bgColor={bg}
			borderRadius="20px"
			alignItems="center"
			w="100%"
			py={{ md: 7, base: 5 }}
			px={3}
			mb={{ base: 5, md: 0 }}
			flexDirection="column"
			rowGap={{ md: 5, base: 2 }}
			overflow="auto"
		>
			<Flex alignItems="center" columnGap={3}>
				<Heading fontSize="xl" color="#AAB5B3">
					E-Sports News
				</Heading>
				<ImNewspaper size="30px" color="#AAB5B3" />
			</Flex>
			<Flex gap={4}>
				<News />
			</Flex>
		</Flex>
	);
}
