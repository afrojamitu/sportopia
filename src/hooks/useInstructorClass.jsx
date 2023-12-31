import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';

const useInstructorClass = () =>{
    const {user} = useContext(AuthContext)

    const { refetch, data: InstructorClass = []} = useQuery({
        queryKey: ['addclass', user?.email],
        queryFn: async () =>{
            const response = await fetch(`https://sportopia-server.vercel.app/addclass?email=${user.email}`)
            return response.json()
        },
      })
      return [refetch, InstructorClass]
}

export default useInstructorClass;