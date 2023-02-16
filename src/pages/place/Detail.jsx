import { Button, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseNetwork } from '../../api/baseNetwork';

function Detail() {

    let { id } = useParams();

    const [detail, setdetail] = useState({});
    const [loading, setloading] = useState(true);
    const [iframe, setiframe] = useState('');

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
        <Button onClick={() => navigate(-1)}>Go to back</Button>
        {
            loading ? <CircularProgress /> : <>
                <h1>Detail Page</h1>
                <p>Id: {detail._id}</p>
                <p>Name: {detail.name}</p>
                <p>Open Date: {detail.openDate}</p>
                <p>Close Date: {detail.closeDate}</p>
                <p>latitude: {detail.latitude}</p>
                <p>longitude: {detail.longitude}</p>
                <div>
                    <Iframe iframe={iframe} />,
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