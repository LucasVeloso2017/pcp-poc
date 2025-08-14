import styles from './pergunta.module.css';
import Image from 'next/image';

interface Props {
  pergunta: string;
}

function Pergunta(props: Props) {
  const { pergunta } = props;

  return (
    <div className={styles.cardQuestion}>
      <div className={styles.question}>{pergunta}</div>
      <Image
          src='/icon/Plus.png'
          alt='Aplicativo em um celular'
          width={32}
          height={32}
          className={styles.plus}
        />
    </div>
  );
}

export default Pergunta;
