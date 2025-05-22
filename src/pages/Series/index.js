import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Skeleton from '../../components/Skeleton';
import '../../styles/global.css';
import './series.css';
import AdsterraBanner from '../../components/AdsterraBanner';
import AdsterraContainer from '../../components/AdsterraContainer';
import AdsterraTopBanner from '../../components/AdsterraTopBanner';
import dynamic from 'next/dynamic';
import Header from '../../components/Header';

const Series = dynamic(() => import('../../pages/Series'), {
    loading: () => <div>Carregando...</div>
});

export default function SeriesPage() {
    return (
        <>
            <Header />
            <Series />
        </>
    );
}