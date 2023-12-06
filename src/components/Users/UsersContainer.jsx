import { connect } from 'react-redux';
import { acceptFollow, setCurrentPage, acceptUnfollow, toggleFollowingProgress, getUsers, follow, unfollow } from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { followingInProgress, getAllUsersSelector, getCurrentPage, getPageSize, getTotalUsersCount, isFetching } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize, getUsers } = this.props;
        getUsers(currentPage, pageSize);
        /* this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
            }); */
    }

    onPageChanged = (pageNumber) => {
        const { setCurrentPage, getUsers, pageSize } = this.props;
        setCurrentPage(pageNumber);
        getUsers(pageNumber, pageSize);
        /* this.props.toggleIsFetching(true);
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
            }); */
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalItemsCount={this.props.totalItemsCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress} />
            </>
        );
    }
}

/* let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}; */

let mapStateToProps = (state) => {
    return {
        users: getAllUsersSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state)

    }
};

/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}; */
/* export default connect(mapStateToProps, { acceptFollow, acceptUnfollow, setCurrentPage, toggleFollowingProgress, getUsers, unfollow, follow })(UsersContainer); */

export default compose(
    connect(mapStateToProps, { acceptFollow, acceptUnfollow, setCurrentPage, toggleFollowingProgress, getUsers, unfollow, follow }),
)(UsersContainer);

