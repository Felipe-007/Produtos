import styles from './styles.module.scss';
import { Button } from 'react-bootstrap';


export default function Nav() {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr1}>
          <th>PROMOÇÕES</th>
          <th>IOGURTE</th>
          <th>SNACKS</th>
          <th>FRIOS</th>
          <th>SANDUÍCHE</th>
          <th>BEBIDAS REFRIGERADAS</th>
          <th>BEBIDAS QUENTES</th>
        </tr>
      </thead>
    </table>
  )
}