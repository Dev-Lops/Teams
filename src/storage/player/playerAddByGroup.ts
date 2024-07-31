import AsyncStorage from "@react-native-async-storage/async-storage";
import type { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(
	newPlayer: PlayerStorageDTO,
	group: string,
) {
	try {
		const storedPlayers = await playersGetByGroup(group);

		const playerAlreadyExists = storedPlayers.filter(
			(player) => player.name === newPlayer.name,
		);
		if (playerAlreadyExists.length > 0) {
			throw new Error(`${newPlayer.name} ja está cadastrado(a) em algum time aqui!`);
		}

		const storage = JSON.stringify([...storedPlayers, newPlayer]);

		await AsyncStorage.setItem(`${PLAYER_COLECTION}-${group}`, storage);
	} catch (error) {
		throw error;
	}
}
