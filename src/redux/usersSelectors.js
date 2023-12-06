import { createSelector } from "reselect";

export const getAllUsers = (state) => {
    return state.usersPage.users;
}

const selectUsers = state => state.usersPage.users;

export const getAllUsersSelector = createSelector(selectUsers, users => {
    return users;
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const isFetching = (state) => {
    return state.usersPage.isFetching;
}

export const followingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}