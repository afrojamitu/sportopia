import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import { Rating } from '@smastrom/react-rating';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useSelectedClass from '../../hooks/useSelectedClass';

const ClassCard = ({item}) => {
    const {banner, className, instructor, students, price, seats, rating, _id} = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useSelectedClass()
    const navigate = useNavigate()

    const handleAddClass = (item) =>{

        const bookClass = {classId: _id, className,price, seats, banner, instructor, email: user.email}
        if(user && user.email){
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookClass)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Selected Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login To Select Classes!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              })
        }
    }
    return (
        <div className={ seats === 0 ? 'bg-red-600 rounded-lg text-white' : 'bg-bage-100'}>
            <div className='flex flex-col items-center rounded-lg border-2 pb-5 hover:scale-105' style={{ transition: '0.5s' }}
                            >
                                <img className='w-full h-48 rounded-t-lg' src={banner} alt="" />
                                <div className='p-3'>
                                    <h1 className="text-2xl text-green-800 font-semibold">{item.class}</h1>
                                    <p className="text-lg">Instructor: {instructor}</p>
                                    <p className="text-lg">Total Students: {students}</p>
                                    <p className="text-lg">Available Seats: {seats}</p>
                                    <p className="text-lg flex gap-3 items-center">
                                        <Rating
                                            style={{ maxWidth: 110 }}
                                            readOnly
                                            orientation="Horizontal"
                                            value={rating}
                                        />
                                        {rating}</p>
                                    {seats === 0 ? <button className="px-3 py-1 mt-5 rounded bg-slate-500 font-semibold text-lg" style={{ transition: '.5s' }} disabled>Select</button> :
                                    
                                    <button onClick={() => handleAddClass(item)} className="px-3 py-1 mt-5 rounded bg-slate-800 hover:opacity-70 font-semibold text-lg text-white" style={{ transition: '.5s' }} 
                                    >Select</button>}
                                </div>
                            </div>
        </div>
    );
};

export default ClassCard;