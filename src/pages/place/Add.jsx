import React from 'react'
import { useForm } from "react-hook-form";
import { baseNetwork } from '../../api/baseNetwork';
import { Button, Grid, Select, TextField , MenuItem , InputLabel } from '@mui/material';


function Add() {

    const { register, handleSubmit } = useForm();

    

    const addNewPlace = (values) => {
        var form_data = new FormData();
        for (let i = 0; i < values.images.length; i++) {
            form_data.append("images", values.images[i]);
        }
        console.log(values)
        form_data.append("mainImg", values.mainImg[0]);
        form_data.append("name",values.name);
        form_data.append("description",values.description);
        form_data.append("latitude",values.latitude);
        form_data.append("longitude",values.longitude);
        form_data.append("openDate",values.openDate);
        form_data.append("closeDate",values.closeDate);
        form_data.append("category",values.category);
        
        baseNetwork.add('places', form_data)
            .then(res => {
                console.log('Res ', res);
                alert('Success!!')
            })

    }

    return (<>
        <form onSubmit={handleSubmit(addNewPlace)}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField fullWidth type="text" label="Name"  {...register("name")} required />
                </Grid>
                <Grid item xs={6}>
                </Grid>

                <Grid item xs={6}>
                    <TextField fullWidth type="text" label="Description" {...register("description")} />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel id="demo-simple-select-error-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-error-label"
                        id="demo-simple-select-error"
                        fullWidth
                        name='category'
                        {...register('category')}
                        label="Category"
                        required
                    >
                        <MenuItem value={"restaurant"}>Restaurant</MenuItem>
                        <MenuItem value={"museum"}>Museum</MenuItem>
                        <MenuItem value={"hotel"}>Hotel</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={6}>
                    <TextField fullWidth type="text" label="Latitude" {...register("latitude")} required />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth type="text" label="Longitude" {...register("longitude")} required />
                </Grid>

                <Grid item xs={6}>
                    <TextField fullWidth id="time" label="Open Date" type="time" inputProps={300} {...register("openDate")} />
                </Grid>

                <Grid item xs={6}>
                    <TextField fullWidth id="time" label="Close Date" type="time" inputProps={300} {...register("closeDate")} />
                </Grid>

                <Grid item xs={6}>
                    <label htmlFor="">Main Image </label>
                    <input accept="image/*" {...register('mainImg')} type="file" />

                </Grid>

                <Grid item xs={6}>
                    <label htmlFor="">Images </label>
                    <input accept="image/*" name='images' multiple type="file" {...register('images')} />

                </Grid>
                <Grid item xs={6}>
                    <Button type='submit' variant="contained" >Add</Button>
                </Grid>
            </Grid>
        </form>
    </>)
}

export default Add