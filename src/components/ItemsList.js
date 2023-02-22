import { List, ListItem, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { memo } from "react";

const ItemsList = ({ items, action, handlePosts, handleAlbums }) => {
    const actionObj = {
        users: ["name", "email"],
        posts: ["title", "body"],
        albums: ["title", ""],
    };

    return (
        <List>
            {items?.map((item) => (
                <ListItem
                    key={item.id}
                    sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mt: 2 }}
                >
                    <ListItemText primary={item[actionObj[action][0]]} secondary={item[actionObj[action][1]]} />

                    {action === "users" && (
                        <Stack direction="row" spacing={1}>
                            <Button variant="contained" size="small" onClick={() => handlePosts(item.id)}>
                                Posts
                            </Button>

                            <Button variant="contained" size="small" onClick={() => handleAlbums(item.id)}>
                                Albums
                            </Button>
                        </Stack>
                    )}
                </ListItem>
            ))}
        </List>
    );
};

export default memo(ItemsList);
