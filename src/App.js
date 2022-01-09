import React from 'react'
import './App.css';
import Header from './components/Header'
import Images from './components/Images';
import Search from './components/Search';
import Nft from './components/Nft';
import Nft1 from './components/Nft1';
import Nft2 from './components/Nft2';
import Nft3 from './components/Nft3';
import Nft4 from './components/Nft4';
import Nft5 from './components/Nft5';
import Footer from './components/Footer';
import Content from './components/Content';






function App() {
    return (
        <div className='bodie'>  
            <Header/>
            <br/>
            <Images />
            <br/>
            <Content />
            <Search />
            <br/>
            <br/>
            <Nft />
            <Nft1 />
            <Nft2 />
            <Nft3 />
            <Nft4 />
            <Nft5 />
            <Footer />
            <br/>
        </div>
    )
}

export default App
