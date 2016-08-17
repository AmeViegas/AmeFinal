Meteor.methods({
	dinnerDone: function () {
		Restaurants.update({isOffered: true}, {
			$set: {isOffered: false}
		});

		Invites.remove({});
		
	},
	dinnerInvite:  function () {
		Invites.insert({inviter: 'Ame'});
	},
	offerRestaurant: function (id) {
		Restaurants.update({_id: id}, {
			$set: {isOffered: true}
		});
	},
	removeRestaurantOffer: function (id) {
		Restaurants.update({_id: id}, {
			$set: {isOffered: false}
		});
	},
	selectRestaurant: function (id) {
		console.log(id);
		Restaurants.update({_id: id}, {
			$set: {isSelected: true}
		});
	}

})


