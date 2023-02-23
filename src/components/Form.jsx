import React from "react";
import { useEffect } from "react";
import { useState } from 'react'

export default function Form({oldNote}){

        const [note, setNote] = useState({
            title: '',
            content:''
        })

        const handleChange = (e) => {
            let newNote = {
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value
            }
            setNote({...note,...newNote})
           
        }


        const saveNote = async () => {
            let URL = '';
            let params = {}
            if (note._id){
                URL = 'http://localhost:5000/api/notes/'+ note._id;
                params = {
                    method: 'PATCH',
                    body: JSON.stringify(note),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            }
            else {
                URL = 'http://localhost:5000/api/notes/';
                params = {
                    method: 'POST',
                    body: JSON.stringify(note),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                }

            }
            await fetch (URL, params)
        }

        const onSubmit = (e)=> {
            e.preventDefault();
            saveNote();
            setNote({
                'title':'',
                content:''
            }            )
        }
        useEffect(()=> {
           setNote({...note,...oldNote})
           console.log(note)
        },[oldNote])
        
    return (

        <div className ="card">
            <div className="card-header">
                Agregar nota
            </div>
        <div className="card-body">
            <form action="" onSubmit= {onSubmit}>
                    <div className="form-group">
                        <input name='title'value = {note.title} onChange ={handleChange} type="text" placeholder="titluo" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <textarea name='content'value = {note.content}onChange ={handleChange} type="text"  className="form-control"/>
                    </div>
                    {note._id
                    ?   <button type="submit" className="btn btn-outline-success btn-sm btn-block">Update</button>
                    : <button type="submit" className="btn btn-outline-success btn-sm btn-block">Guardar</button>
                        }

            </form>
            
        </div>

        </div>
    )
                    }