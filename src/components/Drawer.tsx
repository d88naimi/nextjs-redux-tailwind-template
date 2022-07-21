import React from 'react'
import { FaBan, FaWindowClose } from 'react-icons/fa';
import {
    useAppDispatch,

} from '../app/hooks';
import { toggleSideDrawer } from '../app/slices/ui-slice'
import ToConfirm from './ToConfirm';

const Drawer = ({ open }: { open: boolean }) => {
    const dispatch = useAppDispatch();
    return (
        <div
            className={`${open ? "translate-x-0" : "-translate-x-full"} fixed top-0 bottom-0 -left-0 z-[101] max-h-screen w-full overflow-hidden bg-white  transition  duration-300 ease-in-out mobile:w-[445px]`
            }
        >
            <div className="flex h-screen w-96  flex-col overflow-x-hidden pt-8 bg-gray-100">
                <FaWindowClose onClick={() => dispatch(toggleSideDrawer())} />
                <div className='border-b-2 p-2'>
                    Quick Capacity View

                </div>
                <ToConfirm />
            </div>
        </div >
    )
}

export default Drawer


