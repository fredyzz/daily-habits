export const DESCRIPTION_MIN_LENGTH = 5;
export const DESCRIPTION_MAX_LENGTH = 300;

export function isHabitDescriptionValid(description: string): boolean {
	return (
		description.length >= DESCRIPTION_MIN_LENGTH && description.length <= DESCRIPTION_MAX_LENGTH
	);
}

export function HabitDescriptionNotValidError(description: string): Error {
	return new Error(`Description ${description} is not valid`);
}
