Restaurants = new Mongo.Collection('restaurants');

RestaurantsSchema = new SimpleSchema({
	name: {
		type: String
	},
	address: {
		type: String
	},
	phone: {
		type: String
	},
	url: {
		type: String
	},
	isOffered: {
		type: Boolean
	},
	isSelected: {
		type: Boolean
	}


});

Restaurants.attachSchema(RestaurantsSchema);
