import Button from '../Button';
import Pergunta from '../pergunta/pergunta';
import styles from './perguntasFrequentes.module.css';

const perguntas = [
  'Quem pode vender no Marketplace do Governo?',
  'Como funciona o pagamento ao fornecedor?',
  'As compras são públicas e auditáveis?',
];

function PerguntasFrequentes() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>Perguntas frequentes</div>
        {perguntas.map((item, index) => (
          <Pergunta key={`${item}-${index}`} pergunta={item} />
        ))}
        <Button
          className={styles.button}
          label='Quero me cadastrar agora'
          variant='yellow'
        />{' '}
      </div>
    </div>
  );
}

export default PerguntasFrequentes;
