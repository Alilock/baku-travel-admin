import React, { useEffect, useState } from 'react';
import { baseNetwork } from '../../api/baseNetwork';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

function PlaceList() {
  const [places, setPlaces] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadPlaces();
  }, []);

  const loadPlaces = () => {
    baseNetwork.getAll('/places').then(res => {
      setPlaces(res);
    });
  };

  const deletePlace = () => {
    if (selectedPlaceId) {
      baseNetwork.remove('/places', selectedPlaceId).then(res => {
        setSelectedPlaceId(null);
        setDeleteDialogOpen(false);
        loadPlaces();
      });
    }
  };

  const handleDeleteClick = id => {
    setSelectedPlaceId(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setSelectedPlaceId(null);
    setDeleteDialogOpen(false);
  };

  const handleAddClick = () => {
    navigate('/places/add');
  };

  const handleGoToDetailClick = id => {
    navigate(`/places/${id}`);
  };

  const placeColumns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'openDate', headerName: 'Open Date', width: 150 },
    { field: 'closeDate', headerName: 'Close Date', width: 150 },
    {
      field: 'Image',
      headerName: 'Main Image',
      width: 130,
      renderCell: data => {
        return <img style={{ width: 50, height: 50 }} src={data.row.mainImage} />;
      },
    },
    {
      field: 'Detail',
      headerName: 'Detail',
      width: 150,
      renderCell: data => {
        return (
          <Button onClick={() => handleGoToDetailClick(data.row._id)} variant="outlined" color="primary">
            Go To Detail
          </Button>
        );
      },
    },
    {
      headerName: 'Delete',
      width: 150,
      renderCell: data => {
        return (
          <Button onClick={() => handleDeleteClick(data.row._id)} variant="outlined" color="error">
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Button onClick={handleAddClick}>Add</Button>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid columns={placeColumns} rows={places} getRowId={row => row._id} checkboxSelection />
      </div>
      <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
        <DialogTitle>Delete Place</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this place?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Cancel</Button>
          <Button onClick={deletePlace} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PlaceList;
