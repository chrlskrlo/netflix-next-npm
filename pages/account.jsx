
import { useRouter } from 'next/router';
import { UserAuth } from '@/context/AuthContext'
import { bgImage } from '@/util/constant';
import SavedShows from '@/components/netflix/SavedShows';

const account = () => {
    const router = useRouter();
    const { user } = UserAuth();

    if (!user) {
        router.push('/signup')
        return null

    }


    return (
        <>
            <div className='w-full text-white'>
                <img
                    className='w-full h-[400px] object-cover'
                    src={bgImage}
                    alt="/"
                />
                <div className='bg-black/60 fixed top-0 w-full h-[550px]'></div>
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
                </div>
            </div>
            <SavedShows />
        </>
    )
}
export default account