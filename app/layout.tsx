import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/ui/global.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'License Plate',
  description: 'Pallet license plate management software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
