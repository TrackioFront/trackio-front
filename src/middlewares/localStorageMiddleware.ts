import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware = store => next => action => {
    const result = next(action);
    const state = store.getState();

    try {
        localStorage.setItem('state', JSON.stringify({
            user: state?.user?.user,
            isLoggedIn: state?.user?.isLoggedIn
        }));
    } catch (error) {
        console.error("Error saving state to localStorage", error);
    }

    return result;
};
