import React, {useState, useEffect} from 'react'; 

const Api = ()=> {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://reqres.in/api/users')
            .then(data => data.json())
            .then(json => setUsers(json.data));
    }, [])

    console.log({users});

return(
    <div>
        <h2 className='mt-3 text-center'>Ejemplo de APi</h2>
    {users.map( user => (

        
        <div className="card" style={{width: "18rem"}}>
        <img src={user.avatar} className="card-img-top" alt="fotoAvatar"></img>
        <div className="card-body">
        <h5 className="card-title">{user.first_name}{user.last_name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button  className="btn btn-primary">CV</button>
        </div>
        </div>
        
        
        
    ))}
    </div>
    )
    }

export default Api;