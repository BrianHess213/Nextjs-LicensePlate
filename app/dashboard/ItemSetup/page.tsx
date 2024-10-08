
import { getSession } from "@auth0/nextjs-auth0";
import CreateItemPage from "@/components/CreateItem";
import DeleteItemPage from "@/components/DeleteItem";
import ItemSetupAuthenticationPage from "@/components/ItemSetupAuthentication";
import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";


export default function ItemSetupPage() {

    

  

    const validEmails = ["ryanjohnston@durhambrands.com", "tylernelson@durhambrands.com", "brianhess@durhambrands.com"];

    const alwaysTrue = true;
    const thisIsTrue = true;

    let changingEmail = "321";

    let changedEmail = changingEmail;

    //let values = getParameterValues(loginForm);

  





      return (
     
        <ItemSetupAuthenticationPage />

   
      )

    
}