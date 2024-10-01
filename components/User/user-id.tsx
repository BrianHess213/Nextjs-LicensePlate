import { getSession } from "@auth0/nextjs-auth0";

export default async function ItemSetupPage() {

    const session = await getSession();

    return (
        <main className="flex justify-center pt-10">
            {!!session?.user && (
                
                <span> User ID: {session.user.name}</span>
            )}



{session?.user?.email === "ryanjohnston@durhambrands.com" || "brianhess@durhambrands.com" ? (
    <p>One Option</p>
) : (
    <p>Error: Email is not provided or does not match the required email!</p>
)}

        </main>
    )

}