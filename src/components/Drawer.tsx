import React from 'react'
import { FaBan, FaWindowClose } from 'react-icons/fa';

const Drawer = ({ open, setOpen }) => {
    return (
        <div
            className={`${open ? "translate-x-0" : "-translate-x-full"} fixed top-0 bottom-0 -left-0 z-[101] max-h-screen w-full overflow-hidden bg-white  transition  duration-300 ease-in-out mobile:w-[445px]`
            }
        >
            <div className="flex h-screen w-96  flex-col overflow-x-hidden pt-8 bg-gray-100">
                <FaWindowClose onClick={setOpen} />
                <div className='border-b-2 p-2'>
                    Quick Capacity View

                </div>
                <div className='border-b-2 p-2'>
                    <div className='flex justify-between mb-2 '>
                        <p>To Confirm (9) </p>
                        <a href="#">View all </a>
                    </div>
                    <div className='grid gap-4 grid-cols-1 ' >
                        <dl className="flex  justify-between bg-white rounded-lg p-2 ">
                            <div className="flex flex-col">
                                <dt className="text-sm font-medium ">Name</dt>
                                <dd className="text-xs text-gray-600">(760) 123-1234</dd>
                            </div>

                            <div className="flex flex-col ">
                                <dt className="text-sm font-medium text-gray-600">8:00am</dt>
                                <dd className="text-xs text-gray-500 flex gap-1"><FaBan /><FaBan /><FaBan /></dd>
                            </div>
                        </dl>
                        <dl className="flex  justify-between items-center bg-white rounded-lg p-2">
                            <FaBan className='mr-1' />
                            <div className="flex flex-col">
                                <dt className="text-sm font-medium ">Name</dt>
                                <dd className="text-xs text-gray-600">(760) 123-1234</dd>
                            </div>

                            <div className="flex flex-col ">
                                <dt className="text-sm font-medium text-gray-600">8:00am</dt>
                                <dd className="text-xs text-gray-500 flex gap-1"><FaBan /><FaBan /><FaBan /></dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Drawer


