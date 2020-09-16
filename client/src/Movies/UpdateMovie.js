import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const initialItems = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: [],
}

const UpdateMovie = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const [item, setItem] = useState(initialItems);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => {
                setItem(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h2> Update Items </h2>
                <form>
                    <input
                    type='text'
                    name='title'
                    value={item.title}
                    onChange={null}
                    placeholder='Movie Title'
                    > 
                    </input>
                </form>
        </div>
)
}

export default UpdateMovie;