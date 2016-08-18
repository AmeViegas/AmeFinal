
Template.CheckInvites.onCreated(function() {
	this.subscribe("invites");
});

Template.CheckInvites.helpers({
	hasInvite: function () {
		let currentUserId = Meteor.userId();
		let invite = Invites.findOne({inviteeId: currentUserId});

		return (invite);
	}
});

