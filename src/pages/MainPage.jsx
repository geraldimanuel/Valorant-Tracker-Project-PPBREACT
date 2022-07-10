import { Heading, Flex, Text, Box, Image } from "@chakra-ui/react";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { HiOutlineMenu } from "react-icons/hi";
import { BsFillMoonFill, BsFillTriangleFill } from "react-icons/bs";
import { RiMedalFill, RiTrophyFill } from "react-icons/ri";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import profile from "../assets/profile.png";
import diamond from "../assets/diamond.png";

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
			<Flex w="96%" bgColor="#F4F6F8" className="main-page">
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
				<Flex
					className="tracker-bar"
					w="75%"
					p={8}
					flexDirection="column"
					rowGap={5}
				>
					<Flex h="45%" columnGap={5}>
						<Flex
							bgColor="white"
							borderRadius="20px"
							className="current-rank"
							w="50%"
							p={10}
							flexDirection="column"
						>
							<Heading size="sm" color="#AAB5B3">
								Current rank
							</Heading>
							<Flex h="100%" alignItems="center">
								<Flex
									flexDirection="column"
									w="60%"
									alignItems="center"
									justifyContent="center"
								>
									<Flex alignItems="center" gap={3}>
										<BsFillTriangleFill color="#46B8A3" />
										<Flex flexDirection="column">
											<Heading color="#46B8A3">Diamonds 2</Heading>
											<Text color="#46B8A3" as="i">
												200 RR
											</Text>
										</Flex>
									</Flex>
								</Flex>
								<Flex w="40%" justifyContent="center">
									<Image src={diamond} boxSize="100px" />
								</Flex>
							</Flex>
						</Flex>
						<Flex
							bgColor="white"
							borderRadius="20px"
							className="current-rank"
							w="50%"
							p={10}
							flexDirection="column"
						>
							<Heading size="sm" color="#AAB5B3">
								Last Act
							</Heading>
							<Flex
								className="win-loss"
								alignItems="center"
								justifyContent="center"
								gap="80px"
								h="100%"
							>
								<Flex className="win" alignItems="center" gap={3}>
									<Flex flexDirection="column" alignItems="center">
										<VscTriangleUp color="#46B8A3" />
										<Text color="#46B8A3" fontWeight="bold" fontSize="lg">
											5
										</Text>
									</Flex>
									<Heading color="#46B8A3" size="2xl">
										Win
									</Heading>
								</Flex>
								<Flex className="lose" alignItems="center" gap={3}>
									<Flex flexDirection="column" alignItems="center">
										<VscTriangleDown color="#EB3C3C" />
										<Text color="#EB3C3C" fontWeight="bold" fontSize="lg">
											17
										</Text>
									</Flex>
									<Heading color="#EB3C3C" size="2xl">
										Loss
									</Heading>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
					<Flex h="55%">
						<Flex
							bgColor="white"
							borderRadius="20px"
							className="current-rank"
							alignItems="center"
							w="100%"
						></Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
