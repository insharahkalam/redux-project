import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from 'react-toastify';

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                items => items.id === action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items))
            }

        },

        removeCollection: (state, action) => {
            console.log("removed");

            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            console.log(state.items);
            localStorage.setItem('collection', JSON.stringify(state.items))
        },

        clearCollection: (state, action) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addTost: () => {
            toast.success('Added To Collection', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removeTost: () => {
            toast.error('Remove To Collection', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
    }
})

export const { addCollection, addTost, removeTost, removeCollection, clearCollection } = collectionSlice.actions
export default collectionSlice.reducer