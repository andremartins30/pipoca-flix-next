import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Link from 'next/link';
import api from '../../services/api';
import Skeleton from '../../components/Skeleton';
//import './search.css';
import dynamic from 'next/dynamic';
import Header from '../../components/Header';

const Search = dynamic(() => import('../../pages/Search'), {
    loading: () => <div>Carregando...</div>
});

const SearchPage = () => {
    return (
        <>
            <Header />
            <Search />
        </>
    );
};

export default SearchPage;