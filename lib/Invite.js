Invites = new Mongo.Collection('invites');

InvitesSchema = new SimpleSchema({
	inviter: {
		type: String
	}

});

Invites.attachSchema(InvitesSchema);
