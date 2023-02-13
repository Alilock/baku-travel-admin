import React from 'react'
import { useForm } from "react-hook-form";
import { baseNetwork } from '../../api/baseNetwork';



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
                <label>Name:</label>
                <input type="text" {...register("name")} required />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" {...register("description")} />
            </div>
            <div>
                <label>Latitude:</label>
                <input type="text" {...register("latitude")} required />
            </div>
            <div>
                <label>Longitude:</label>
                <input type="text" {...register("longitude")} required />
            </div>
            <div>
                <label>Open Date:</label>
                <input type="time" {...register("openDate")} />
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