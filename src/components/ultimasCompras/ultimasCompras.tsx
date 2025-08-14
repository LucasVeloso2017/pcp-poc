import Compra from '../compra/compra';
import styles from './ultimasCompras.module.css';

function UltimasCompras() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Últimas Compras realizadas</h1>
      <p className={styles.subTitle}>
        Os maiores processos de compras em execução ou recém-finalizados, com
        total transparência para a sociedade
      </p>
      <Compra/>
    </div>
  );
}

export default UltimasCompras;
