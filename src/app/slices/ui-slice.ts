import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export type DrawerState = {
    value: boolean;
};

const initialState: DrawerState = {
    value: false,
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,

    reducers: {
        toggleSideDrawer: (state) => {
            state.value = !state.value;
        }
    },
});

export const { toggleSideDrawer } = uiSlice.actions;

export const selectDrawer = (state: RootState) => state.ui.value;

export default uiSlice.reducer;