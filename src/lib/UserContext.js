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
	const [updateRank, setUpdateRank] = useState([]);
	const [news, setNews] = useState([]);

	const [rankurl, setRankurl] = useState("");
	const [act, setAct] = useState("e5a1");

	function rankChecker() {
		if (updateRank.data.final_rank_patched === "Unrated") {
			setRankurl(rank.Unranked);
		} else if (updateRank.data.final_rank_patched === "Iron 1") {
			setRankurl(rank.Iron1);
		} else if (updateRank.data.final_rank_patched === "Iron 2") {
			setRankurl(rank.Iron2);
		} else if (updateRank.data.final_rank_patched === "Iron 3") {
			setRankurl(rank.Iron3);
		} else if (updateRank.data.final_rank_patched === "Silver 1") {
			setRankurl(rank.Silver1);
		} else if (updateRank.data.final_rank_patched === "Silver 2") {
			setRankurl(rank.Silver2);
		} else if (updateRank.data.final_rank_patched === "Silver 3") {
			setRankurl(rank.Silver3);
		} else if (updateRank.data.final_rank_patched === "Bronze 1") {
			setRankurl(rank.Bronze1);
		} else if (updateRank.data.final_rank_patched === "Bronze 2") {
			setRankurl(rank.Bronze2);
		} else if (updateRank.data.final_rank_patched === "Bronze 3") {
			setRankurl(rank.Bronze3);
		} else if (updateRank.data.final_rank_patched === "Gold 1") {
			setRankurl(rank.Gold1);
		} else if (updateRank.data.final_rank_patched === "Gold 2") {
			setRankurl(rank.Gold2);
		} else if (updateRank.data.final_rank_patched === "Gold 3") {
			setRankurl(rank.Gold3);
		} else if (updateRank.data.final_rank_patched === "Platinum 1") {
			setRankurl(rank.Platinum1);
		} else if (updateRank.data.final_rank_patched === "Platinum 2") {
			setRankurl(rank.Platinum2);
		} else if (updateRank.data.final_rank_patched === "Platinum 3") {
			setRankurl(rank.Platinum3);
		} else if (updateRank.data.final_rank_patched === "Diamond 1") {
			setRankurl(rank.Diamond1);
		} else if (updateRank.data.final_rank_patched === "Diamond 2") {
			setRankurl(rank.Diamond2);
		} else if (updateRank.data.final_rank_patched === "Diamond 3") {
			setRankurl(rank.Diamond3);
		} else if (updateRank.data.final_rank_patched === "Ascendant 1") {
			setRankurl(rank.Ascendant1);
		} else if (updateRank.data.final_rank_patched === "Ascendant 2") {
			setRankurl(rank.Ascendant2);
		} else if (updateRank.data.final_rank_patched === "Ascendant 3") {
			setRankurl(rank.Ascendant3);
		} else if (updateRank.data.final_rank_patched === "Immortal 1") {
			setRankurl(rank.Immortal1);
		} else if (updateRank.data.final_rank_patched === "Immortal 2") {
			setRankurl(rank.Immortal2);
		} else if (updateRank.data.final_rank_patched === "Immortal 3") {
			setRankurl(rank.Immortal3);
		} else if (updateRank.data.final_rank_patched === "Radiant") {
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
				`https://api.henrikdev.xyz/valorant/v2/mmr/ap/${userData.username}/${userData.tag}?filter=${act}`
			)
			.then((res) => {
				setWin(res.data);
				console.log(res.data);
			});
	};

	const fetchDataupdateRank = (e) => {
		axios
			.get(
				`https://api.henrikdev.xyz/valorant/v2/mmr/ap/${userData.username}/${userData.tag}?filter=${act}`
			)
			.then((res) => {
				setUpdateRank(res.data);
				console.log(res.data);
			});
	};

	const fetchNews = (e) => {
		axios
			.get(`https://api.henrikdev.xyz/valorant/v1/website/en-us?filter=esports`)
			.then((res) => {
				setNews(res.data);
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
				act,
				setAct,
				updateRank,
				fetchDataupdateRank,
				fetchNews,
				news,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
