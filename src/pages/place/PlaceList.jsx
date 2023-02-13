import React, { useEffect, useState } from 'react'
import { baseNetwork } from '../../api/baseNetwork';


function PlaceList() {

  const [places, setplaces] = useState([]);

  useEffect(() => {
    loadPlaces();
  }, [])

  const deletePlace = (id) => {

    baseNetwork.remove('/places', id)
      .then(res => {
        loadPlaces();
      })

  }


  const loadPlaces = () => {
    baseNetwork.getAll('/places')
      .then(res => {
        setplaces(res);
      })
  }

  return (<>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Open Date</th>
          <th>End Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          places && places.map(item => {
            return <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.openDate}</td>
              <td>{item.closeDate}</td>
              <td><button onClick={() => deletePlace(item._id)}>Delete</button></td>

            </tr>
          })
        }
      </tbody>

    </table>
  </>
  )
}

export default PlaceList