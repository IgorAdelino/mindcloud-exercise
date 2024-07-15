/* eslint-disable react/prop-types */
import { TfiAlignJustify } from "react-icons/tfi";
import { BsExclamationCircle } from "react-icons/bs";


const Step = ({ stepNumber, name, isActive, onClick, list, icon }) => {
  return (
    
    <div onClick={onClick} className='flex w-full'>
    
      <div className={`flex text-lg ml-10 text-gray-800 font-semibold items-center w-1/2 justify-between p-4 mb-2 border-2 ${isActive ? 'border-blue-600' : 'border-gray-300'} rounded cursor-pointer relative`}>
      <div>
        <div className="flex items-center gap-2.5">
          {icon}
          <span className='text-gray-400 text-sm'>{stepNumber}</span><span className='text-xl'>{name}</span>
        </div>
    
      </div>
      <div>
          {
            list && (
              <div className='flex gap-2'>
                  <TfiAlignJustify className='mt-1' />
                  <p>{list}</p>
              </div>
            )
          }
      </div>
      
      </div>
      {isActive && (
      <div className="ml-6 mt-3">
        <BsExclamationCircle className="text-orange-500 text-3xl" />
      </div>
    )}
    </div>
  );
};

export default Step