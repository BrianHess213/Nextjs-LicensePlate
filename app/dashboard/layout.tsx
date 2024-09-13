import NewHeader from '@/components/ui/Default/NewHeader';
import NewSideNav from '@/components/ui/Default/NewSideNav';
import NewFooter from '@/components/ui/Default/NewFooter';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className=''>
                <div className='md:hidden'>
                    <NewHeader />
                </div>

                <NewSideNav />
                {/* <NewFooter /> */}
            </div>
            <div className="lg:pl-64">{children}</div>
        </div>
    );
}