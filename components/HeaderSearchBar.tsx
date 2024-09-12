'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import axios from 'axios';
import SearchPage from '@/app/SearchPage/page';



export default function HeaderSearchBarPage({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [openModal, setOpenModal] = useState(true);
    const emailInputRef = useRef<HTMLInputElement>(null);

    const handleSearch = useDebouncedCallback((term) => {
        console.log(`Searching... ${term}`);
        console.log('Current URL:', window.location.href); // Log the full URL


        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('search', term);

            axios.post('http://localhost:3000/api/search', {
                Search: term
              })
              .then((response) => {
              
              }, (error) => {
                console.log(error);
              });
              
        } else {
            params.delete('search');
        }
        console.log('Updated Params:', params.toString());
        replace(`${pathname}?${params.toString()}`);
    }, 1000);

  

    return (

        <main>

        <div className="relative flex flex-1 flex-shrink-0 text-slate-950">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-80 rounded-l-lg py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('search')?.toString()}
            />
            <button className='rounded-r-lg bg-cyan-600 px-2' onClick={() => setOpenModal(true)}>Search</button>
            <div className="absolute left-3 top-4 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
        
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">How To Stack This Item</h3>
        
            
            <div className='h-80'>

                <h1></h1>

            </div>

          </div>
        </Modal.Body>
      </Modal>
    

        </main>
    );
}