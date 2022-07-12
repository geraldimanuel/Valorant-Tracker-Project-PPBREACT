import { Select } from "@chakra-ui/react";
import { UserContext } from "../lib/UserContext";
import { React, useContext, useEffect } from "react";

export default function ActMenu() {
	const { act, setAct } = useContext(UserContext);
	const { fetchDataupdateRank } = useContext(UserContext);

	// kenapa harus gini ga langsung di onChange aja? ntar ketinggalan 1 terus
	useEffect(() => {
		fetchDataupdateRank();
	}, [act]);

	const handleChange = (e) => {
		setAct(e.target.value);
	};

	return (
		<Select
			w="140px"
			h="40px"
			borderRadius="10px"
			value={act}
			onChange={handleChange}
			variant="filled"
		>
			<option value="e5a1">Ep 5 - Act 1</option>
			<option value="e4a3">Ep 4 - Act 3</option>
			<option value="e4a2">Ep 4 - Act 2</option>
			<option value="e4a1">Ep 4 - Act 1</option>
			<option value="e3a3">Ep 3 - Act 3</option>
			<option value="e3a2">Ep 3 - Act 2</option>
			<option value="e3a1">Ep 3 - Act 1</option>
			<option value="e2a3">Ep 2 - Act 3</option>
			<option value="e2a2">Ep 2 - Act 2</option>
			<option value="e2a1">Ep 2 - Act 1</option>
			<option value="e1a3">Ep 1 - Act 3</option>
			<option value="e1a2">Ep 1 - Act 2</option>
			<option value="e1a1">Ep 1 - Act 1</option>
		</Select>
	);
}
