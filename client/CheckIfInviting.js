
Template.CheckIfInviting.onCreated(function() {
	this.subscribe("invites");
});

Template.CheckIfInviting.helpers({
	isInviting: function () {
		let currentUserId = Meteor.userId();
		let inviter = Invites.findOne({inviterID: currentUserId});

		return (inviter);
	}
});
