// App component - represents the whole app
App = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    getInitialState() {
        return {
        }
    },

    getMeteorData() {
        return {
            listings: Listings.find({}).fetch()
        };
    },

    renderListings() {
        return this.data.listings.map((listing) => {
            return <Listing
                key={listing._id}
                listing={listing}/>;
        });
    },

    render() {
        return (
            <div>

                <div id="header-landing">
                    <div className="header__logo-wrapper--landing">
                        <img className="header__logo--landing" src="/images/logo.png"/>
                    </div>
                    <div className="header__slogan">We connect you with your neighborhood</div>
                    <div className="header__neighborhood-button-wrapper">
                        <a href="#" className="btn btn-primary">
                            <span className="header__neighborhood-button-heading">My neighborhood</span><br />
                            One click to your neighborhood
                        </a>
                    </div>
                    <div className="header__login-box">
                        <ul className="nav nav-tabs header__login-box-tabs" role="tablist">
                            <li role="presentation" className="header__login-box-tab active">
                                <a href="#register" aria-controls="register" role="tab" data-toggle="tab">Register</a>
                            </li>
                            <li role="presentation" className="header__login-box-tab"><a href="#login"
                                                                                         aria-controls="login"
                                                                                         role="tab" data-toggle="tab">Login</a>
                            </li>
                        </ul>
                        <div className="tab-content header__login-box-tab-content">
                            <div role="tabpanel" className="tab-pane active" id="register">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Username or email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Stay logged in
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                    <a className="header__login-forget-password" href="#">Forgot password</a>
                                </form>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="login">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Username or email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Stay logged in
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                    <a className="header__login-forget-password" href="#">Forgot password</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div id="option-tool">
                                    <button className="btn btn-primary option-tool-button">Events (25)</button>
                                    <button className="btn btn-primary option-tool-button">Neighbors (455)</button>
                                    <button className="btn btn-primary option-tool-button">Help needed (12)</button>
                                    <button className="btn btn-primary option-tool-button">Services needed (39)</button>
                                </div>
                                <div id="distance-slider">
                                    Around you
                                </div>
                                <div id="zip-code-input">
                                    My zip
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div id="listings">
                                    {this.renderListings()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});