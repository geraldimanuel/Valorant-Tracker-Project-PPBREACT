import {
	Heading,
	Flex,
	Text,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";
import { RiMedalFill, RiTrophyFill } from "react-icons/ri";
import profile from "../assets/profile.png";

export default function Profile() {
	const bg = useColorModeValue("#FFFFFF", "#121212");
	const text = useColorModeValue("#2C2C2C", "#FAFAFA");
	return (
		<Flex
			bgColor={bg}
			className="status-bar"
			w="100%"
			flexDirection={{ md: "column", base: "row" }}
			alignItems="center"
			py={{ md: 4, base: 0 }}
			marginLeft={{ base: 0, md: 1 }}
			p={{ base: 3, md: 0 }}
			borderRadius={{ base: "20px", md: "0px" }}
			h={{ base: null, md: "100vh" }}
			justifyContent="center"
		>
			<Flex
				flexDirection={{ md: "column", base: "column" }}
				alignItems="center"
				rowGap={{ base: 5, md: 0 }}
			>
				<Heading size="sm" color="#C0C2C8">
					Your Profile
				</Heading>
				<Flex flexDirection={{ md: "column", base: "row" }} columnGap={9}>
					<Flex
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
					>
						<Image
							src={profile}
							borderRadius="100%"
							boxSize={{ md: "100px", base: "85px" }}
							mt={{ md: "65px", base: "0px" }}
						/>
						<Heading size="md" py={{ md: 3, base: 1 }} color={text}>
							steeb #IWL
						</Heading>
					</Flex>
					<Flex
						className="level-mmr"
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
						py={{ md: "100px", base: "0px" }}
						rowGap={{ md: "20px", base: "10px" }}
					>
						<Flex
							mt={{ md: 10, base: 0 }}
							alignItems="center"
							className="level"
						>
							<RiMedalFill size="36px" color={text} />
							<Flex flexDirection="column" justifyContent="center" mt="-3px">
								<Text fontWeight="bold" mb="-3px" color="#46B8A3">
									Level
								</Text>
								<Text fontWeight="bold" mt="-3px" color={text}>
									120
								</Text>
							</Flex>
						</Flex>
						<Flex alignItems="center" className="mmr">
							<RiTrophyFill size="35px" color={text} />
							<Flex flexDirection="column" justifyContent="center" mt="-3px">
								<Text fontWeight="bold" mb="-3px" color="#46B8A3">
									MMR
								</Text>
								<Text fontWeight="bold" mt="-3px" color={text}>
									810
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
				<Heading size="sm" color="#C0C2C8" mt={{ md: "35px", base: "0px" }}>
					Updated 5 minutes ago.
				</Heading>
			</Flex>
		</Flex>
	);
}
