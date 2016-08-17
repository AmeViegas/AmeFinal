import { Meteor } from 'meteor/meteor';
import '../server/data/restaurantData.js';


Meteor.startup(() => {
	// code to run on server at startup
	for(var i=0; i < RestaurantData.restaurants.length; i++){

		var restaurant = RestaurantData.restaurants[i];

		check(restaurant, RestaurantsSchema);

		Restaurants.upsert({
			name: restaurant.name
		}, {
			$set: {
				name: restaurant.name,
				address: restaurant.address,
				phone: restaurant.phone,
				url: restaurant.url,
				isOffered: restaurant.isOffered,
				isSelected: restaurant.isSelected
			}
		}, function(error, result) {
			if (error) {
				var errMsg = "Error while writing restaurant data";
				console.log(errMsg, error);
				throw new Meteor.Error('500', errMsg);
			}
		});
	}
});
