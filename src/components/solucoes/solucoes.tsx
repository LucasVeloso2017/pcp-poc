import Etapas from '../etapas/etapas';
import styles from './solucoes.module.css';

const etapas = [
  {
    icone: '/icon/verify.png',
    titulo: 'Catálogo Vivo',
    descricao:
      'Preços dinâmicos com históricos de alterações realizadas de forma inteligênte. Atualizações controladas com trilha de auditoria',
  },
  {
    icone: '/icon/checklist.png',
    titulo: 'Classificação Automática',
    descricao:
      'Sistema processa menor preço com desempate de forma automática, gerando contratos conforme lei e de forma inteligênte.',
  },
  {
    icone: '/icon/cart.png',
    titulo: 'Experiência E-commerce',
    descricao:
      'Carrinho de compras, preços com o melhor valor em tempo real e UX inspirada no varejo digital.',
  },
];

function Solucoes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nossas Soluções</h1>
      <p className={styles.subTitle}>
        Plataforma completa para todas as necessidades de compras públicas
      </p>
      <Etapas usaBackground={false} etapas={etapas} usaIndex={false} />
      <div className={styles.containerCards}>
        <div className={styles.card}>
          <h1>+10 mil</h1>Produtos Cadastrados
          <p>E em crescimento constante com base CATMAT</p>
        </div>
        <div className={styles.card}>
          <h1>30-40x</h1>Redução de Tempo
          <p>mais rápido que licitação tradicional</p>
        </div>
        <div className={styles.card}>
          <h1>3 dias</h1>Comprar e Receber
          <p>vs. 90-120 dias no modelo tradicional</p>
        </div>
        <div className={styles.card}>
          <h1>Nacional</h1>Cobertura
          <p>Orgãos públicos, Estatais, Sistema S entre outros</p>
        </div>
      </div>
    </div>
  );
}

export default Solucoes;
