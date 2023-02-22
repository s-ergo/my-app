import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../../configs/axios.config";

export const fetchUsers = createAsyncThunk("get/usersList", async () => {
    const res = await axios.get("/users");
    return res.data;
});
