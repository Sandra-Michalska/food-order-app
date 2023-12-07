import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { CartContextProvider } from './store/CartContext.jsx';

function App() {
    return (
        <CartContextProvider>
            <>
                <Header />
                <Main />
            </>
        </CartContextProvider>
    )
}

export default App;
