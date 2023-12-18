
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className=''>
      <section className="p-10 bg-gray-50 dark:bg-gray-800 ">
              <h2 className=" text-2xl font-bold text-gray-900 dark:text-white">
                Sign In
              </h2>
              <form className="mt-8 space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" ></input>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                </div>
                <div className="flex items-start">
                  <a href="http://localhost:3000/dashboard" className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot Password?</a>
                </div>
                <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Not registered yet? <a href="http://localhost:3000/dashboard" className="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
                </div>
              </form>
      </section>
      </div>
    </main>

  )
}