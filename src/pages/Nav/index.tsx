import styles from './styles.module.scss';

export default function Nav() {
  return (
    <nav className={styles.table}>
      <ul>
        <li>
          <a href="#">
            PROMOÇÕES
          </a>
        </li>
        <li>
          <a href="#">
            IOGURTE
          </a>
        </li>
        <li>
          <a href="#">
            SNACKS
          </a>
        </li>
        <li>
          <a href="#">
            FRIOS
          </a>
        </li>
        <li>
          <a href="#">
            SANDUÍCHES
          </a>
        </li>
        <li>
          <a href="#">
            BEBIDAS REFRIGERADAS
          </a>
        </li>
        <li>
          <a href="#">
            BEBIDAS QUENTES
          </a>
        </li>
      </ul>
    </nav>
  )
}