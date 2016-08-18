Meteor.publish('user.emails', function () {
	const options = {
		fields: {
			'emails': 1
		}
	};

	return Meteor.users.find({_id: {$ne: this.userId}}, options);

});

Meteor.publish('restaurants', function () {
	return Restaurants.find({});
});

Meteor.publish('invites', function () {
	return Invites.find({});
});
