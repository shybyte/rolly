Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});

Meteor.subscribe("listings");
Meteor.subscribe("comments");

function getContainer() {
    return document.getElementById("page");
}

FlowRouter.route('/', {
    action(params) {
        ReactDOM.render(<App />, getContainer());
    }
});


FlowRouter.route('/listing/:listingId', {
    action(params) {
        ReactDOM.render(<ListingPage id={params.listingId} />, getContainer());
    }
});

FlowRouter.notFound = {
    action() {
        FlowRouter.go("/");
    }
};