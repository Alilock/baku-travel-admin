import { Button, CircularProgress, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseNetwork } from '../../api/baseNetwork';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FirstPageIcon from '@mui/icons-material/FirstPage';

function Detail() {

  let { id } = useParams();

  const [detail, setdetail] = useState({});
  const [loading, setloading] = useState(true);
  const [iframe, setiframe] = useState('');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();

  useEffect(() => {

    baseNetwork.getById('/places', id)
      .then(data => {
        setloading(false);
        setdetail(data);

        let iframeString = `<iframe
                width="450"
                height="250"
                frameborder="0" style="border:0"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?&q=` + data.name + `&key=AIzaSyBOr8iEaw-JrUGTdOZ5KpuWEmltI0L4GgU&center=${data.latitude},${data.longitude}"
                allowfullscreen>
            </iframe>`
        setiframe(iframeString)

      })

  }, [])




  return (<>
    <Tooltip title='Go Back'><Button variant='contained' color='info' onClick={() => navigate(-1)}><FirstPageIcon></FirstPageIcon></Button></Tooltip>
    {
      loading ? <CircularProgress /> : <>
        <h1>Detail Page</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="170"
                image="https://www.zaha-hadid.com/wp-content/uploads/2019/12/hac_photobyiwanbaan4copy.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {detail.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>Id: {detail._id}</p>
                  <p>Name: {detail.name}</p>
                  <p>Open Date: {detail.openDate}</p>
                  <p>Close Date: {detail.closeDate}</p>
                  <p>latitude: {detail.latitude}</p>
                  <p>longitude: {detail.longitude}</p>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color='error'>Delete</Button>
                <Button variant="outlined" onClick={handleClickOpen}>
                  Edit
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Edit Content</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Name"
                      type='text'
                      fullWidth
                      variant="standard"
                    />
                    <DialogContentText>
                      Open Date
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      type='week'
                      fullWidth
                      variant="standard"
                    />
                    <DialogContentText>
                      Close Date
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      type='week'
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Lattitude"
                      type='text'
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Longitude"
                      type='text'
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Finish</Button>
                  </DialogActions>
                </Dialog>

              </CardActions>
            </Card>
          </div>
          <div style={{ width: '50%' }}>



            <Iframe iframe={iframe} />
          </div>
        </div>
      </>
    }



  </>


  )
}

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
}

export default Detail