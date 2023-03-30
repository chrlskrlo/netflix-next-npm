
import { useRouter } from 'next/router';
import { UserAuth } from '@/context/AuthContext'

const ProtectedRoute = ({children}) => {
    const router = useRouter();
    const {user} = UserAuth();
  
    if(!user) {
        router.push('/')
        return null 
}
return children;
}

export default ProtectedRoute