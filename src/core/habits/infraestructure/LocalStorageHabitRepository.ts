import { Habit } from "../domain/Habit";
import { HabitRepository } from "../domain/HabitRepository";

const HABITS_STORAGE_KEY = "habits";

export function createLocalStorageHabitRepository(): HabitRepository {
	return {
		get,
		getAll,
		save,
	};
}

async function get(id: string) {
	const habits = getAllFromLocalStorage();
	const habit = habits.get(id);

	if (!habit) {
		return Promise.resolve(null);
	}

	return Promise.resolve(habit);
}

async function getAll() {
	const habits = getAllFromLocalStorage();

	return Promise.resolve(Array.from(habits.values()));
}

function save(habit: Habit) {
	const habits = getAllFromLocalStorage();

	habits.set(habit.id, habit);
	localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(Array.from(habits.entries())));
}

function getAllFromLocalStorage(): Map<string, Habit> {
	const habits = localStorage.getItem(HABITS_STORAGE_KEY);

	if (habits === null) {
		return new Map();
	}

	const map = new Map(JSON.parse(habits) as Iterable<[string, Habit]>);

	return map;
}
