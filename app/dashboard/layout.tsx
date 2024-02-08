import NewHeader from '@/components/ui/Default/NewHeader';
import NewSideNav from '@/components/ui/Default/NewSideNav';
import NewFooter from '@/components/ui/Default/NewFooter';

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