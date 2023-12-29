import { useHabitsContext } from "../contexts/HabitsContext";
import { HabitCard } from "../HabitCard";
import styles from "./index.module.scss";

export function HabitsList() {
	const { habits } = useHabitsContext();

	return (
		<section>
			<h2>Current habits</h2>
			<div className={styles.list}>
				{habits.map((habit) => (
					<HabitCard key={habit.id} habit={habit} />
				))}
			</div>
		</section>
	);
}
