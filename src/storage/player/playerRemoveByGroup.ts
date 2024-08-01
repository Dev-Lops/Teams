import AsyncStorage from "@react-native-async-storage/async-storage";
import { playersGetByGroup } from "./playersGetByGroup";
import { PLAYER_COLECTION } from "@storage/storageConfig";

export async function playerRemoveByGroup(playerName: string, group: string) {
	try {
		const storage = await playersGetByGroup(group);

		const filterd = storage.filter((player) => player.name !== playerName);
		const players = JSON.stringify(filterd);

		await AsyncStorage.setItem(`${PLAYER_COLECTION}-${group}`, players);
    
	} catch (error) {
		throw error;
	}
}
