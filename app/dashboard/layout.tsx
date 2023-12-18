import NewHeader from '@/app/ui/default/NewHeader';
import NewSideNav from '@/app/ui/default/NewSideNav';
import NewFooter from '@/app/ui/default/NewFooter';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <NewHeader />
                <NewSideNav />
                <NewFooter />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}