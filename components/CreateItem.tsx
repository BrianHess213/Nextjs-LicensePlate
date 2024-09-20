'use client'

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Label, TextInput, Button, Checkbox } from 'flowbite-react';
import { MdNumbers } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import Toastify from 'toastify-js'


import 'dotenv/config'
const BaseURL = process.env.BASE_URL;




export default function CreateItemPage() {

    const [item, setItem] = useState(''); // React state for the name input
    const [description, setDescription] = useState(''); // React state for the email input
    const [casePackQTY, setCasePackQTY] = useState('');
    const [caseGTIN, setCaseGTIN] = useState('');
    const [endOfLife, setEndOfLife] = useState('');




    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {

            let URL = "https://nextjs-license-plate.vercel.app"
            const { data } = await axios.post(`https://nextjs-license-plate.vercel.app/api/additem`, {
                Item_Name: item,
                Description: description,
                Case_Pack_QTY: casePackQTY,
                Case_GTIN: caseGTIN,
                End_Of_Life: endOfLife

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
                onClick: function(){} // Callback after click
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
                onClick: function(){} // Callback after click
              }).showToast();
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center'>

                <div className='w-full'>

                    <Label htmlFor="text" value="Item" />
                    <TextInput id="Item" type="number" icon={MdNumbers} placeholder="Enter Item" value={item} onChange={(e) => setItem(e.target.value)} />

                    <Label htmlFor="text" value="Description" />
                    <TextInput id="Description" type="text" icon={IoDocumentText} placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />

                    <Label htmlFor="text" value="Case Pack Qty" />
                    <TextInput id="CasePackQTY" type="number" icon={MdNumbers} placeholder="Enter Case Pack Qty" value={casePackQTY} onChange={(e) => setCasePackQTY(e.target.value)} />

                    <Label htmlFor="text" value="Case GTIN" />
                    <TextInput id="CaseGTIN" type="number" icon={MdNumbers} placeholder="Enter Case GTIN" value={caseGTIN} onChange={(e) => setCaseGTIN(e.target.value)} />
                    
                    <div className='pt-5'>
                        <Label className='px-2' htmlFor="checkbox" value="Enter End Of Life:" />
                        <Checkbox id="EndOfLife" placeholder="Enter End Of Life" value={endOfLife} />
                    </div>

                    <div className='flex justify-center py-5'>
                        <Button className='block text-gray-100' type="submit">Create Item</Button>
                    </div>

                </div>

            </div>

            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"></link>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
        </form>
    );
}