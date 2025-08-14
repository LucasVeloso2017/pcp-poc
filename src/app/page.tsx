import Image from 'next/image';
import styles from './page.module.css';
import InfoLeft from './infoLeft';
import PerguntasFrequentes from '@/components/perguntasFrequentes/perguntasFrequentes';
import UltimasCompras from '@/components/ultimasCompras/ultimasCompras';
import ComoFunciona from '@/components/comoFunciona/comoFunciona';
import Solucoes from '@/components/solucoes/solucoes';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <InfoLeft />
      </div>

      <div className={styles.rightColumn}>
        <Image
          src='/img/portalSigla.png'
          alt='Sigla do Portal de Compras Públicas'
          width={922}
          height={813}
          className={styles.backgroundImage}
        />

        <Image
          src='/img/Celular.png'
          alt='Aplicativo em um celular'
          width={461}
          height={714}
          className={styles.cellphoneImage}
        />
      </div>
      <Solucoes />
      <ComoFunciona />
      <UltimasCompras />
      <PerguntasFrequentes />
    </div>
  );
}
