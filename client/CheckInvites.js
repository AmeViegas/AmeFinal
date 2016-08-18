Template.CheckInvites.onCreated(function () {
	this.subscribe("invites");
});

Template.CheckInvites.helpers({
	isInviter: function () {
		let currentUserId = Meteor.userId();
		let inviter = Invites.findOne({inviterID: currentUserId});
		return (inviter);
	},
	isInvitee: function () {
		let currentUserId = Meteor.userId();
		let invitee = Invites.findOne({inviteeId: currentUserId});
		return (invitee);
	},
	hasInvite: () => {
		return Invites.find().count;
	}

});

