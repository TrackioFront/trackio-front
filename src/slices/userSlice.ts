import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/User";

interface UserState {
    user: User | null;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    user: null, 
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            if (action.payload) {
                state.user = action.payload;
            } else {
                console.error("User payload is undefined or invalid.");
            }
        },
        setIsLogin: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload !== undefined ? action.payload : false;
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        }
    },
});

export const { setUser, setIsLogin, logout } = userSlice.actions;
export default userSlice.reducer;
