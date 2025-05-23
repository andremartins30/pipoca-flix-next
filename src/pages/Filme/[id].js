import React from 'react'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { toast } from 'react-toastify'
// import SimilarMovies from '../../components/SimilarMovies'
import AdsterraPopUnder from '../../components/AdsterraPopUnder'
import AdsterraBanner from '../../components/AdsterraBanner'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
//import './filme.css'

const Filme = () => {
    const router = useRouter();
    const { id } = router.query;
    const [filme, setFilmes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [elenco, setElenco] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;

        async function loadFilme() {
            try {
                setLoading(true);
                setError(null);
                const response = await api.get(`/movie/${id}`, {
                    params: {
                        api_key: "45987c192cb22153a3fd72a71eee5003",
                        language: "pt-BR",
                    },
                });
                setFilmes(response.data);
            } catch (error) {
                console.error("Erro ao carregar filme:", error);
                setError("Não foi possível carregar os detalhes do filme");
                router.push("/");
            } finally {
                setLoading(false);
            }
        }

        async function loadElenco() {
            try {
                const response = await api.get(`/movie/${id}/credits`, {
                    params: {
                        api_key: "45987c192cb22153a3fd72a71eee5003",
                        language: "pt-BR",
                    },
                });
                setElenco(response.data.cast.slice(0, 8));
            } catch (error) {
                console.error("Erro ao carregar elenco:", error);
            }
        }

        loadFilme();
        loadElenco();
    }, [id, router.isReady, router]);

    function salvarFilme() {
        if (!filme) return;

        const minhaLista = localStorage.getItem("@pipocaflix")
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

        if (hasFilme) {
            toast.warn("Este filme já está na sua lista!")
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@pipocaflix", JSON.stringify(filmesSalvos))
        toast.success("Filme salvo com sucesso!")
    }

    if (loading) {
        return (
            <>
                <Header />
                <div className='filme-info'>
                    <h1>Carregando Detalhes...</h1>
                </div>
            </>
        )
    }

    if (error || !filme) {
        return (
            <>
                <Header />
                <div className='filme-info'>
                    <h1>Erro ao carregar filme</h1>
                    <p>{error || "Filme não encontrado"}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <Header />
            <div className='filme-info'>
                <AdsterraPopUnder />
                <h1>{filme.title}</h1>
                {filme.backdrop_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                        alt={filme.title}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/placeholder-image.jpg';
                        }}
                    />
                )}

                <h3>Sinopse</h3>
                <span>{filme.overview || "Sinopse não disponível"}</span>
                <strong>Gênero: {filme.genres?.map((genre) => genre.name).join(', ') || "Não especificado"}</strong>

                <div className="avaliacao">
                    <strong>Avaliação:</strong>
                    <div className="rating-badge">
                        <span>{filme.vote_average?.toFixed(1) || "N/A"}</span>
                        <small>/10</small>
                    </div>
                </div>

                <div className='area-buttons'>
                    <button onClick={salvarFilme}>Salvar</button>
                    <button>
                        <a
                            target="_blank"
                            rel="external noreferrer"
                            href={`https://youtube.com/results?search_query=${encodeURIComponent(filme.title)} Trailer`}
                        >
                            Trailer
                        </a>
                    </button>
                </div>

                <div className='elenco'>
                    <h3>Elenco:</h3>
                    <div className='elenco-grid'>
                        {elenco.map((ator) => (
                            <div key={ator.id} className='ator-card'>
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${ator.profile_path}`}
                                    alt={ator.name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/placeholder-actor.jpg';
                                    }}
                                />
                                <strong>{ator.name}</strong>
                                <span>{ator.character}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div className='sugestoes'>
                    <div className='sugestoes-grid'>
                        <SimilarMovies movieId={filme.id} />
                    </div>
                </div> */}

                <AdsterraBanner />
            </div>
        </>
    )
}

export default Filme