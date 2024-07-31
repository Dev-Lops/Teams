import AsyncStorage from "@react-native-async-storage/async-storage";
import type { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLECTION } from "@storage/storageConfig";

export async function playerAddByGroup(
	newPlayer: PlayerStorageDTO,
	group: string,
) {
	try {
		await AsyncStorage.setItem(
			`${PLAYER_COLECTION}-${group}`,
			JSON.stringify(newPlayer),
		);
	} catch (error) {
		throw error;
	}
}
