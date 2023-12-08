import { CartContextProvider } from './store/CartContext.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart.jsx';

function App() {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header />
                <Main />
                <Cart />
            </CartContextProvider>
        </UserProgressContextProvider>
    );
}

export default App;
