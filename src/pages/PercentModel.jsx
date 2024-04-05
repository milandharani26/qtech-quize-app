import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { forwardRef, useState } from 'react';
import badge from "../assets/Badge.png"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { reviewQuize } from '../quizSlice';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PercentModel() {

  const dispatch = useDispatch();

  const points = useSelector((store) => store.points);
  console.log(points, "points");
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    dispatch(reviewQuize())
    setOpen(false);
  };


  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: {
            width: '411px',
            height: '302px',
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "20px"
          },
        }}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" style={{ textAlign: 'center' }}>
            <img src={badge} alt="" style={{ display: 'inline-block' }} />
          </DialogContentText>

          <DialogContentText id="alert-dialog-slide-description" style={{ fontWeight: "900" }}>
            Congratulations you have passed
          </DialogContentText>

          <DialogContentText id="alert-dialog-slide-description" sx={{ marginTop: "11px", display: "flex", justifyContent: "center", fontWeight: "600" }}>

            {points < 50 ? "you are failed" : `your Scrore ${points}%`}
            {/* your Scrore {points}% */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "black", marginBottom: "10px", fontWeight: "900" }}>Review quiz</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}




