import React, { useEffect, useState } from 'react';
import { Add } from './Add';
import { SendRequest } from '../hook/SendRequest'
import { Loading } from '../hook/Loading';
import { Link } from 'react-router-dom';
import { CardTask } from './CardTask';
import InputComponent from '../hook/InputComponent';


export const Task = () => {
    const [tasks, setTask] = useState([]);
    const [search, setSearch] = useState([]);
    const [classLoad, setClassLoad] = useState(true);
    // const [cardTask, setCardTask] = useState('');

    useEffect(() => {
        getTasks();
    }, [])
    const getTasks = async () => {
        const resp = await SendRequest('GET', {}, 'task');
        setTask(resp.data)
        setClassLoad(false);

    }
    const searchTask = async (event) =>
    {
        event.preventDefault();
        setClassLoad(true);
            const resp = await SendRequest('POST', {search:search?search:''}, 'task-search','none');
            if(resp.status)
            {
                setTask(resp.data); 
                setClassLoad(false)
            }
                 
   
    }
    return (
        <>
            <Add>
                <Link to='/create' className='btn btn-outline-primary'>
                    <i className='fa-solid fa-circle-plus'></i> Nueva tarea
                </Link>

            </Add> 
            <div className="py-6">
                  
                    <div className="container container-fluid">
                    <form className="d-flex mt-3" onSubmit={searchTask}>
                        <InputComponent type='text' icon='fa fa-search' placeholder='Buscar' name='title' classNme='form-control'
                            required='' value={search} handleChange={(e) => setSearch(e.target.value)} />
                    </form>
                        
            {classLoad ? <Loading /> :

               <div className="row ">
                            {tasks.map(task =>
                                <CardTask key={task.id} {...task} />
                            )}
                       </div>
            } 
                       
                    </div>
                </div>
        </>
    )
}
