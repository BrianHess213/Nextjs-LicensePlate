'use client'
import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Alert, Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { MdNumbers } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import Toastify from 'toastify-js';
import 'dotenv/config';

const BaseURL = process.env.BASE_URL;

export default function ItemSetupAuthenticationPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // Boolean flag

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/userlogin', {
                Description: email,
                Case_GTIN: password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Assuming the response has a success property
            if (response.data.success) {
                Toastify({
                    text: "Login Successful!",
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "bottom",
                    position: "center",
                    stopOnFocus: true,
                    style: {
                        background: "linear-gradient(to right,#32CD32, #00FF00)",
                        color: "black",
                    }
                }).showToast();

                setIsLoggedIn(true);  // Update state to reflect successful login
            } else {
                // Handle unsuccessful login if the API specifies
                handleUnsuccessfulLogin();
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            handleUnsuccessfulLogin();
        }
    }

    function handleUnsuccessfulLogin() {
        Toastify({
            text: "Login Unsuccessful",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right,#FF474D, #C6373C)",
                color: "black",
            }
        }).showToast();

        setIsLoggedIn(false);  // Set flag for unsuccessful login
    }

    return (
        <main>
            <div className="flex h-screen justify-center items-center">
                <form onSubmit={handleSubmit} className="flex-col w-1/4">
                    <div>
                        <Label htmlFor="email1" value="Email" />
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="example@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="password1" value="Password" />
                        <TextInput
                            id="password1"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-center py-4">
                        <Button className="w-1/3" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
            {isLoggedIn && <p>You're logged in!</p>} {/* Example of using the state */}
        </main>
    );
}