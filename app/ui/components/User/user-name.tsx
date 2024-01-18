import { getSession } from "@auth0/nextjs-auth0";

export default async function UserName() {

    const session = await getSession();

    return (
        <>
            {!!session?.user && (
                <span>{session.user.name}</span>
            )}
        </>
    )

}