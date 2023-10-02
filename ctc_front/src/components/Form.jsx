import React, {useEffect, useState} from 'react';
import { SendRequest } from '../hook/SendRequest';
import InputComponent from '../hook/InputComponent';
import { Link } from 'react-router-dom';

export const Form = (params) => {
    const [title, setTitle] = useState('Barrer');
    const [description, setDescription] = useState('Se limpio el rio grijalva');
    const [author, setAuthor] = useState('Roberto');
    const [state, setState] = useState('Oaxaca');
    const [date, setDate] = useState('');
    let method = 'POST';
    let url = 'create-task';

const save = async (e) =>
{
  e.preventDefault();
  const today = new Date(date);
  setDate( today.toISOString().slice(0, 10))
  let formTask = {title,description,author,date,state};
  const resp = await SendRequest('POST',formTask,url);
   console.log(resp);
}

  return (
    <div className='container-fluid '>
        <div className='row mt-5'>
            <div className='col-md-4 offset-md-4'>
                <div className='card border border-dark'>
                    <div className='card-header bg-primary border border-primary text-light'>
                      {params.title}
                    </div>
                    <div className='card-body'>
                      <form onSubmit={save}>
                      <InputComponent type='text' icon='fa fa-file-text' placeholder='Titulo' name='title' classNme='form-control'
                       required='requiered' value={title} handleChange = {(e)=>setTitle(e.target.value)}/>
                      <InputComponent type='text' icon='fa fa-thumb-tack' placeholder='Descripcion de la tarea' name='description' classNme='form-control'
                       required='requiered' value={description} handleChange = {(e)=>setDescription(e.target.value)}/>
                      <InputComponent type='text' icon='fa fa-user' placeholder='Autor' name='author' classNme='form-control'
                       required='requiered' value={author} handleChange = {(e)=>setAuthor(e.target.value)}/>
                      <InputComponent type='text' icon='fa fa-map-marker' placeholder='Estado de la republica' name='state' classNme='form-control'
                       required='requiered' value={state} handleChange = {(e)=>setState(e.target.value)}/>
                      <InputComponent type='date' icon='fa fa-calendar' placeholder='Titulo' name='title' classNme='form-control'
                       required='requiered' value={date} handleChange = {(e)=>setDate(e.target.value)}/>
                       <div className='d-grid col-10 mx-auto'>
                         <button className='btn btn-outline-dark'>
                          <i className='fa-solid fa-save'></i>
                         </button>
                       </div>
                      </form>
                    </div>
                </div>
                <div className='mt-3'>
                <Link to='/' className='btn btn-outline-primary'>
                    <i className='fa-solid fa fa-arrow-left'></i> Volver
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
