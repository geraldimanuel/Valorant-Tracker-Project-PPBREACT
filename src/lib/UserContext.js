import { useState } from "react";
import axios from "axios";
import { createContext } from "react";

export const UserContext = createContext(null);

const userData = {
	username: "",
	tag: "",
};

const rank = {
	Unranked:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/0/largeicon.png",
	Iron1:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/3/largeicon.png",
	Iron2:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/4/largeicon.png",
	Iron3:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/5/largeicon.png",
	Bronze1:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/6/largeicon.png",
	Bronze2:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/7/largeicon.png",
	Bronze3:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/8/largeicon.png",
	Silver1:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/9/largeicon.png",
	Silver2:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/10/largeicon.png",
	Silver3:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/11/largeicon.png",
	Gold1:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/12/largeicon.png",
	Gold2:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/13/largeicon.png",
	Gold3:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/14/largeicon.png",
	Platinum1:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/15/largeicon.png",
	Platinum2:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/16/largeicon.png",
	Platinum3:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/17/largeicon.png",
	Diamond1:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/18/largeicon.png",
	Diamond2:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/19/largeicon.png",
	Diamond3:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/20/largeicon.png",
	Immortal1:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/21/largeicon.png",
	Immortal2:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/22/largeicon.png",
	Immortal3:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/23/largeicon.png",
	Radiant:
		"https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/24/largeicon.png",
	Ascendant1:
		"https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/21/largeicon.png",
	Ascendant2:
		"https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/22/largeicon.png",
	Ascendant3:
		"https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/23/largeicon.png",
};

export function UserProvider({ children }) {
	const [data, setData] = useState([]);
	const [mmr, setMmr] = useState([]);
	const [win, setWin] = useState([]);

	const [rankurl, setRankurl] = useState("");

	function rankChecker() {
		if (mmr.data.currenttierpatched === "Unranked") {
			setRankurl(rank.Unranked);
		} else if (mmr.data.currenttierpatched === "Iron 1") {
			setRankurl(rank.Iron1);
		} else if (mmr.data.currenttierpatched === "Iron 2") {
			setRankurl(rank.Iron2);
		} else if (mmr.data.currenttierpatched === "Iron 3") {
			setRankurl(rank.Iron3);
		} else if (mmr.data.currenttierpatched === "Silver 1") {
			setRankurl(rank.Silver1);
		} else if (mmr.data.currenttierpatched === "Silver 2") {
			setRankurl(rank.Silver2);
		} else if (mmr.data.currenttierpatched === "Silver 3") {
			setRankurl(rank.Silver3);
		} else if (mmr.data.currenttierpatched === "Bronze 1") {
			setRankurl(rank.Bronze1);
		} else if (mmr.data.currenttierpatched === "Bronze 2") {
			setRankurl(rank.Bronze2);
		} else if (mmr.data.currenttierpatched === "Bronze 3") {
			setRankurl(rank.Bronze3);
		} else if (mmr.data.currenttierpatched === "Gold 1") {
			setRankurl(rank.Gold1);
		} else if (mmr.data.currenttierpatched === "Gold 2") {
			setRankurl(rank.Gold2);
		} else if (mmr.data.currenttierpatched === "Gold 3") {
			setRankurl(rank.Gold3);
		} else if (mmr.data.currenttierpatched === "Platinum 1") {
			setRankurl(rank.Platinum1);
		} else if (mmr.data.currenttierpatched === "Platinum 2") {
			setRankurl(rank.Platinum2);
		} else if (mmr.data.currenttierpatched === "Platinum 3") {
			setRankurl(rank.Platinum3);
		} else if (mmr.data.currenttierpatched === "Diamond 1") {
			setRankurl(rank.Diamond1);
		} else if (mmr.data.currenttierpatched === "Diamond 2") {
			setRankurl(rank.Diamond2);
		} else if (mmr.data.currenttierpatched === "Diamond 3") {
			setRankurl(rank.Diamond3);
		} else if (mmr.data.currenttierpatched === "Ascendant 1") {
			setRankurl(rank.Ascendant1);
		} else if (mmr.data.currenttierpatched === "Ascendant 2") {
			setRankurl(rank.Ascendant2);
		} else if (mmr.data.currenttierpatched === "Ascendant 3") {
			setRankurl(rank.Ascendant3);
		} else if (mmr.data.currenttierpatched === "Immortal 1") {
			setRankurl(rank.Immortal1);
		} else if (mmr.data.currenttierpatched === "Immortal 2") {
			setRankurl(rank.Immortal2);
		} else if (mmr.data.currenttierpatched === "Immortal 3") {
			setRankurl(rank.Immortal3);
		} else if (mmr.data.currenttierpatched === "Radiant") {
			setRankurl(rank.Radiant);
		}
	}

	const fetchData = (e) => {
		axios
			.get(
				`https://api.henrikdev.xyz/valorant/v1/account/${userData.username}/${userData.tag}`
			)
			.then((res) => {
				setData(res.data);
				console.log(res.data);
			});
	};

	const fetchDatammr = (e) => {
		axios
			.get(
				`https://api.henrikdev.xyz/valorant/v1/mmr/ap/${userData.username}/${userData.tag}`
			)
			.then((res) => {
				setMmr(res.data);
				console.log(res.data);
			});
	};

	const fetchDatawin = (e) => {
		axios
			.get(
				`https://api.henrikdev.xyz/valorant/v2/mmr/ap/${userData.username}/${userData.tag}?filter=e5a1`
			)
			.then((res) => {
				setWin(res.data);
				console.log(res.data);
			});
	};

	return (
		<UserContext.Provider
			value={{
				userData,
				data,
				mmr,
				win,
				fetchData,
				fetchDatammr,
				fetchDatawin,
				rankChecker,
				rankurl,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
