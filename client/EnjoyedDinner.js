

Template.EnjoyedDinner.events({
	'click .dinner-done': function () {
		Meteor.call('dinnerDone', function (err, result) {
			if (err) {
				alert(err)
			}

		});
	}
});