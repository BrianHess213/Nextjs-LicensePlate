import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image"

export default async function UserName() {

    const session = await getSession();

    return (
        <>
            {!!session?.user && (
                <div className="">


                    <Image
                        src={session.user.picture}
                        unoptimized
                        width={30}
                        height={30}
                        alt="Profile Pic"
                    />

                </div>
            )}
        </>
    )

}