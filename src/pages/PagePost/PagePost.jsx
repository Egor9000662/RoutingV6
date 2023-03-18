import React, { useEffect, useState } from 'react'
import Post from '../../components/Post/Post'
import { useParams } from 'react-router-dom'

export default function PagePost() {
    const [item,setItem] = useState()

const {id} = useParams()
const qwer = useParams()
console.log(qwer);
useEffect(()=>{
    getItem()
},[])

async function getItem(){
    const responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const post = await responce.json()
    setItem(post)
}


if(!item){
    return <h1>Please wait....</h1>
}

  return (
    <div><Post item={item} /></div>
  )
}
