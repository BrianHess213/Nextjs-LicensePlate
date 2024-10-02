import { getSession } from "@auth0/nextjs-auth0";
import CreateItemPage from "@/components/CreateItem";
import DeleteItemPage from "@/components/DeleteItem";
import { Alert, Button } from "flowbite-react";


export default async function ItemSetupPage() {

    const session = await getSession();

    const validEmails = ["ryanjohnston@durhambrands.com", "tylernelson@durhambrands.com", "brianhess@durhambrands.com"];

    return (
        <main className="flex justify-center pt-10">



            {validEmails.includes(session?.user?.email) ? (
                <div>
                    <div className="mt-20">
                        <h1 className="flex justify-center text-2xl py-5">Create Item</h1>
                        <CreateItemPage />
                    </div>

                    <div className="">
                        <h1 className="flex justify-center text-2xl py-5">Delete Item</h1>
                        <DeleteItemPage />
                    </div>
                </div>
            ) : (
                <div className="flex justify-center h-screen items-center">

                    <Alert className="p-5" color="failure">
                        <div className="pb-5">
                            <span className="text-lg">Email didnt match authorized users click button below to return</span>
                        </div>
        
                        <Button pill href="/dashboard/lp-with-db" className="">Return</Button>
                    </Alert>


                </div>
            )}

        </main>
    )

}