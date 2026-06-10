export default function PlaylistSpotify({ playlistId }) {
  // Caso não tenha ID configurado, o componente não renderiza nada
  if (!playlistId) return null;

  // Remove partes extras caso você tenha colado o link inteiro em vez de apenas o ID
  const cleanId = playlistId.split('?')[0].replace('https://open.spotify.com/playlist/', '');
  
  const spotifyUrl = `https://open.spotify.com/playlist/${cleanId}`;

  return (
    <div style={{ padding: '50px 20px', textAlign: 'center', background: '#121212' }}>
      <h2 style={{ color: '#fff', marginBottom: '10px', fontSize: '28px' }}>Nossa Trilha Sonora 🎵</h2>
      <p style={{ color: '#b3b3b3', marginBottom: '30px' }}>As músicas que embalam a nossa história</p>

      {/* Card que imita o Spotify */}
      <a 
        href={spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '340px',
          margin: '0 auto',
          backgroundColor: '#181818',
          padding: '20px',
          borderRadius: '12px',
          textDecoration: 'none',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.04)';
          e.currentTarget.style.backgroundColor = '#282828';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#181818';
        }}
      >
        {/* Capa da Playlist (Visual de Vinil / Placeholder Romântico) */}
        <div style={{
          width: '200px',
          height: '200px',
          backgroundColor: '#ff4d6d',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
          marginBottom: '20px',
          position: 'relative'
        }}>
          <span style={{ fontSize: '60px' }}>❤️</span>
          <span style={{ 
            color: '#fff', 
            fontWeight: 'bold', 
            fontSize: '14px', 
            letterSpacing: '1px',
            marginTop: '10px'
          }}>JU & GUI</span>
        </div>

        {/* Informações de texto estilo Spotify */}
        <div style={{ width: '100%', textAlign: 'left', marginBottom: '20px' }}>
          <h3 style={{ 
            color: '#fff', 
            margin: '0 0 8px 0', 
            fontSize: '18px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            Nossa Playlist Oficial
          </h3>
          <p style={{ color: '#b3b3b3', margin: 0, fontSize: '14px' }}>
            Playlist por Júlia · Feita com amor
          </p>
        </div>

        {/* Botão Oficial Verde do Spotify */}
        <div style={{
          backgroundColor: '#1DB954',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: '50px',
          fontWeight: 'bold',
          fontSize: '14px',
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#1ed760'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#1DB954'}
        >
          {/* Ícone Simples do Spotify em SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.745-.472-.076-.336.136-.668.473-.744 3.856-.88 7.15-.51 9.82 1.127.294.18.388.565.206.86zm1.226-2.723c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.847-.107-.972-.52-.125-.413.108-.847.52-.972 3.672-1.114 8.243-.57 11.348 1.342.366.226.486.707.258 1.074zm.105-2.82c-3.26-1.936-8.65-2.115-11.764-1.17-.5.152-1.024-.13-1.176-.63-.153-.5.13-1.025.63-1.176 3.593-1.09 9.53-.883 13.284 1.344.45.267.6.845.333 1.296-.267.45-.845.6-1.297.335z"/>
          </svg>
          OUVIR NO SPOTIFY
        </div>
      </a>
    </div>
  );
}