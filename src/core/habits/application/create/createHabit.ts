import { Habit } from "../../domain/Habit";
import { HabitRepository } from "../../domain/HabitRepository";

export function createHabit(habitRepository: HabitRepository, habit: Habit): void {
	habitRepository.save(habit);
}
