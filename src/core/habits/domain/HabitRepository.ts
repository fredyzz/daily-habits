import { Habit } from "./Habit";

export interface HabitRepository {
	get: (id: string) => Promise<Habit | null>;
	getAll: () => Promise<Habit[]>;
	save: (habit: Habit) => void;
}
