import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { createHabit } from "../../../core/habits/application/create/createHabit";
import { getAllHabits } from "../../../core/habits/application/getAll/getAllHabits";
import { Habit } from "../../../core/habits/domain/Habit";
import { HabitRepository } from "../../../core/habits/domain/HabitRepository";

export interface ContextState {
	habits: Habit[];
	createHabit: (habit: { title: string; description: string }) => Promise<void>;
}

export const HabitsContext = createContext({} as ContextState);

export const HabitsContextProvider = ({
	children,
	repository,
}: React.PropsWithChildren<{ repository: HabitRepository }>) => {
	const [habits, setHabits] = useState<Habit[]>([]);

	async function create({ title, description }: { title: string; description: string }) {
		const id = (uuidv4 as () => string)(); // TODO: check uuid types

		createHabit(repository, { id, title, description });
		await getHabits();
	}

	async function getHabits() {
		return getAllHabits(repository).then((habits) => {
			setHabits(habits);
		});
	}

	useEffect(() => {
		void getHabits();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<HabitsContext.Provider value={{ habits, createHabit: create }}>
			{children}
		</HabitsContext.Provider>
	);
};

export const useHabitsContext = () => useContext(HabitsContext);
