Meteor.methods({
	dinnerDone: function () {
		Invites.remove({});
		Restaurants.update({isOffered: true}, {
			$set: {isOffered: false}
		});
		Restaurants.update({isSelected: true}, {
			$set: {isSelected: false}
		});

	},
	selectedRestuarant: function () {
		Restaurants.update({isOffered: true}, {
			$set: {isOffered: false}
		});

	},
	dinnerInvite: function (inviterId, inviterEmail, inviteeId) {
		console.log(inviterEmail);
		console.log(inviteeId);

		Invites.insert(
			{
				inviterID: inviterId,
				inviterEmail: inviterEmail,
				inviteeId: inviteeId
			}
		);
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


});