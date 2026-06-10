import { useState } from 'react';

export default function Galeria({ fotos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Se não houver fotos cadastradas, exibe um estado amigável
  if (!fotos || fotos.length === 0) {
    return (
      <div style={{ padding: '40px 20px', textAlign: 'center', background: '#fff5f5' }}>
        <h2>Nossas Memórias 📸</h2>
        <p style={{ color: '#666' }}>Nenhuma foto adicionada ainda.</p>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fotos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + fotos.length) % fotos.length);
  };

  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', background: '#fff5f5' }}>
      <h2>Nossas Memórias 📸</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>Todo momento com você é único</p>

      {/* Container Principal do Carrossel */}
      <div style={{
        position: 'relative',
        maxWidth: '500px',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(255, 182, 193, 0.4)',
        overflow: 'hidden',
        border: '4px solid #fff'
      }}>
        
        {/* Área da Imagem */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          paddingTop: '125%', /* Proporção 4:5 clássica de fotos verticais */
          overflow: 'hidden',
          backgroundColor: '#ffeef0'
        }}>
          <img 
            src={fotos[currentIndex].src} 
            alt={fotos[currentIndex].caption} 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'all 0.5s ease-in-out'
            }}
          />
        </div>

        {/* Legenda da Foto */}
        <div style={{
          padding: '20px',
          background: '#fff',
          minHeight: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p style={{ 
            color: '#444', 
            fontStyle: 'italic', 
            margin: 0,
            fontSize: '15px',
            lineHeight: '1.4'
          }}>
            {fotos[currentIndex].caption}
          </p>
        </div>

        {/* Botão Esquerdo */}
        <button 
          onClick={prevSlide}
          style={buttonStyle}
          aria-label="Foto anterior"
          onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.9)'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.7)'}
        >
          ❮
        </button>

        {/* Botão Direito */}
        <button 
          onClick={nextSlide}
          style={{ ...buttonStyle, right: '10px', left: 'auto' }}
          aria-label="Próxima foto"
          onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.9)'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.7)'}
        >
          ❯
        </button>
      </div>

      {/* Indicadores (Bolinhas embaixo do carrossel) */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
        {fotos.map((_, index) => (
          <span 
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? '#ff4d6d' : '#ffb3c1',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Estilo base compartilhado dos botões de navegação
const buttonStyle = {
  position: 'absolute',
  top: '45%',
  transform: 'translateY(-50%)',
  left: '10px',
  background: 'rgba(255, 255, 255, 0.7)',
  border: 'none',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  fontSize: '18px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ff4d6d',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  transition: 'background 0.2s',
  userSelect: 'none',
  zIndex: 10
};