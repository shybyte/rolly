const _ = lodash;


function truncate(s, maxLength) {
    return _.trunc(s, {
        length: maxLength,
        separator: ' '
    });
}


Listing = React.createClass({
    propTypes: {
        listing: React.PropTypes.object.isRequired,
    },

    render() {
        const listing = this.props.listing;
        return (
            <div className="listings__listing">
                <div className="listings__listing-image">
                    <a href={"/listing/"+listing._id}><img
                        src={'/images/listings/thumbnails/'+listing.image+'.jpg'}/></a>
                </div>
                <div className="listings__listing-content">
                    <a href={'/listing/'+listing._id}><h2
                        className="listings__listing-heading">{truncate(listing.title, 50)}</h2></a>
                    <p>{listing.tags.join(', ')}</p>
                    <a href={'/profile/'+listing.creator}>{listing.creator}</a>
                    <p>{truncate(listing.text, 120)}</p>
                </div>
            </div>
        );
    }
});