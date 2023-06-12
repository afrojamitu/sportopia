import { useContext } from "react"
import { AuthContext } from "../Provider/Authprovider"
import { useQuery } from "@tanstack/react-query"

const useAdmin = () =>{
    const {user} = useContext(AuthContext)
    const {refetch, data: role, isLoading: isAdmin = []} = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
            return res.json()
        },
    })
    return [isAdmin]
}

export default useAdmin;