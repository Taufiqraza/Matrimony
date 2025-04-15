import { useEffect, useState } from 'react';
import { Card } from '../index';

const Popup = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Automatically show modal on page load
    setShowModal(true);
  }, []);

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/50">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">

              {/* Close Button */}

              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="absolute right-0.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              {/* Modal Content */}

              <div className="p-4 md:p-5">
                <Card />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 text-center">
                  Don't miss out on most compatible profiles intrested in you
                </h3>
                <div className='flex justify-center gap-5'>
                  <button
                    onClick={() => setShowModal(false)}
                    className="py-2.5 px-5 ml-3 text-sm font-medium text-white focus:outline-none bg-green-800 rounded-lg border border-gray-200 hover:bg-green-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Accept Intrest
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Decline
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
