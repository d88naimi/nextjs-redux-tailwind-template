import React from 'react'
import {
    useAppDispatch,
    useAppSelector,
} from '../app/hooks';

import { selectDrawer, toggleSideDrawer } from '../app/slices/ui-slice'
import { FaAngleRight, FaBan, } from 'react-icons/fa';
import Drawer from './Drawer';


const sideDrawerState = () => {
    const dispatch = useAppDispatch();
    const open = useAppSelector(selectDrawer);


    return (
        <>
            <div className='h-screen bg-slate-500  '>
                <div className='flex h-screen  items-center flex-col p-2' >
                    <button onClick={() => dispatch(toggleSideDrawer())} className="inline-block px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring" >
                        Open Drawer
                    </button>
                    <FaBan className='mb-16' />
                    <p className='rotate-90 mt-8' >Reservation Overview</p>
                    <FaAngleRight className='mt-auto' />
                </div >
            </div >
            <Drawer open={open} />
        </>
    )
}


export default sideDrawerState;