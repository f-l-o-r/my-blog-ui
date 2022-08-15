import React from 'react';
import { useParams } from 'react-router-dom';

const ActiclePage = () => {
    let { name } = useParams();
    return (
        <>
            <h1>This is an {name}  article</h1>
        </>
    )
}

export default ActiclePage;