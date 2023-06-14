import { useContext } from "react"
import { AuthContext } from "../Provider/Authprovider"
import { useQuery } from "@tanstack/react-query"

const useAdmin = () =>{
    const {user, loading} = useContext(AuthContext)
    
    const {refetch, isLoading: isAdminLoading, data: isAdmin = {}} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user?.email &&!loading,
        queryFn: async () =>{
            if(user?.email){
                const res = await fetch(`https://sportopia-server.vercel.app/users/admin/${user?.email}`)
            return res.json()
            }
        },
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin;