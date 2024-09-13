
import { Suspense } from "react";
import 'dotenv/config'
import UserProfileShortMenu from '../../User/user-shortmenu-profile';
import UserProfile from "@/components/User/user-profile";
import UserProfilePic from '@/components/User/user-shortmenu-profilepic';

import {
   Avatar,
   Dropdown,
   DropdownDivider,
   DropdownHeader,
   DropdownItem,
   Navbar,
   NavbarBrand,
   NavbarCollapse,
   NavbarLink,
   NavbarToggle,
} from "flowbite-react";
import UserName from "@/components/User/user-name";
import UserEmail from "@/components/User/user-email";

export default async function sideNav() {

   const BaseURL = process.env.BASE_URL;


   return (
      <main className="print:hidden">

         <aside id="logo-sidebar" className="fixed left-0 z-40 w-64 min-h-full pt-10 transition-transform -translate-x-full bg-slate-950 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="grid grid-cols-2 gap-3 justify-around">
               <div className="w-48">
                  <h1 className="text-2xl border-b-2 text-white pl-6 pb-3 z-10">Durham Brands</h1>
               </div>

               <div className="flex justify-end pr-1 z-0">
                  <Navbar className="bg-slate-950">
                     <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                           <UserProfilePic />
                        }
                     >
                        <DropdownHeader>
                           <span className="block text-sm"><UserName /></span>
                           <span className="block truncate text-sm font-medium"><UserEmail /></span>
                        </DropdownHeader>

                        {/* <DropdownItem href={`${BaseURL}/dashboard/lp-without-db`}>License Plate</DropdownItem>
                           <DropdownItem href={`${BaseURL}/dashboard/lp-with-db`}>DB Licenes Plate</DropdownItem>
                           <DropdownItem href={`${BaseURL}/dashboard/ItemSetup`}>Item Search</DropdownItem> */}

                        <DropdownDivider />

                        <Suspense fallback="Loading User Info...">
                           <UserProfileShortMenu />
                        </Suspense>


                     </Dropdown>
                     <NavbarToggle />
                  </Navbar>
               </div>


            </div>


            <div className="h-full px-3 pb-4 overflow-y-auto ">
               <ul className="space-y-2 font-medium ">
                  <li>
                     <a href={`${BaseURL}/dashboard/lp-without-db`} className="flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
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
                  <li>
                     <a href={`${BaseURL}/dashboard/ItemSetup`} className="flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>


                        <span className="flex-1 ms-3 whitespace-nowrap">Item Search</span>
                     </a>
                  </li>
                  <div>

                     <Suspense fallback="Loading User Info...">
                        <UserProfile />
                     </Suspense>

                  </div>

               </ul>

            </div>

            <span className="fixed bottom-1 p-3 block text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2023 <a href={`${BaseURL}/dashboard`} className="hover:underline">Durham Brands</a>. All Rights Reserved.</span>


         </aside>
      </main>

   )
}