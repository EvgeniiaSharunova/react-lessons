import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6e4f1a0b-564d-4976-9590-284bf3d30827'
    }
});


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
    getProgile(userId) {
        console.warn('Obsolete method. Please use profileAPI.profileAPI');
        return profileAPI.getProgile(userId);
    }
}

export const profileAPI = {
    getProgile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put('profile/status/', { status: status });
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post('/auth/login/', { email, password, rememberMe }).then(response => response.data);
    },
    logout() {
        return instance.delete('/auth/login/').then(response => response.data);
    }
}


