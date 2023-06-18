import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { HomePage } from './component/HomePage/HomePage';
import HashPage from './component/HashPage/HashPage';
import BlockPage from './component/BlockPage/BlockPage';
import BlockchainPage from './component/BlockchainPage/BlockchainPage';
import DistributedPage from './component/DistributedPage/DistributedPage';
import TokensPage from './component/TokensPage/TokensPage';
import CoinbasePage from './component/CoinbasePage/CoinbasePage';


function Layout() {
    return (
        <Routes path="/" element={<App />}>
            <Route path='/' element={ <HomePage/>} />
            <Route path='/hash' element={ <HashPage/>} />
            <Route path='/block' element={ <BlockPage/>} />
            <Route path='/blockchain' element={ <BlockchainPage/>} />
            <Route path='/distributed' element={ <DistributedPage/>} />
            <Route path='/tokens' element={ <TokensPage/>} />
            <Route path='/coinbase' element={ <CoinbasePage/>} />
        </Routes>
    );
}

export default Layout;