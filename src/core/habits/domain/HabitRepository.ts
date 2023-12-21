import { Habit } from "./Habit";

export interface HabitRepository {
    save: (habit: Habit) => void;
}