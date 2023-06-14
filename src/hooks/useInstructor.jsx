import { useContext } from "react"
import { AuthContext } from "../Provider/Authprovider"
import { useQuery } from "@tanstack/react-query"

const useInstructor = () =>{
    const {user, loading} = useContext(AuthContext)
    const {refetch, isLoading: isAdminLoading, data: isAdmin = {}} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !!user?.email &&!loading,
        queryFn: async () =>{
            if(user?.email){
                const res = await fetch(`https://sportopia-server.vercel.app/users/instructor/${user?.email}`)
            return res.json()
            }
        },
    })
    return [isAdmin, isAdminLoading]
}

export default useInstructor;