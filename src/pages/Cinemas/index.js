import React, { useState, useEffect } from 'react'
import './cinemas.css'
import AdSense from '../../components/AdSense'
import AdsterraBanner from '../../components/AdsterraBanner'
import dynamic from 'next/dynamic'
import Header from '../../components/Header'

const Cinemas = dynamic(() => import('../../pages/Cinemas'), {
    loading: () => <div>Carregando...</div>
})

export default function CinemasPage() {
    return (
        <>
            <Header />
            <Cinemas />
        </>
    )
} 