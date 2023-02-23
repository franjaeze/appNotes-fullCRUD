import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ListGroup from '../components/ListGroup'
import Form from '../components/Form'
import Notes from '../components/Notes'

export default function Index(){

        const [notes, setNotes] = useState([])
        const [oldNote, setOldNote] = useState([])
        const getNotes = async() => {
            const response = await fetch ('http://localhost:5000/api/notes')
            const result = await response.json ()
            setNotes(result); 
        }
        useEffect(()=>{
            getNotes();

        }, [notes])

        const deleteNote = async (id) => {
         await fetch ('http://localhost:5000/api/notes/'+ id,{
            method: 'DELETE',
            mode: 'cors'
         })
           
        }  

        const getNote = async(id)=>{
        const note = await fetch ('http://localhost:5000/api/notes/' + id)
        const result = await note.json()
        setOldNote(result)
         }
    return (
    <div className='content-app mb-5'>
        <div className='row'> 
             <div className="col-sm-12 col-md-4">
              <Form oldNote= {oldNote}/>
                </div>
                 <div className="col-sm-12 col-md-4">
                <ListGroup>  
                    {notes.map((note, index)=> (
                    <Notes key ={index} deleteNote={deleteNote} getNote= {getNote}  id = {note._id } title = {note.title} content= {note.content}/>
                    ) )}
                     
                </ListGroup>
                </div>
                <div className="col-sm-12 col-md-4">
                    tag
                </div>
        </div>
    </div>
    )
}