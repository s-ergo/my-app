import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import React, { memo } from "react";
import ItemsList from "../../components/ItemsList";

const ModalList = ({ open, setOpen, albums }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <ItemsList items={albums} action="albums" />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default memo(ModalList);
