import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { setUserProfile, userProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../redux/messageReducer';
import Profile from './Profile';


export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        if (!userId) {
            this.props.history.push('/login');
        }

        this.props.userProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }
    render() {
        return (
            <div>
                <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.messagePage.profile,
        status: state.messagePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
};

/* let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, { setUserProfile, userProfile })(WithUrlDataContainerComponent); */

export default compose(
    connect(mapStateToProps, { setUserProfile, userProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);