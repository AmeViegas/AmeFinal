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

	}

});