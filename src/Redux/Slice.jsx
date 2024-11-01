import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    productData:[],
    status:"idle",
    catData:[],
    searchData:[]
}


export const products = createAsyncThunk(
    "products",
    async () => {
        let res = await axios.get(`https://dummyjson.com/products?limit=200`)
        return res.data.products
    }
)


export const categories = createAsyncThunk(
    "categories",
    async () => {
        let res = await axios.get(`https://dummyjson.com/products/categories`)
        return res.data
    }
)


export const search = createAsyncThunk(
    "search",
    async (name) => {
        let res = await axios.get(`https://dummyjson.com/products/search?q=${name}`)
        return res.data
    }
)




export const Slice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(products.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(products.fulfilled, (state, { payload }) => {
            state.status = "idle"
            state.productData = payload
        })
        .addCase(products.rejected, (state, action) => {
            state.status = "idle"
        })

        .addCase(categories.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(categories.fulfilled, (state, { payload }) => {
            state.status = "idle"
            state.catData = payload
        })
        .addCase(categories.rejected, (state, action) => {
            state.status = "idle"
        })

        .addCase(search.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(search.fulfilled, (state, { payload }) => {
            state.status = "idle"
            state.searchData = payload.products
        })
        .addCase(search.rejected, (state, action) => {
            state.status = "idle"
        })

    }
})