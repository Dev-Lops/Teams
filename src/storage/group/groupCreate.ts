import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLECTION } from "@storage/storageConfig";

export async function groupCreate(newGroupName: string) {
	try {
    
		await AsyncStorage.setItem(GROUP_COLECTION, newGroupName);
	} catch (error) {
		throw error;
	}
}
