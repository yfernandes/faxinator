import { Dispatch } from "redux";

import { AppActions, AppState } from "../rootReducer";
// import  from "./types";
import Members, { MemberActionTypes, Member } from "./types";

export const addMember = (member: Member) => (
	dispatch: Dispatch<AppActions>
): AppActions => {
	return dispatch({
		type: MemberActionTypes.ADD_MEMBER,
		member
	});
};
export const addUnsignedMember = (member: string) => (
	dispatch: Dispatch<AppActions>
): AppActions => {
	return dispatch({
		type: MemberActionTypes.ADD_UNSIGNED_MEMBER,
		member
	});
};
