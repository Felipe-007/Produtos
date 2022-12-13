import styles from './styles.module.scss';

export default function Cart() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>QNT</th>
            <th>PREÇO</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NOME DO PRODUTO ENTRA AQUI</td>
            <td>1</td>
            <td>0,75</td>
            <td>2,75</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>QNT</th>
            <th>PREÇO</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NOME DO PRODUTO ENTRA AQUI</td>
            <td>1</td>
            <td>0,75</td>
            <td>2,75</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}