Invites = new Mongo.Collection('invites');

InvitesSchema = new SimpleSchema({
	inviterID: {
		type: String
	},
	inviterEmail: {
		type: String
	},
	inviteeId: {
		type: String
	}
});

Invites.attachSchema(InvitesSchema);
