import Button from "@mui/material/Button";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ItemsList from "../../components/ItemsList";
import { FrontendRoutes } from "../../data/constants/FrontendRoutes";
import { fetchAlbums, fetchUsers } from "../../data/redux/actions";
import ModalList from "./ModalList";

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector((state) => state.users.list);
    const albums = useSelector((state) => state.albums.list);
    const [open, setOpen] = useState(false);

    const handlePosts = (userId) => {
        // Possible implementation of passing a parameter: dispatch(setUserId(userId));
        navigate(FrontendRoutes.POST_PAGE(userId));
    };

    const handleAlbums = (userId) => {
        setOpen(true);
        dispatch(fetchAlbums(userId));
    };

    return (
        <>
            <Button variant="contained" onClick={() => dispatch(fetchUsers())}>Fetch users</Button>
            <ItemsList items={users} action="users" handlePosts={handlePosts} handleAlbums={handleAlbums} />
            <ModalList open={open} setOpen={setOpen} albums={albums} />
        </>
    );
};

export default memo(HomePage);
