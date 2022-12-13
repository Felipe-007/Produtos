import styles from './styles.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col1}>
          <img src="/logo.svg" alt="" className={styles.img}/>
        </div>

        <div className={styles.col2} ml-auto>
          <p>UTILIZE O LEITOR DE CÓDIGO DE BARRAS</p>
          <p>PARA IDENTIFICAÇÃO DO PRODUTO</p>
          <p>OU SELECIONE ABAIXO:</p>
        </div>
      </div>
    </div>
    
  )
}