Restaurants = new Mongo.Collection('restaurants');

RestaurantsSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Restaurant Name"
	},
	address: {
		type: String
	},
	phone: {
		type: String
	},
	url: {
		type: String,
		optional: true
	},
	isOffered: {
		type: Boolean,
		defaultValue: false,
		autoform: {
			type: "hidden"
		}
 	},
	isSelected: {
		type: Boolean,
		defaultValue: false,
		autoform: {
			type: "hidden"
		}
	}


});

Restaurants.attachSchema(RestaurantsSchema);
