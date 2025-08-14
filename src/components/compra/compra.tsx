import styles from './compra.module.css';
import Image from 'next/image';

interface Props {
  processo: string;
  data: string;
  orgao: string;
  descricao: string;
  valorTotal: string;
  status: string;
}

const compras: Props[] = [
  {
    processo: '00124/2025',
    data: '15/01/2025',
    orgao: 'Ministério da Educação',
    descricao: 'Aquisição de equipamentos de informática para escolas públicas',
    valorTotal: '25.890.169,00',
    status: 'Em andamento',
  },
  {
    processo: '67890/2023',
    data: '02/01/2023',
    orgao: 'Ministério da Educação',
    descricao: 'Aquisição de Material Didático',
    valorTotal: 'R$ 500.000,00',
    status: 'Concluído',
  },
  {
    processo: '54321/2024',
    data: '10/05/2024',
    orgao: 'Ministério da Saúde',
    descricao: 'Compra de Equipamentos Médicos',
    valorTotal: 'R$ 1.200.000,00',
    status: 'Em andamento',
  },
];

function Compra() {
  return (
    <div className={styles.comprasGrid}>
      {compras.map((compra, index) => (
        <div key={index} className={styles.cardCompra}>
          <div className={styles.processo}>
            Processo {compra.processo}{' '}
            <p
              className={styles.status}
              style={{
                backgroundColor:
                  compra.status?.trim().toLowerCase() === 'em andamento'
                    ? '#D1EFF3'
                    : '#DAFFED',
              }}
            >
              {compra?.status}
            </p>
          </div>
          <div className={styles.data}>{compra.data}</div>
          <div className={styles.orgao}>
            Órgão <p>{compra.orgao}</p>
          </div>
          <div className={styles.descricao}>
            Descrição <p>{compra.descricao}</p>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.divisor}></div>
            <div className={styles.valorTotal}>
              <div>
                Valor Total <p>{compra.valorTotal}</p>
              </div>

              <Image
                src='/icon/Redirect.png'
                alt='Redirecionar para o processo'
                width={18}
                height={18}
                className={styles.cellphoneImage}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Compra;
