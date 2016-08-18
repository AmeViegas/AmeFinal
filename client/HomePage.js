/**
 * Created by ame on 8/17/16.
 */

Template.HomePage.onCreated(function () {
	this.subscribe("restaurants");
});

Template.HomePage.helpers({
	numRestaurants: function () {
		return Restaurants.find({}).count();
	}
});

Template.HomePage.events({
	'click .narrow-down': function () {
		FlowRouter.go('choose');
	},
	'click .check-invite': function () {
		FlowRouter.go('invites');
	}
});
