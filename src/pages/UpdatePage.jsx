import React from 'react'
import { useParams } from 'react-router-dom'
import UpdateStorage from '../components/UpdateStorage'

const UpdatePage = () => {
  const {id} = useParams() 
  return (
    <section>
        <UpdateStorage id={id}/>
    </section>
  )
}

export default UpdatePage