import React from 'react'

function Footer() {
  return (
    <footer className="hidden lg:block container mx-auto px-6 py-6 bg-white dark:bg-gray-900 fixed  inset-x-0  bottom-0 border-t-2 border-red-500">
 

        <div className="flex flex-col items-center justify-between sm:flex-row">
        <a href="#" className="text-3xl  transition-colors duration-300 font-greatvibes text-black hover:text-gray-300">become a Church Buddy</a>

        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				{/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
					Privacy
				</a>
				<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
					GDPR
				</a> */}
			 
					&copy;<i className="fa fa-copyright" aria-hidden="false" >myChurchBuddy</i>
				 
			</div>
        </div>
    {/* </div> */}
    </footer>
  )
}

export default Footer