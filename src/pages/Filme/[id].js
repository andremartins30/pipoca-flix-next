import dynamic from 'next/dynamic';
import Header from '../../components/Header';

const Filme = dynamic(() => import('../../pages/Filme'), {
    loading: () => <div>Carregando...</div>
});

export default function FilmePage() {
    return (
        <>
            <Header />
            <Filme />
        </>
    );
} 