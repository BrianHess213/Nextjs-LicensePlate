'use client'

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Label, TextInput, Button } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import { MdOutlinePersonOutline } from "react-icons/md";
import { toast } from 'react-hot-toast';

// Item_Name: body.item,
// Description: body.description,
// Case_Pack_QTY: body.casePackQTY,
// Case_GTIN: body.caseGTIN,
// End_Of_Life: body.endOfLife,


export default function CreateItemPage() {

    const [Item, setItem] = useState(''); // React state for the name input
    const [Description, setDescription] = useState(''); // React state for the email input
    const [CasePackQTY, setCasePackQTY] = useState('');
    const [CaseGTIN, setCaseGTIN] = useState('');
    const [EndOfLife, setEndOfLife] = useState('');



    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const { data } = await axios.post('http://localhost:3000/api/additem', {
                item: 9001,
                description: "",
                casePackQTY: 1,
                caseGTIN: 1,
                endOfLife: false

            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );

            // Show a success toast if the post request was successful
            toast.success('Record Created');



        } catch (error) {
            console.error('Error submitting form:', error);

            // Extract error message
            //const message = error.response?.data?.message || 'Unknown error occurred';

            // Show an error toast if the request fails
            toast.error('Error: Reach out to support');
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center'>

                <div className='w-full'>

                    <Label htmlFor="text" value="Enter Item" />
                    <TextInput id="Item" type="text" icon={MdOutlinePersonOutline} placeholder="Enter Item" value={Item} onChange={(e) => setItem(e.target.value)} required />

                    <Label htmlFor="text" value="Enter Description" />
                    <TextInput id="Description" type="text" icon={HiMail} placeholder="Enter Description" value={Description} onChange={(e) => setDescription(e.target.value)}/>

                    <Label htmlFor="text" value="Enter Case Pack Qty" />
                    <TextInput id="CasePackQTY" type="text" icon={HiMail} placeholder="Enter Case Pack Qty" value={CasePackQTY} onChange={(e) => setCasePackQTY(e.target.value)}/>

                    <Label htmlFor="text" value="Enter Case GTIN" />
                    <TextInput id="CaseGTIN" type="text" icon={HiMail} placeholder="Enter Case GTIN" value={CaseGTIN} onChange={(e) => setCaseGTIN(e.target.value)} />

                    <Label htmlFor="text" value="Enter End Of Life" />
                    <TextInput id="EndOfLife" type="text" icon={HiMail} placeholder="Enter End Of Life" value={EndOfLife} onChange={(e) => setEndOfLife(e.target.value)} />



                    <div className='flex justify-center py-5'>
                        <Button className='block text-gray-100' type="submit">Create Item</Button>
                    </div>

                </div>

            </div>
        </form>
    );
}