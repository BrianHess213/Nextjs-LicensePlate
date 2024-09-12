
import UserProfilePic from '@/components/User/user-profilepic';
import UserName from '@/components/User/user-name';
import UserEmail from '@/components/User/user-email';
import UserProfile from '@/components/User/user-shortmenu-profile';
import HeaderSearchBarPage from '@/components/HeaderSearchBar';
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


    <Navbar fluid rounded className='print:hidden bg-slate-950 text-gray-100'>
      <NavbarBrand href="http://localhost:3000/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Durham Brands</span>
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

          <DropdownDivider />
          
            <Suspense fallback="Loading User Info...">
            <UserProfile />
            </Suspense>
        
          
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href={`${BaseURL}/dashboard/lp-without-db`}>License Plate</NavbarLink>
        <NavbarLink href={`${BaseURL}/dashboard/lp-with-db`}>DB Licenes Plate</NavbarLink>
        <NavbarLink href={`${BaseURL}/dashboard/ItemSetup`}>Item Search</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}