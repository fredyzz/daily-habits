import {HabitTitleNotValidError, isHabitTitleValid} from "./HabitTitle"
import { HabitDescriptionNotValidError, isHabitDescriptionValid } from "./HabitDescription";
import { HabitIdNotValidError, isHabitIdValid } from "./HabitId";

export interface Habit {
    id: string;
    description: string
    title: string;
}

export function CheckHabitIsValid( {id, description, title}: Habit) {

    if(!isHabitIdValid(id)) {
        throw HabitIdNotValidError(id)
    }

    if (!isHabitTitleValid(title)) {
		throw HabitTitleNotValidError(title);
	}

    if (!isHabitDescriptionValid(description)) {
		throw HabitDescriptionNotValidError(description);
	}
}