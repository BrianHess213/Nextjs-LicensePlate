'use client'

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Label, TextInput, Button, Checkbox } from 'flowbite-react';
import { MdNumbers } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import Toastify from 'toastify-js'


import 'dotenv/config'
const BaseURL = process.env.BASE_URL;

export default function DeleteItemPage() {

    const [ItemID, setItem] = useState(''); // React state for the name input

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const { data } = await axios.post('http://localhost:3000/api/deleteitem', {
                Item_Name: ItemID

            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );

            // Show a success toast if the post request was successful
            Toastify({
                text: "Record Created!",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right,#32CD32, #00FF00)",
                    color: "black",
                },
                onClick: function () { } // Callback after click
            }).showToast();



        } catch (error) {
            console.error('Error submitting form:', error);

            // Extract error message
            //const message = error.response?.data?.message || 'Unknown error occurred';

            // Show an error toast if the request fails
            Toastify({
                text: "Record Unsuccessful",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right,#FF474D, #C6373C)",
                    color: "black",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center w-full'>

                <div className='flex'>
                    
                        <input id="Item" className='flex w-96 rounded-l-lg bg-gray-100' type="string" placeholder="Enter Record ID" value={ItemID} onChange={(e) => setItem(e.target.value)} />
                  

                    <div>
                        <button className='rounded-r-lg h-11 px-2 text-gray-100 bg-cyan-700' type="submit">Delete</button>
                    </div>
                </div>

            </div>

            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"></link>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
        </form>
    );
}