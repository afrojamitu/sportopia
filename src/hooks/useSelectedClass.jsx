import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';

const useSelectedClass = () =>{
    const {user} = useContext(AuthContext)

    const { refetch, data: selectedClass = []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () =>{
            const response = await fetch(`http://localhost:5000/carts?email=${user.email}`)
            return response.json()
        },
      })
      return [refetch, selectedClass]
}

export default useSelectedClass;