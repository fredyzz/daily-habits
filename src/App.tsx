import { createLocalStorageHabitRepository } from "./core/habits/infraestructure/LocalStorageHabitRepository";
import { HabitsContextProvider } from "./sections/habits/contexts/HabitsContext";
import { CreateHabitForm } from "./sections/habits/CreateHabitForm";
import { HabitsList } from "./sections/habits/HabitList";

export function App() {
	const repository = createLocalStorageHabitRepository();

	return (
		<HabitsContextProvider repository={repository}>
			<div className="App">
				<h1>Habtis</h1>
				<HabitsList />
				<CreateHabitForm />
			</div>
		</HabitsContextProvider>
	);
}
