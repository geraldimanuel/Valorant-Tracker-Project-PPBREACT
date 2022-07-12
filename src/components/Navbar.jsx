import { React, useState } from "react";
import {
	Flex,
	Button,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Navbar() {
	let navigate = useNavigate();
	const [active, setActive] = useState(false);
	const { toggleColorMode } = useColorMode();
	const bg = useColorModeValue("#FFFFFF", "#121212");
	const icons = useColorModeValue("#121212", "#FFFFFF");
	const bgComponent = useColorModeValue("#F4F6F8", "#2C2C2C");

	function buttonHandle() {
		setActive(!active);
		toggleColorMode();
	}

	function handleBack() {
		navigate("/");
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
				onClick={handleBack}
				className="menu-button"
				bgColor={bgComponent}
				p={1}
				borderRadius="8px"
				mt={2}
				sx={{
					position: "-webkit-sticky",
					/* Safari */ position: "sticky",
					top: 2,
				}}
			>
				<MdArrowBackIosNew size="25px" />
			</Button>

			<Button
				onClick={buttonHandle}
				className="darkmode-button"
				color={icons}
				bgColor={bgComponent}
				p={1}
				borderRadius="8px"
				sx={{
					position: "-webkit-sticky",
					/* Safari */ position: "sticky",
					top: "64px",
				}}
			>
				{active ? <FaSun size="25px" /> : <FaMoon size="25px" />}
			</Button>
		</Flex>
	);
}
