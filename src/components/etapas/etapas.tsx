import styles from './etapas.module.css';
import Image from 'next/image';

interface Props {
  icone: string;
  titulo: string;
  descricao: string;
}

interface Etapa {
  usaIndex: boolean;
  etapas: Props[];
  usaBackground: boolean;
}

function Etapas(props: Etapa) {
  const { usaIndex, etapas, usaBackground } = props;

  const gridClasses = `
    ${styles.etapasGrid}
    ${usaBackground ? styles.withBackgroundLine : ''}
  `;
  return (
    <div className={gridClasses}>
      {etapas.map((etapa, index) => (
        <div
          key={`${etapa.titulo}-${index}`}
          className={styles.card}
          style={{
            backgroundColor: usaBackground ? '#FFFFFF' : 'unset',
            boxShadow: usaBackground
              ? '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)'
              : 'none',
            borderTop: usaBackground ? '1px solid #E5E7EB' : 'none',
          }}
        >
          {usaIndex && usaBackground && (
            <div className={styles.number}>
              <p className={styles.textNumber}>{index + 1}</p>
            </div>
          )}
          <Image
            src={etapa.icone}
            alt='Ícone da etapa'
            width={48}
            height={48}
            className={styles.icon}
          />
          <h1 className={styles.title}>{etapa.titulo}</h1>
          <p className={styles.description}>{etapa.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default Etapas;
