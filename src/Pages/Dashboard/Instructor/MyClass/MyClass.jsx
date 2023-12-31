import React from 'react';
import { Helmet } from 'react-helmet';
import { FaEdit, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useInstructorClass from '../../../../hooks/useInstructorClass';
import Swal from 'sweetalert2';

const MyClass = () => {
    const [refetch, InstructorClass] = useInstructorClass()

    const handleDelete = (cls) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sportopia-server.vercel.app/addclass/${cls._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        refetch();
                    }
                })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>My Classes - Sportopia Instructor</title>
            </Helmet>
            <div className='mb-5 flex justify-between items-center'>
                <h1 className='text-3xl font-semibold'>My Classes</h1>

                <Link to='/dashboard/addclass' className="px-3 py-1 rounded bg-gray-600 hover:opacity-70 text-lg text-white" style={{ transition: '.5s' }}>Add Class</Link>
            </div>

            <div className="overflow-x-auto rounded-t-xl">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg text-white bg-gray-600'>
                            <th></th>
                            <th>Class</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            InstructorClass.map((cls, index) => <tr key={cls._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask rounded w-12 h-12">
                                                <img src={cls.banner} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cls.className}</td>
                                <td className=''>$ {cls.price}</td>
                                <td className='text-center'>{cls.seats}</td>
                                <th>
                                    <Link to={`/dashboard/classes/${cls._id}`} className="w-10 h-9 flex justify-center items-center rounded bg-gray-600 hover:opacity-70 text-xl text-white" style={{ transition: '.5s' }}><FaEdit/></Link>
                                </th>
                                <th className='text-center'>
                                    <button onClick={() => handleDelete(cls)} className="px-3 py-2 rounded bg-red-700 hover:opacity-70 text-lg text-white" style={{ transition: '.5s' }}><FaTrashAlt /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClass;