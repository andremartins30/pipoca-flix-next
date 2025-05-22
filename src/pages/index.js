import dynamic from 'next/dynamic';
import Header from '../components/Header';

// Importação dinâmica do componente Home
const Home = dynamic(() => import('../pages/Home'), {
  loading: () => <div>Carregando...</div>
});

export default function Index() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
