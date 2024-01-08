import { getSession } from "@auth0/nextjs-auth0";

export default async function UserName() {

    const session = await getSession();

    return (
        <>
            {!!session?.user && (
                <div className="p-3">
                    {session.user.name}
                   
                </div>
            )}
        </>
    )

}