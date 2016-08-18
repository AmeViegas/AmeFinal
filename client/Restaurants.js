var inviteeId;
Template.Restaurants.onCreated(function () {
	this.subscribe("restaurants");
	this.subscribe("user.emails");
	this.subscribe("invites");
});

Template.Restaurants.helpers({
	restaurants() {
		return Restaurants.find({});
	},
	users(){
		return Meteor.users.find(
			{_id: {$ne: Meteor.userId()}},
			{emails: {$elemMatch: {address: 1}}}
		);
	},
	hasInvite: function (){
			return Invites.find({}).count();
	},
	isInviter: function () {
		let currentUserId = Meteor.userId();
		let inviter = Invites.findOne({inviterID: currentUserId});

		return (inviter);
	}


});

Template.Restaurants.events({
	'click .btn_invite': function () {
			let inviterEmail = Meteor.user().emails[0].address;
			let currentUserId = Meteor.userId();
			Meteor.call('dinnerInvite', currentUserId, inviterEmail, inviteeId, function (err, result) {
				if (err) {
					alert(err)
				}else{
					FlowRouter.go('/');
				}

			});
	},
	'click .btn_add': function (event, template) {
		event.preventDefault();
		if (event && event.currentTarget && event.currentTarget.dataset) {
			var clickedItemId = event.currentTarget.dataset.value;
			Meteor.call('offerRestaurant', clickedItemId, function (err, result) {
				if (err) {
					alert(err)
				}
			});
		} else {
			console.log("something went wrong with setting button id");
		}

	},
	'click .btn_remove': function (event, template) {
		event.preventDefault();
		if (event && event.currentTarget && event.currentTarget.dataset) {
			var clickedItemId = event.currentTarget.dataset.value;
			Meteor.call('removeRestaurantOffer', clickedItemId, function (err, result) {
				if (err) {
					alert(err)
				}
			});
		} else {
			console.log("something went wrong with setting button id");
		}

	},
	"change #email-select": function (event, template) {
		event.preventDefault();

		inviteeId = $(event.currentTarget).val();
	},
	"click .check-invite": function (event, template) {
		FlowRouter.go('invites');
	}


});