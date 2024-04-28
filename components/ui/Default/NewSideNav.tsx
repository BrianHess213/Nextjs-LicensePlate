
import { Suspense } from "react";
import 'dotenv/config'
import UserProfile from '../../User/user-profile';

export default async function sideNav() {

   const BaseURL = process.env.BASE_URL;


   return (
      <main className="print:hidden flex min-h-screen flex-col p-6">

         <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-slate-950 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto ">
               <ul className="space-y-2 font-medium ">
                  <li>
                     <a href={`${BaseURL}/dashboard/lp-without-db`} className="flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>

                        <span className="flex-1 ms-3 whitespace-nowrap">License Plate</span>
                     </a>
                  </li>
                  <li>
                     <a href={`${BaseURL}/dashboard/lp-with-db`} className="flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>

                        <span className="flex-1 ms-3 whitespace-nowrap">DB License Plate</span>
                     </a>
                  </li>
                  <div>

                     <Suspense fallback="Loading User Info...">
                        <UserProfile />
                     </Suspense>

                  </div>
               </ul>
            </div>
         </aside>
      </main>

   )
}