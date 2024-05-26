import { useState, useEffect } from 'react';

export default function Fetch()
{
    const [photos, setPhotos] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) =>{
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setPhotos(data);
        });
    }, []);
    return(
        <>
        <div>
            {photos.map((photo) =>(
                <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
            ))}
        </div>
        </>
    );
};

// export default Fetch;


