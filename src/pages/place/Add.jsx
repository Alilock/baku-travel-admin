import React from 'react'
import { useForm } from "react-hook-form";
import { baseNetwork } from '../../api/baseNetwork';
import { InputLabel, TextField } from '@mui/material';


function Add() {

    const { register, handleSubmit } = useForm();


    const addNewPlace = (values) => {


        // baseNetwork.add('places', values)
        //     .then(res => {
        //         console.log('Res ', res);
        //         alert('Success!!')
        //     })

    }

    return (<>
        <form onSubmit={handleSubmit(addNewPlace)}>

            <div>
                <TextField type="text" label="Name"  {...register("name")} required />
            </div>
            <div>
                <TextField type="text" label="Description" {...register("description")} />
            </div>
            <div>
                <TextField type="text" label="Latitude" {...register("latitude")} required />
            </div>
            <div>
                <TextField type="text" label='Longitude' {...register("longitude")} required />
            </div>
            <div>
                <TextField id="time" label="Open Date" type="time" inputProps={300} />
            </div>
            <div>
                <label>Close Date:</label>
                <input type="time" {...register("closeDate")} />
            </div>
            <div>
                <label>Main Image:</label>
                <input type='file' {...register('mainImg')} />
            </div>
            <div>
                <label>Other Images:</label>
                <input type='file' multiple {...register('images')} />
            </div>
            <div>

            </div>
            <button type='submit'>Add</button>
        </form>
    </>)
}

export default Add