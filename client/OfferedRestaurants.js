Template.OfferedRestaurants.onCreated(function () {
	this.subscribe("invites")
	this.subscribe("restaurants");
});

Template.OfferedRestaurants.helpers({

	invites(){
		return Invites.find({});
	},
	restaurants() {
		return Restaurants.find({isOffered: true});
	},
	isAccpeted: ()=> {
		return Restaurants.find({isSelected: true}).count();
	},
	isInviter: function () {
		let currentUserId = Meteor.userId();
		let inviter = Invites.findOne({inviterID: currentUserId});
		return (inviter);
	},
	isInvitee: function () {
		let currentUserId = Meteor.userId();
		let invitee = Invites.findOne({inviteeId: currentUserId});
		return (invitee);
	}



});

Template.OfferedRestaurants.events({
	'click .btn_select': function (event, template) {

		event.preventDefault();
		if(event && event.currentTarget && event.currentTarget.dataset){
			var clickedItemId = event.currentTarget.dataset.value;
			Meteor.call('selectRestaurant', clickedItemId,function (err,result) {
				if (err) {
					alert(err)
				}
			});

			FlowRouter.go('/enjoyed');

		}else{
			console.log("something went wrong with setting button id");
		}

	},
	'click .dinner-done': function () {
		Meteor.call('dinnerDone', function (err, result) {
			if (err) {
				alert(err)
			}

		});
	}

});