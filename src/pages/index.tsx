import type { NextPage } from 'next'

import SideDrawer from '../components/SideDrawer'

const Home: NextPage = () => {
  return (
    <div className='flex'>
      <SideDrawer />
      <div className='text-2xl '>Homepage</div>
    </div>
  )
}

export default Home
