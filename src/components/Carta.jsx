export default function Carta({ texto }) {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', background: '#ffe5ec' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
        <h2>Minha Declaração 💌</h2>
        <p style={{ whiteSpace: 'pre-line', textAlign: 'left', color: '#333', lineHeight: '1.6' }}>
          {texto}
        </p>
      </div>
    </div>
  )
}