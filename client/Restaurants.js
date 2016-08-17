

Template.Restaurants.onCreated(function () {
	this.subscribe("restaurants");
});
Template.Restaurants.helpers({
	restaurants() {
		return Restaurants.find({});
	}

});

Template.Restaurants.events({
	'click .btn_invite': function () {
		Meteor.call('dinnerInvite', function (err,result) {
			if (err){
				alert(err)
			}

		});
	},
	'click .btn_add': function (event, template) {
		event.preventDefault();
		if(event && event.currentTarget && event.currentTarget.dataset){
			var clickedItemId = event.currentTarget.dataset.value;
			Meteor.call('offerRestaurant', clickedItemId,function (err,result) {
				if (err) {
					alert(err)
				}
			});
		}else{
			console.log("something went wrong with setting button id");
		}

	},
	'click .btn_remove': function (event, template) {
		event.preventDefault();
		if(event && event.currentTarget && event.currentTarget.dataset){
			var clickedItemId = event.currentTarget.dataset.value;
			Meteor.call('removeRestaurantOffer', clickedItemId,function (err,result) {
				if (err) {
					alert(err)
				}
			});
		}else{
			console.log("something went wrong with setting button id");
		}

	}

});