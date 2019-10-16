import { FETCH_USERS, FETCH_CURRENT_USER, FETCH_ADMINS } from "./types";

export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get("/users");

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};

// *************************

export const fetchCurrentUser = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get("/current_user");

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
};

// *************************

export const fetchAdmins = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get("/admins");

    dispatch({
        type: FETCH_ADMINS,
        payload: res
    });
};
