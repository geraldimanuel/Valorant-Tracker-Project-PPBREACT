import { Flex, Heading, Input, Button, Text } from "@chakra-ui/react";
import { SiRiotgames, SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import wallpaper from "../assets/wallpaper.jpg";

export default function SearchPage() {
	return (
		<Flex
			bgImage={wallpaper}
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			overflow="hidden"
			h="100vh"
			justifyContent="center"
			alignItems="center"
		>
			<Flex
				className="Login"
				bgColor="#FFFFFF"
				px="40px"
				pt="65px"
				pb="40px"
				borderRadius="20px"
				alignItems="center"
				flexDirection="column"
			>
				<Heading color="black" mb={8} size="lg">
					Sign In
				</Heading>
				<Flex
					className="inputField"
					as="form"
					flexDirection="column"
					gap={2}
					pt={5}
					pb={4}
					color="#535353"
				>
					<Input
						borderRadius="7px"
						bgColor="#EDEDED"
						placeholder="USERNAME"
						width="306px"
						height="51px"
						fontWeight="semibold"
						fontSize="sm"
					></Input>
					<Input
						borderRadius="7px"
						bgColor="#EDEDED"
						placeholder="TAGLINE"
						width="306px"
						height="51px"
						fontWeight="semibold"
						fontSize="sm"
					></Input>
				</Flex>
				<Flex justifyContent="space-between" w="300px">
					<Button
						bgColor="#D13639"
						borderRadius="7px"
						w="98px"
						h="34px"
						_hover={{ bgColor: "#D13639" }}
						color="white"
					>
						<SiRiotgames />
					</Button>
					<Button bgColor="#E2E8F0" borderRadius="7px" w="98px" h="34px">
						<FcGoogle />
					</Button>
					<Button
						bgColor="black"
						borderRadius="7px"
						w="98px"
						h="34px"
						_hover={{ bgColor: "black" }}
						color="white"
					>
						<SiApple />
					</Button>
				</Flex>
				<Link to="/MainPage">
					<Button
						bgColor="#D13639"
						mt="60px"
						borderRadius="18px"
						w="60px"
						h="60px"
						color="white"
						_hover={{ color: "black", bgColor: "#E2E8F0" }}
					>
						<MdArrowForwardIos size="30px" />
					</Button>
				</Link>
				<Text
					letterSpacing="tight"
					fontWeight="bold"
					color="#535353"
					mt={6}
					fontSize="sm"
				>
					GET HELP?
				</Text>
			</Flex>
		</Flex>
	);
}
