import {createSlice,  PayloadAction} from "@reduxjs/toolkit"

interface bottomState {
    value : boolean,
}


const initialState : bottomState = {
    value: true,
}

const bottomNavigationSlice = createSlice({
    name: "bottomNavigation",
    initialState,
    reducers: {
        setBottomNav(state){
            !state.value
        }
    }
})


export const {setBottomNav} = bottomNavigationSlice.actions;
export default bottomNavigationSlice.reducer;