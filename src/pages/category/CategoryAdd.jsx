import React from 'react'
import { useForm } from "react-hook-form";
import { baseNetwork } from '../../api/baseNetwork';
import { Button, Grid, Select, TextField, MenuItem, InputLabel } from '@mui/material';


function CategoryAdd() {

    const { register, handleSubmit } = useForm();



    const addNewCategory = (values) => {
        var form_data = new FormData();
        form_data.append("mainImg", values.mainImg[0]);
        form_data.append("name", values.name);
        form_data.append("description", values.description);

        baseNetwork.add('categories', form_data)
            .then(res => {
                alert('Success!!')
            })

    }

    return (<>
        <form onSubmit={handleSubmit(addNewCategory)}>
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
                    <label htmlFor="">Main Image </label>
                    <input accept="image/*" {...register('mainImg')} type="file" />

                </Grid>


                <Grid item xs={6}>
                    <Button type='submit' variant="contained" >Add</Button>
                </Grid>
            </Grid>
        </form>
    </>)
}

export default CategoryAdd