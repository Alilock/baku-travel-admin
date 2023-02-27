import React, { useEffect, useState } from 'react';
import { baseNetwork } from '../../api/baseNetwork';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        loadCategories();
    }, []);
    console.log(categories);
    const loadCategories = () => {
        baseNetwork.getAll('/categories').then(res => {
            setCategories(res);
        });
    };

    const deleteCategory = () => {
        if (selectedCategoryId) {
            baseNetwork.remove('/categories', selectedCategoryId).then(res => {
                setSelectedCategoryId(null);
                setDeleteDialogOpen(false);
                loadCategories();
            });
        }
    };

    const handleDeleteClick = id => {
        setSelectedCategoryId(id);
        setDeleteDialogOpen(true);
    };

    const handleDeleteDialogClose = () => {
        setSelectedCategoryId(null);
        setDeleteDialogOpen(false);
    };

    const handleAddClick = () => {
        navigate('/categories/add');
    };

    const handleGoToDetailClick = id => {
        navigate(`/categories/${id}`);
    };

    const categoryColumns = [
        { field: 'name', headerName: 'Name', width: 150 },
        {
            field: 'Image',
            headerName: 'Main Image',
            width: 130,
            renderCell: data => {
                return <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>

                    <img style={{ width: 50, height: 50 }} src={data.row.mainImage} />
                </div>
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
                <DataGrid columns={categoryColumns} rows={categories} getRowId={row => row._id} checkboxSelection />
            </div>
            <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
                <DialogTitle>Delete Category</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure you want to delete this category?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogClose}>Cancel</Button>
                    <Button onClick={deleteCategory} variant="contained" color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CategoryList;
