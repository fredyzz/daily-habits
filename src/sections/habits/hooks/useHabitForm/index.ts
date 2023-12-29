import { useState } from "react";

import { useHabitsContext } from "../../contexts/HabitsContext";

export const enum FormStatus {
	Loading,
	Success,
	Error,
	Initial,
}

export function useHabitForm(): {
	formStatus: FormStatus;
	submitForm: (formData: { title: string; description: string }) => void;
	resetFormStatus: () => void;
} {
	const [formStatus, setFormStatus] = useState(FormStatus.Initial);
	const { createHabit } = useHabitsContext();

	function submitForm({ title, description }: { title: string; description: string }) {
		setFormStatus(FormStatus.Loading);

		try {
			createHabit({ title, description })
				.then(() => {
					setFormStatus(FormStatus.Success);
				})
				.catch(() => {
					throw new Error("Could not create Habit");
				});
		} catch (e) {
			setFormStatus(FormStatus.Error);
		}
	}

	function resetFormStatus() {
		setFormStatus(FormStatus.Initial);
	}

	return {
		formStatus,
		submitForm,
		resetFormStatus,
	};
}
