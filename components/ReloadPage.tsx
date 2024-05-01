'use client'

import { useEffect } from "react";
import 'dotenv/config'
import { toast } from 'react-hot-toast';




const BaseURL = process.env.BASE_URL;

const ReloadPages = () => {

    

    toast.error('Error: Wrong GTIN Number Reloading Page!');

    window.location.replace(`/dashboard/lp-with-db`);
    useEffect(() => {
        toast.error('Error: Wrong GTIN Number Reloading Page!');

      window.location.replace(`/dashboard/lp-with-db`);
    }, []);
  };
  
  export default ReloadPages;