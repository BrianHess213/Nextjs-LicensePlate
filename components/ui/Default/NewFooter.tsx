import 'dotenv/config'

export default function Footer() {
  const BaseURL = process.env.BASE_URL;

    return (


        <nav className="print:hidden fixed bottom-0 z-50 w-full bg-slate-950 text-gray-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">

        <span className="p-3 block text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2023 <a href={`${BaseURL}/dashboard`} className="hover:underline">Durham Brands</a>. All Rights Reserved.</span>
      </nav>


    )
}


