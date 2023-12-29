import React, { useEffect, useState } from "react";

import { Spinner } from "../../../components/Spinner";
import {
	DESCRIPTION_MAX_LENGTH,
	DESCRIPTION_MIN_LENGTH,
	isHabitDescriptionValid,
} from "../../../core/habits/domain/HabitDescription";
import {
	isHabitTitleValid,
	TITLE_MAX_LENGTH,
	TITLE_MIN_LENGTH,
} from "../../../core/habits/domain/HabitTitle";
import { FormStatus, useHabitForm } from "../hooks/useHabitForm";
import { useHabitFormData } from "../hooks/useHabitFormData";

const initialState = {
	title: "",
	description: "",
};

export function CreateHabitForm() {
	const { formData, updateForm, resetForm } = useHabitFormData(initialState);
	const { formStatus, submitForm, resetFormStatus } = useHabitForm();
	const [errors, setErrors] = useState(initialState);

	useEffect(() => {
		const isTitleValid = isHabitTitleValid(formData.title);
		const isDescriptionValid = isHabitDescriptionValid(formData.description);

		setErrors({
			title: isTitleValid
				? ""
				: `Title must be between ${TITLE_MIN_LENGTH} and ${TITLE_MAX_LENGTH} characters`,
			description: isDescriptionValid
				? ""
				: `Title must be between ${DESCRIPTION_MIN_LENGTH} and ${DESCRIPTION_MAX_LENGTH} characters`,
		});
	}, [formData]);

	const handleSubmit = (ev: React.FormEvent) => {
		ev.preventDefault();

		submitForm(formData);
	};

	switch (formStatus) {
		case FormStatus.Loading:
			return <Spinner />;
		case FormStatus.Success:
			return (
				<SuccessNotification
					resetForm={() => {
						resetForm();
						resetFormStatus();
					}}
				/>
			);
		case FormStatus.Error:
			return <ErrorNotification resetForm={resetFormStatus} />;
		case FormStatus.Initial:
			return (
				<section id="order" className="">
					<h2>🧑‍🏫 Create new Habit</h2>

					<form
						onSubmit={(ev) => {
							handleSubmit(ev);
						}}
					>
						<div>
							<label htmlFor="title">Habit title</label>
							<input
								id="title"
								name="title"
								type="text"
								value={formData.title}
								onChange={(ev) => {
									updateForm({ title: ev.target.value });
								}}
							/>
							{formData.title && errors.title && (
								<div style={{ color: "tomato" }}>{errors.title}</div>
							)}
						</div>
						<div>
							<label htmlFor="description">Description</label>
							<input
								id="description"
								name="description"
								type="text"
								value={formData.description}
								onChange={(ev) => {
									updateForm({ description: ev.target.value });
								}}
							/>
							{formData.description && errors.description && (
								<div style={{ color: "tomato" }}>{errors.description}</div>
							)}
						</div>

						<button type="submit">Create Habit</button>
					</form>
				</section>
			);
		default:
			assertUnreachable(formStatus);
	}
}

function SuccessNotification({ resetForm }: { resetForm: () => void }) {
	return (
		<section>
			<h2>🚀 Habit created</h2>
			<button onClick={resetForm}>Create a new Habit</button>
		</section>
	);
}

function ErrorNotification({ resetForm }: { resetForm: () => void }) {
	return (
		<section role="alert" className="error">
			<h2>🌋 You have an error in your form</h2>
			<button onClick={resetForm}>Ok, let me try again</button>
		</section>
	);
}

function assertUnreachable(_x: never): never {
	throw new Error("Didn't expect to get here");
}
