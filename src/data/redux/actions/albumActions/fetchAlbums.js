import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../../configs/axios.config";

export const fetchAlbums = createAsyncThunk("get/albumsList", async (userId) => {
    const res = await axios.get(`/albums?userId=${userId}`);
    return res.data;
});
