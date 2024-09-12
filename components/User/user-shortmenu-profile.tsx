import { getSession } from "@auth0/nextjs-auth0";

export default async function UserShortMenuPage() {

  const session = await getSession();



  return (
    <>
      {!!session?.user && (

        <main className="h-6">
          <div className="text-yellow-500">

          </div>

          <li>
            <a href="/api/auth/logout" className="fixed bottom-12 flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="fixed bottom-0 w-6 h-6 text-slate-950">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
              <div className="fixed bottom-0 pl-9">
                <span className="pr-1 text-gray-900">Sign Out -</span> <span className="text-gray-900">{session.user.name}</span>
              </div>
            </a>
          </li>

        </main>

      )}
    </>
  )

}