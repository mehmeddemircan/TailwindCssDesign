import React, { Fragment } from 'react'

const PageHeader1 = () => {
  return (
    <Fragment>
        <header class="bg-gray-50 py-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 xl:flex xl:items-center xl:justify-between">
        <div class="min-w-0 flex-1">
          <nav class="flex" aria-label="Breadcrumb">
            <ol role="list" class="flex items-center space-x-4">
              <li>
                <div>
                  <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-700">Jobs</a>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <svg class="h-5 w-5 flex-shrink-0 text-gray-400" x-description="Heroicon name: mini/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
</svg>
                  <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Engineering</a>
                </div>
              </li>
            </ol>
          </nav>
          <h1 class="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Back End Developer</h1>
          <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-8">
            <div class="mt-2 flex items-center text-sm text-gray-500">
             
              Full-time
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
             
              Remote
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
             
              $120k – $140k
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
             
              Closing on January 9, 2024.
            </div>
          </div>
        </div>
        <div class="mt-5 flex xl:mt-0 xl:ml-4">
          <span class="hidden sm:block">
            <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
              
              Edit
            </button>
          </span>

          <span class="ml-3 hidden sm:block">
            <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
             
              View
            </button>
          </span>

         

     
      
        </div>
      </div>
    </header>

    </Fragment>
  )
}

export default PageHeader1