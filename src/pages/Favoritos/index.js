import { useState, useEffect } from "react"
import React from 'react'
import Link from "next/link"
import "./favoritos.css"
import { toast } from "react-toastify"
import AdsterraBanner from "../../components/AdsterraBanner"
import dynamic from 'next/dynamic';
import Header from '../../components/Header';

const Favoritos = dynamic(() => import('../../pages/Favoritos'), {
    loading: () => <div>Carregando...</div>
});

function FavoritosPage() {
    return (
        <>
            <Header />
            <Favoritos />
        </>
    );
}

export default FavoritosPage