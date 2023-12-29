import { Habit } from "../../domain/Habit";
import { HabitRepository } from "../../domain/HabitRepository";

export async function getAllHabits(habitRepository: HabitRepository): Promise<Habit[]> {
	return habitRepository.getAll();
}
