import React from 'react';
import './AddTackBtn.css'
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AddTackForm from '../AddTackForm/AddTackForm';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddTackBtn = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (

        <div>
            <AddCircleRoundedIcon id='addTackBtn' variant="outlined" color="primary" onClick={handleClickOpen}>

            </AddCircleRoundedIcon>
            <Dialog id='dialog'
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <AddTackForm />
            </Dialog>
        </div>
    );
};

export default AddTackBtn;


