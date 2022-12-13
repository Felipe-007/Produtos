import styles from '../../styles/Home.module.scss';
import Header from './Header';
import Nav from './Nav';
import Products from './Products';
import Cart from './Cart';

export default function Home() {
  return (
    <div>
      <Header />

      <Nav />

      <Products />

      <div>
        <p>Suas compras</p>
      </div>

      <Cart />

      <div>
        <div>
          <p>Cancelar</p>
        </div>

        <div>
          <p>Valor toral: </p>
        </div>

        <button>Pagar</button>
      </div>
    </div>
  )
}
