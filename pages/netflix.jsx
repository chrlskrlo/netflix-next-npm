import React from 'react'

import Row from '@/components/netflix/Row'
import Main from '@/components/netflix/Main'



import requests from '@/Requests'




const NetflixPage = () => {
    return (
        <>
      <main>
       <Main />
       <Row rowID='1' title='Now Playing' fetchURL={requests.requestHorror} />
       <Row rowID='2' title='UpComing' fetchURL={requests.requestUpcoming} />
       <Row rowID='3' title='Popular' fetchURL={requests.requestPopular} />
       <Row rowID='4' title='Trending' fetchURL={requests.requestTrending} />
       <Row rowID='5' title='Top Rated' fetchURL={requests.requestTopRated} />
      </main>
    </>
    )
}

export default NetflixPage