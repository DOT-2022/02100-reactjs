
import Home from './routes/home/home.component.routes';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.routes';
import SignIn from './routes/sign-in/sign-in.component.routes';
import Shop from './routes/shop/shop.component';

const categories = [
    {
        id: 1,
        title: "Hat",
        backgroundImage: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
        id: 2,
        title: "Jacket",
        backgroundImage: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
        id: 3,
        title: "Sneakers",
        backgroundImage: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
        id: 4,
        title: "Womens",
        backgroundImage: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
        id: 5,
        title: "Mens",
        backgroundImage: "https://i.ibb.co/R70vBrQ/men.png"
    }
];

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />} >
                <Route index element={<Home categories={categories} />} />
                <Route path='shop' element={<Shop />} />
                <Route path='auth' element={<SignIn />} />
            </Route>
        </Routes>
    );
}

export default App;
