import React,{ useState, useRef} from 'react'
import { SendRequest } from '../hook/SendRequest';

export const CardTask = (task) => {
    const elementRef = useRef(null);
    const likeButton = useRef(null);
    const [countLike, setCountLike] = useState(task.like);
    let id = task.id;
    let url = 'update-task';

    const likeTask = async() =>
    {
        setCountLike(countLike +1); 
        let like = task.like +1;
         const resp = await SendRequest('POST',{id,like:like},url);
        if(resp.status)
        {
            likeButton.current.className= 'd-none';
        }
        else{
            useState(task.like);
            likeButton.current.className= 'd-inline';
        }
        // sendLike(countLike) ;

    }
    
    const deleteTask = async() =>
    {
        url='delete-task';
        const resp = await SendRequest('DELETE',{id},url);
        if(resp.status)
        {
            const firstChild = elementRef.current.firstChild.className= 'd-none';
        }
        
    }
    return (
        <div className="col-md-4 mt-3" ref={elementRef}>
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <a  ref={likeButton} href="#" className="btn-primary me-2" onClick={likeTask} disabled><i className='fa fa-thumbs-up '></i></a>
                   { countLike > 0 ? <span className="badge bg-primary ">{countLike}</span>: <a href="#"  onClick={deleteTask}><i className='fas fa-trash text-danger ms-2 '></i></a>}
                </div>
            </div>
        </div>
    )
}
