import React, { useEffect, useState } from 'react'
import { baseNetwork } from '../../api/baseNetwork';
import { Avatar, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, useNavigation } from 'react-router-dom';

function PlaceList() {

  const [places, setplaces] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    loadPlaces();
  }, [])

  const deletePlace = (id) => {

    baseNetwork.remove('/places', id)
      .then(res => {
        loadPlaces();
      })

  }


  const goToDetail = (id) => {

    navigate('/places/' + id);

  }

  //headerName -> column Title
  //field -> item property
  const placeColumns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'openDate', headerName: 'Open Date', width: 150 },
    { field: 'closeDate', headerName: 'Close Date', width: 150 },
    {
      field: 'Image', headerName: 'Main Image', width: 150,
      renderCell: (data) => {
        return (<img src={data.row.mainImage} />)
      }
    },
    {
      field: 'Detail',
      headerName: 'Detail',
      width: 150,
      renderCell: (data) => {
        return (<Button onClick={() => goToDetail(data.row._id)} variant="outlined" color="primary">
          Go To Detail
        </Button>)
      }
    },
    {
      headerName: 'Delete',
      width: 150,
      renderCell: (data) => {
        return (<Button onClick={() => deletePlace(data.row._id)} variant="outlined" color="error">
          Delete
        </Button>)
      }
    },

  ];


  const loadPlaces = () => {
    baseNetwork.getAll('/places')
      .then(res => {
        console.log('places', res);
        setplaces(res);
      })
  }

  return (
    <>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          columns={placeColumns}
          rows={places}
          getRowId={(row) => row._id}
        />
      </div>
    </>
  )
}


export default PlaceList