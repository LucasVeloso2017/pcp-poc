import Etapas from '../etapas/etapas';
import styles from './comoFunciona.module.css';
import Button from '@/components/Button';

const etapas = [
  {
    icone: '/icon/Profile.png',
    titulo: 'Cadastrar e Habilitar',
    descricao:
      'Empresas se credenciam na plataforma seguindo os critérios exigidos pela legislação vigente.Fornecedores cadastram seus produtos.',
  },
  {
    icone: '/icon/Document.png',
    titulo: 'Selecionar e Contratar',
    descricao:
      'Órgãos selecionam itens por meio de jornadas transparentes Fornecedores confirmam disponibilidade e prazos. Pedidos são emitidos e pagamentos autorizados.',
  },
  {
    icone: '/icon/Eye.png',
    titulo: 'Entregar e Receber',
    descricao:
      'Entrega concluída e aprovada pelo comprador. Após conferência, o valor é creditado ao fornecedor. Todo o processo permanece disponível para consulta pública, assegurando transparência e controle social.',
  },
];

function ComoFunciona() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Como Funciona</h1>
      <p className={styles.subTitle}>
        Um processo transparente e eficiente que garante a melhor aplicação dos
        recursos públicos
      </p>
      <Etapas usaBackground={true} etapas={etapas} usaIndex={true} />
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>Quer participar dos processos?</h1>
        <p className={styles.subTitle} style={{ marginTop: '1rem' }}>
          Saiba como vender para os entes públicos e participar do novo conceito
          de Compras Públicas
        </p>
        <div className={styles.buttonsContainer}>
          <Button className={styles.suppliersCredential} label='Ver Fornecedores Credenciados' variant={''}></Button>
          <Button className={styles.suppliers} label='Quero ser um Fornecedor' variant={''}></Button>
        </div>
      </div>
    </div>
  );
}

export default ComoFunciona;
