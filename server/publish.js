Meteor.publish("listings", () => Listings.find({}));
Meteor.publish("comments", () => Comments.find({}));