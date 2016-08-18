
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
		BlazeLayout.render('MainLayout', {main: 'Restaurants',data: {title: 'Dinner!!'}});
	}

});
FlowRouter.route('/invites', {
	name: 'invites',
	action() {
		BlazeLayout.render('MainLayout', {main: 'CheckInvites',data: {title: 'Invites'}});
	}

});

FlowRouter.route('/add', {
	name: 'add',
	action() {
		BlazeLayout.render('MainLayout', {main: 'AddPage',data: {title: 'Add Restaurants'}});
	}

});

FlowRouter.route('/enjoyed', {
	name: 'EnjoyedDinner',
	action() {
		BlazeLayout.render('MainLayout', {main: 'EnjoyedDinner',data: {title: 'Enjoy'}});
	}

});
FlowRouter.route('/logout', {
	name: 'LogoutPage',
	action() {
		BlazeLayout.render('HomeLayout', {main: 'LogoutPage',data: {title: 'Bye'}});
	}

});
