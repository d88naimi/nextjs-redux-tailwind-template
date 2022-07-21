import React from 'react'
import { FaBan } from 'react-icons/fa';

const ToConfirm = () => {
    return (
        <div className='border-b-2 p-2'>
            <div className='flex justify-between mb-3 mt-4  '>
                <p className='font-bold'>To Confirm (9) </p>
                <a className='underline' href="#">View all </a>
            </div>
            <div className='grid gap-4 grid-cols-1 ' >
                <dl className="flex  justify-between bg-white rounded-lg p-2 ">
                    <div className="flex flex-col">
                        <dt className="text-sm font-700 ">Name</dt>
                        <dd className="text-xs text-gray-500">(760) 123-1234</dd>
                    </div>

                    <div className="flex flex-col ">
                        <dt className="text-sm font-500">8:00am</dt>
                        <dd className="text-xs  flex gap-1"> <FaBan /><FaBan /><FaBan /> </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default ToConfirm