import { React, useState } from "react";
import {
	Flex,
	Box,
	Button,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
	const [active, setActive] = useState(false);
	const { toggleColorMode } = useColorMode();
	const bg = useColorModeValue("#FFFFFF", "#121212");
	const icons = useColorModeValue("#121212", "#FFFFFF");
	const bgComponent = useColorModeValue("#F4F6F8", "#2C2C2C");

	function buttonHandle() {
		setActive(!active);
		toggleColorMode();
	}

	return (
		<Flex
			bg={bg}
			w={{ md: "4%", base: "13%" }}
			className="left-navbar"
			alignItems="center"
			flexDirection="column"
			rowGap={4}
		>
			<Button
				color={icons}
				className="menu-button"
				bgColor={bgComponent}
				p={1}
				borderRadius="8px"
				mt={2}
			>
				<HiOutlineMenu size="25px" />
			</Button>
			<Button
				onClick={buttonHandle}
				className="darkmode-button"
				color={icons}
				bgColor={bgComponent}
				p={1}
				borderRadius="8px"
			>
				{active ? <FaSun size="25px" /> : <FaMoon size="25px" />}
			</Button>
		</Flex>
	);
}
