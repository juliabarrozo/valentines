import { useState } from 'react'

export default function Quiz({ perguntas }) {
  const [perguntaAtual, setPerguntaAtual] = useState(0)
  const [pontuacao, setPontuacao] = useState(0)
  const [mostrarResultado, setMostrarResultado] = useState(false)

  const responder = (isCorrect) => {
    if (isCorrect) setPontuacao(pontuacao + 1)

    const proxima = perguntaAtual + 1
    if (proxima < perguntas.length) {
      setPerguntaAtual(proxima)
    } else {
      setMostrarResultado(true)
    }
  }

  const reiniciar = () => {
    setPerguntaAtual(0)
    setPontuacao(0)
    setMostrarResultado(false)
  }

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', background: '#fff5f5' }}>
      <h2>Jogo do Amor: O quanto você nos conhece?</h2>
      
      {mostrarResultado ? (
        <div>
          <h3>Você acertou {pontuacao} de {perguntas.length} perguntas!</h3>
          <p>{pontuacao === perguntas.length ? "Você me conhece perfeitamente! Te amo ❤️" : "Quase perfeito! Que tal tentar de novo? 🥰"}</p>
          <button onClick={reiniciar} style={{ marginBottom:'15px', borderRadius: '12px', border: 'none', padding: '10px 20px', cursor: 'pointer', backgroundColor:'#c0607a', color:'white' }}>Jogar de novo</button>
        </div>
      ) : (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <p>Pergunta {perguntaAtual + 1} de {perguntas.length}</p>
          <h3>{perguntas[perguntaAtual].question}</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            {perguntas[perguntaAtual].options.map((opcao, index) => (
              <button 
                key={index} 
                onClick={() => responder(opcao.correct)}
                style={{ padding: '12px', cursor: 'pointer', borderRadius: '8px', border: '1px solid #ddd' }}
              >
                {opcao.text}
              </button>
            ))}
          </div>
          <small style={{ display: 'block', marginTop: '15px', color: '#666' }}>
            {perguntas[perguntaAtual].fun}
          </small>
        </div>
      )}
    </div>
  )
}