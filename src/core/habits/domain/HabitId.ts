export function isHabitIdValid(id: string): boolean {
	const regexExp =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

	return regexExp.test(id);
}

export function HabitIdNotValidError(id: string): Error {
	return new Error(`Id ${id} is not valid`);
}