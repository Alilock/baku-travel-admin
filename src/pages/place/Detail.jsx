import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseNetwork } from '../../api/baseNetwork';

function Detail() {

    let { id } = useParams();

    const [detail, setdetail] = useState({});

    useEffect(() => {

        baseNetwork.getById('/places', id)
            .then(data => {
                setdetail(data);
            })

    }, [])



    return (
        <div>Place Detail : {id}</div>
    )
}

export default Detail