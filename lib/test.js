Router.route('/', function () {
// render the Home template with a custom data context
this.render('Home', {data: {title: 'My Title'}});
});
Router.route('/registration');
Router.route('/assign/information');
Router.route('/assign');


