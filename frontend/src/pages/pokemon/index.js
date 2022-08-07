import SideMenu from '../../components/Menu/SideMenu';
import SwShCompForm from './components/swshCompForm';

export default function Pokemon() {
    return (
        <div className='flex flex-col tablet:flex-row'>
            <div className='tablet:h-screen w-1/5'>
                <SideMenu />
            </div>
            <div className='w-4/5'>
                <SwShCompForm />
            </div>
        </div>
    );
}