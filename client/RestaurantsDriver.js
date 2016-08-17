Template.RestaurantsDriver.onCreated(function() {
	this.subscribe("invites");
});

Template.RestaurantsDriver.helpers({
	hasInvite: function () {

		let invite = Invites.find({}).count();
		return (invite != 0);
	}
});

