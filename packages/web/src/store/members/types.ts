export type Member = {
	id: number;
	name: string;
};

export default interface Members {
	members: Member[] | string;
}

export enum MemberActionTypes {
	ADD_MEMBER = "ADD_MEMBER",
	ADD_UNSIGNED_MEMBER = "ADD_UNSIGNED_MEMBER"
}

export type AddMember = {
	type: MemberActionTypes.ADD_MEMBER;
	member: Member;
};

export type AddUnsignedMember = {
	type: MemberActionTypes.ADD_UNSIGNED_MEMBER;
	member: string;
};

export type MembersAction = AddMember | AddUnsignedMember;
