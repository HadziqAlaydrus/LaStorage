import React from 'react'
import { useParams } from 'react-router-dom'
import UpdateStorage from '../components/UpdateStorage'

const UpdatePage = () => {
  const {id} = useParams() 
  return (
    <section className='max-w-screen p-20'>
        <UpdateStorage id={id}/>
    </section>
  )
}

export default UpdatePage