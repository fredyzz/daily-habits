import { Habit } from "../../domain/Habit";
import { HabitRepository } from "../../domain/HabitRepository";

export function createHabit(habit: Habit, habitRepository: HabitRepository) : void {
    habitRepository.save(habit)
}