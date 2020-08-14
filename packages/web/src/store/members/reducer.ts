import Members, { MemberActionTypes, MembersAction } from "./types";

const DefaultMembers: Members = {
	members: null
};
const membersReducer = (
	state = DefaultMembers,
	action: MembersAction
): Members => {
	switch (action.type) {
		case MemberActionTypes.ADD_MEMBER:
		case MemberActionTypes.ADD_UNSIGNED_MEMBER:
			return { ...state };
		default:
			return state;
	}
};

export { membersReducer };
