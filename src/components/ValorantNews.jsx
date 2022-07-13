import {
	Heading,
	Flex,
	Image,
	useColorModeValue,
	SimpleGrid,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { ImNewspaper } from "react-icons/im";
import { SiYoutube } from "react-icons/si";
import { UserContext } from "../lib/UserContext";
import { React, useContext } from "react";

function News() {
	const { news } = useContext(UserContext);
	const bg = useColorModeValue("#F4F6F8", "#2C2C2C");
	return (
		<SimpleGrid columns={{ md: 3, base: 0 }} spacing={{ base: 5, md: 7 }}>
			{news.data != null ? (
				news.data.map((news) => (
					<Flex
						key={news.id}
						w={{ md: "300px", base: "280px" }}
						p={{ md: 3, base: 3 }}
						flexDirection="column"
						gap={5}
						bgColor={bg}
						borderRadius="15px"
					>
						<Image src={news.banner_url} w="400px" borderRadius="15px" />

						<Heading fontSize={{ md: "xl", base: "lg" }} h="80px">
							{news.title}
						</Heading>

						<Flex alignItems="center" gap={2} mb="3px">
							<Flex mt="3px">
								<SiYoutube size="20px" color="#FF0000" />
							</Flex>
							<a
								href={`${news.external_link}`}
								target="_blank"
								rel="noreferrer"
							>
								<Text as="i" fontSize="md" fontWeight="semibold">
									Click here
								</Text>
							</a>
						</Flex>
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
	const text = useColorModeValue("#282828", "#AAB5B3");

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
			rowGap={{ md: 5, base: 4 }}
			overflow="auto"
			color={text}
		>
			<Flex alignItems="center" columnGap={3}>
				<Heading fontSize={{ md: "4xl", base: "2xl" }}>E-Sports News</Heading>
				<Flex mt={{ md: "9px", base: "1px" }}>
					<ImNewspaper size="35px" />
				</Flex>
			</Flex>
			<Flex>
				<News />
			</Flex>
		</Flex>
	);
}
