import React from 'react'
import { useForm } from "react-hook-form";
import { baseNetwork } from '../../api/baseNetwork';
import { Button, Grid, InputLabel, TextField } from '@mui/material';


function Add() {

    const { register, handleSubmit } = useForm();


    const addNewPlace = (values) => {

        console.log('Values ', values);
        // baseNetwork.add('places', values)
        //     .then(res => {
        //         console.log('Res ', res);
        //         alert('Success!!')
        //     })

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