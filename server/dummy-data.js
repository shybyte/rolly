var tags = ['Suche', 'Biete', 'Verkaufe', 'Tausche', 'Dating', 'Party', 'Kochen', 'Sport'];
var images = ['clown', 'clubbing', 'flowers', 'rainbow-smoothies'];


Meteor.startup(function () {
    const chance = new Chance();
    if (Meteor.users.find().count() === 0) {
        Meteor.users.remove({});
        Listings.remove({});
        Comments.remove({});

        const usernames = chance.unique(chance.first, 10);

        _.range(10).forEach((i) => {
            Accounts.createUser({
                username: usernames[i],
                email: chance.email(),
                password: 'password'
            });
        });

        var users = Meteor.users.find().fetch();


        _.range(10).forEach((i) => {
            var randomUser = chance.pick(users);
            const listingId = Listings.insert({
                title: chance.sentence(),
                text: chance.paragraph(),
                tags: [].concat(chance.pick(tags, chance.d4())),
                creator: randomUser.username,
                image: chance.pick(images)
            });

            _.range(chance.d4()).forEach((i) => {
                Comments.insert({
                    listingId: listingId,
                    text: chance.paragraph(),
                    creator: chance.pick(users).username,
                    createdAt: chance.date({year: 2015})
                });
            });

        });


    }

});