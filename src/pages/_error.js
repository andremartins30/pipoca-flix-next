import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Error({ statusCode }) {
    const router = useRouter()

    useEffect(() => {
        if (statusCode === 404) {
            router.push('/')
        }
    }, [statusCode, router])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1>Ops! Algo deu errado</h1>
            <p>
                {statusCode
                    ? `Um erro ${statusCode} ocorreu no servidor`
                    : 'Um erro ocorreu no cliente'}
            </p>
            <button
                onClick={() => router.push('/')}
                style={{
                    padding: '10px 20px',
                    marginTop: '20px',
                    cursor: 'pointer',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                }}
            >
                Voltar para a página inicial
            </button>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error 