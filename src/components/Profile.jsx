import { Heading, Flex, Text, Image } from "@chakra-ui/react";
import { RiMedalFill, RiTrophyFill } from "react-icons/ri";
import profile from "../assets/profile.png";

export default function Profile() {
	return (
		<Flex
			bgColor="white"
			className="status-bar"
			w="25%"
			flexDirection="column"
			alignItems="center"
			py={4}
			marginLeft={1}
		>
			<Heading size="sm" color="#C0C2C8" mt="15px">
				Your Profile
			</Heading>
			<Image src={profile} borderRadius="100%" boxSize="100px" mt="65px" />
			<Heading size="md" py={3}>
				steeb #IWL
			</Heading>
			<Flex
				className="level-mmr"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				py="100px"
				rowGap="20px"
			>
				<Flex mt={10} alignItems="center" className="level">
					<RiMedalFill size="36px" />
					<Flex flexDirection="column" justifyContent="center" mt="-3px">
						<Text fontWeight="bold" mb="-3px" color="#46B8A3">
							Level
						</Text>
						<Text fontWeight="bold" mt="-3px">
							230
						</Text>
					</Flex>
				</Flex>
				<Flex alignItems="center" className="mmr">
					<RiTrophyFill size="35px" />
					<Flex flexDirection="column" justifyContent="center" mt="-3px">
						<Text fontWeight="bold" mb="-3px" color="#46B8A3">
							MMR
						</Text>
						<Text fontWeight="bold" mt="-3px">
							810
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Heading size="sm" color="#C0C2C8" mt="35px">
				Updated 5 minutes ago.
			</Heading>
		</Flex>
	);
}
