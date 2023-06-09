import React, { useEffect, useState } from 'react';

const useClass = () => {
    const [classes, setclasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setclasses(data)
            })
    }, [])
    return [classes];
};

export default useClass;