import React, { useEffect, useState } from 'react';

const useClass = () => {
    const [classes, setclasses] = useState([])
    useEffect(() => {
        fetch('https://sportopia-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setclasses(data)
            })
    }, [])
    return [classes];
};

export default useClass;