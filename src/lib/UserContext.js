import { useState, useEffect } from "react";
import axios from "axios";
import { createContext } from "react";

export const UserContext = createContext(null);

const userData = {
	username: "",
	tag: "",
};

export function UserProvider({ children }) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);
		setIsError(false);
		try {
			const result = await axios(
				`https://api.henrikdev.xyz/valorant/v1/account/${userData.username}/${userData.tag}`
			);
			setData(result.data);
			setIsLoaded(true);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoaded(true);
			setIsLoading(false);
			setError(error);
		}
	};

	return (
		<UserContext.Provider
			value={{
				userData,
				data,
				fetchData,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
