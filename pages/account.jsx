
import { useRouter } from 'next/router';
import { UserAuth } from '@/context/AuthContext'

const account = () => {
    const router = useRouter();
    const {user} = UserAuth();
  
    if(!user) {
        router.push('/')
        return null
       
}
}

export default account