import Button from '@/components/Button';
import styles from './page.module.css';
import Image from 'next/image';

function InfoLeft() {
  return (
    <>
      <div className={styles.boxTitles}>
        <div className={styles.boxMainTitle}>
          <h1 className={styles.mainTitle}>
            Marketplace - Onde Governo e Mercado fecham negócios rápidos com
            transparência.
          </h1>
        </div>
        <div>
          <p className={styles.middleTitle}>
            Fazendo simples, conectamos tecnologia, transparência e impacto
            social para que gestores públicos, fornecedores e sociedade avancem
            juntos.
          </p>
        </div>
        <div className={styles.informationBox}>
          <div className={styles.informationCard}>
            <Image
              src='/icon/CheckCircle.png'
              alt='Círculo de Verificação'
              width={16}
              height={16}
              className={styles.checkCircle}
            ></Image>
            Certificações: ISO 9001 | ISO 27001 | 27701 | ISO2000-1
          </div>
          <div className={styles.informationCard}>
            {' '}
            <Image
              src='/icon/CheckCircle.png'
              alt='Círculo de Verificação'
              width={16}
              height={16}
              className={styles.checkCircle}
            ></Image>
            Integrado ao PNCP
          </div>
          <div className={styles.informationCard}>
            {' '}
            <Image
              src='/icon/CheckCircle.png'
              alt='Círculo de Verificação'
              width={16}
              height={16}
              className={styles.checkCircle}
            ></Image>
            Segurança Blockchain
          </div>
          <div className={styles.informationCard}>
            {' '}
            <Image
              src='/icon/CheckCircle.png'
              alt='Círculo de Verificação'
              width={16}
              height={16}
              className={styles.checkCircle}
            ></Image>
            Suporte especializado
          </div>
        </div>
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.filterCard}>
          <div className={styles.filterItem}>
            <div className={styles.filterInput}>
              Item:
              <input placeholder='Termo ou palavra-passe'></input>
            </div>
          </div>
          <div className={styles.filterItem}>
            <div className={styles.filterInput}>
              Número da Compra: <input placeholder='Número do processo'></input>
            </div>
          </div>
          <div className={styles.filterItem}>
            <div className={styles.filterInput}>
              Comprador: <input placeholder='Nome do comprador'></input>
            </div>
          </div>
          <div className={styles.filterItem}>
            <div className={styles.locationWrapper}>
              <div
                className={`${styles.selectContainer} ${styles.withDivider}`}
              >
                <select className={styles.selectElement} defaultValue=''>
                  <option value='' disabled>
                    UF
                  </option>
                  <option value='SP'>SP</option>
                  <option value='RJ'>RJ</option>
                  <option value='MG'>MG</option>
                </select>
                <div className={styles.selectArrow}></div>
              </div>

              <div className={styles.selectContainer}>
                <select className={styles.selectElement} defaultValue=''>
                  <option value='' disabled>
                    Município
                  </option>
                  <option value='sao_paulo'>São Paulo</option>
                  <option value='rio_de_janeiro'>Rio de Janeiro</option>
                </select>
                <div className={styles.selectArrow}></div>
              </div>
            </div>
          </div>
          <div className={styles.filterButton}>
            <button
              type='button'
              className={styles.button}
              aria-label='Pesquisar'
            >
              <Image
                src='/icon/Pesquisar.png'
                alt='Ícone de Pesquisa'
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          className='w-[160px] sm:w-[210px]'
          label='Quero vender'
          variant='yellow'
        />{' '}
        <Button
          className='w-[160px] sm:w-[210px]'
          label='Quero comprar'
          variant='blue'
        />
      </div>
    </>
  );
}

export default InfoLeft;
