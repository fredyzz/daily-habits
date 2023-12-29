import { Habit } from "../../../core/habits/domain/Habit";
import styles from "./index.module.scss";

export function HabitCard({ habit }: { habit: Habit }) {
	return (
		<div className={styles.habitCard}>
			<h3 className={styles.habitCard__title}>{habit.title}</h3>
			<p className={styles.habitCard__description}>{habit.description}</p>
		</div>
	);
}
