ListingPage = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            listing: Listings.findOne(this.props.id),
            comments: Comments.find({listingId: this.props.id}).fetch()
        };
    },

    renderComments() {
        return this.data.comments.map(comment => {
            return <div key={comment._id}>
                <blockquote>{comment.text}</blockquote>
                {comment.creator} {comment.createdAt.toString()}
            </div>;
        });
    },

    render() {
        const listing = this.data.listing;
        if (!listing) {
            return <div>
                Cant't find Listing with id this.props.id.
            </div>
        }

        return (
            <div>
                <div id="header-default">
                    <div className="container">
                        <img id="logo" src="/images/logo.png"/>
                    </div>
                </div>
                <div id="content">
                    <div className="container">
                        <div className="listing">
                            <img src={'/images/listings/'+listing.image + '.jpg'}/>
                            <div className="listing-content">
                                <h2>{listing.title}</h2>
                                <p>{listing.tags.join(', ')}</p>
                                <a href={'/profile/'+listing.creator}>{listing.creator}</a><p>{listing.text}}</p>
                                {this.data.comments.length > 0 ?
                                    <div className="comments">
                                        <h3>Comments</h3>
                                        {this.renderComments()}
                                    </div> : 'No Comments yet.'
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});