
import UserProfilePic from '@/components/User/user-profilepic';
import UserName from '@/components/User/user-name';
import UserEmail from '@/components/User/user-email';
import UserProfile from '@/components/User/user-shortmenu-profile';
import { Suspense } from "react";
import 'dotenv/config'

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


export default function Header() {

  const BaseURL = process.env.BASE_URL;


  return (


    <Navbar fluid className='sticky top-0 print:hidden bg-slate-950 text-gray-100'>
      <NavbarBrand href="http://localhost:3000/dashboard/ItemSetup">
        <span className="whitespace-nowrap text-xl font-semibold text-white">Durham Brands</span>
      </NavbarBrand>
      <div className="flex md:order-2">
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
            <UserProfile />
          </Suspense>


        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href={`${BaseURL}/dashboard/lp-without-db`} className='text-white'>License Plate</NavbarLink>
          <NavbarLink href={`${BaseURL}/dashboard/lp-with-db`} className='text-white'>DB Licenes Plate</NavbarLink>
          <NavbarLink href={`${BaseURL}/dashboard/itemsearch`} className='text-white'>Item Search</NavbarLink>
          <NavbarLink href={`${BaseURL}/dashboard/itemsetup`} className='text-white'>Item Search</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}