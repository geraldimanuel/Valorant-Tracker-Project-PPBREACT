import { Flex, Box } from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";
import { BsFillMoonFill } from "react-icons/bs";

export default function Navbar() {
	return (
		<Flex
			w="4%"
			className="left-navbar"
			alignItems="center"
			flexDirection="column"
			rowGap={4}
		>
			<Box
				className="menu-button"
				bgColor="#F4F6F8"
				p={1}
				borderRadius="8px"
				mt={2}
			>
				<HiOutlineMenu size="30px" />
			</Box>
			<Box className="menu-button" bgColor="#F4F6F8" p={1} borderRadius="8px">
				<BsFillMoonFill size="30px" />
			</Box>
			<Box className="darkmode-button"></Box>
		</Flex>
	);
}
