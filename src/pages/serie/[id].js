import dynamic from 'next/dynamic';
import Header from '../../components/Header';

const SerieDetail = dynamic(() => import('../../pages/SerieDetail'), {
    loading: () => <div>Carregando...</div>
});

export default function SerieDetailPage() {
    return (
        <>
            <Header />
            <SerieDetail />
        </>
    );
} 