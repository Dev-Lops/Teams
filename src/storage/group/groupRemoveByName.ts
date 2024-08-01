import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLECTION, PLAYER_COLECTION } from "@storage/storageConfig";

export async function groupRemoveByName(groupDeleted: string) {
	const storedGroups = await groupsGetAll();
	const groups = storedGroups.filter((group) => group !== groupDeleted);

	await AsyncStorage.setItem(GROUP_COLECTION, JSON.stringify(groups));
	await AsyncStorage.removeItem(`${PLAYER_COLECTION}-${groupDeleted}`);
	try {
	} catch (error) {
		throw error;
	}
}
