FlowRouter.notFound = {
	action: function () {
		FlowRouter.go('home');
	}
};

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('MainLayout', {main: 'HomePage',data: {title: 'home'}});
	}

});

FlowRouter.route('/choose', {
	name: 'choose',
	action() {
		BlazeLayout.render('MainLayout', {main: 'ChoosePage',data: {title: 'Invited to dinner'}});
	}

});
FlowRouter.route('/add', {
	name: 'add',
	action() {
		BlazeLayout.render('MainLayout', {main: 'AddPage',data: {title: 'Add Restaurants'}});
	}

});
