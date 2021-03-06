Template.InviteList.onCreated(function () {
	this.subscribe("invites");
	this.subscribe("restaurants");
});

Template.InviteList.helpers({

	invites(){
		return Invites.find({});
	},
	restaurants() {
		return Restaurants.find({isOffered: true});
	},
	isAccpeted: ()=> {
	     return Restaurants.find({isSelected: true}).count();
	},
	isInviting: ()=> {
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

Template.InviteList.events({
	'click .btn_selectedOne': ()=>  {
		Meteor.call('dinnerDone', function (err,result) {
			if (err){
				alert(err)
			}

		});
	},
	'click .dinner-done': function () {
		Meteor.call('dinnerDone', function (err, result) {
			if (err) {
				alert(err)
			}

		});
		FlowRouter.go('/');
	},
		'click .narrow-down': function () {
		FlowRouter.go('choose');
	}

});