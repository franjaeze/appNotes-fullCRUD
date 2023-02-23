import React from "react";

export default function Notes ({title, content, id, deleteNote, getNote}){

    return (
        <li className='list-group-item d-flex justify-content-between align-items-start mb-3'>
        <div className='ms-2 me-auto'>
            <div className='fw-bold'>{title} </div>
            {content}
        </div>
        <div className='d-flex justify-content-between'>
        <button  onClick={(e)=> getNote(id)} className='btn btn-outline-primary btn-sm m-1'>Edit</button>
        <button onClick={(e)=> deleteNote(id)} className='btn btn-outline-danger btn-sm m-1'>Delete </button>
        </div>
        </li>
    
    ) 
}