import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        activeTab: 'Photos',
        activeNav: 'search',
        result: [],
        loading: 'false',
        error: null
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        },
        setActiveTabs(state, action) {
            state.activeTab = action.payload
        },
        setActiveNav(state, action) {
            state.activeNav = action.payload
        },
        setResult(state, action) {
            state.result = action.payload
            state.loading = false
        },
        setLoading(state, action) {
            state.loading = true
            state.error = null
        },

        setError(state, action) {
            state.error = action.payload
            state.loading = false
        },
        clearResult(state) {
            state.result = []
        },
    }
})

export const { setQuery, setActiveTabs, setActiveNav, setLoading, setResult, setError, clearResult } = searchSlice.actions
export default searchSlice.reducer