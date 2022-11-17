import SideMenu from '../../components/Menu/SideMenu';
import HomePage from './pokemonHome.mdx';
import Article from '../../components/Articles/Article';

export default function Pokemon() {
    return (
        <div className='flex flex-col tablet:flex-row'>
                <SideMenu />
            <div className='tablet:w-4/5'>
                <Article>
                    <HomePage />
                </Article>
            </div>
        </div>
    );
}