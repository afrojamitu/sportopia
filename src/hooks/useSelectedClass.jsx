import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';

const useSelectedClass = () =>{
    const { user, loading } = useAuth();

    const { refetch, data: selectedClass = []} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const response = await fetch(`https://sportopia-server.vercel.app/carts?email=${user.email}`)
            return response.json()
        },
      })
      return [refetch, selectedClass]
}

export default useSelectedClass;