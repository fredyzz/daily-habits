import { Habit } from "../domain/Habit";
import { HabitRepository } from "../domain/HabitRepository";

const HABITS_STORAGE_KEY = "habits"

export function createLocalStorageHabitRepository() : HabitRepository {
    return {
        save
    }
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