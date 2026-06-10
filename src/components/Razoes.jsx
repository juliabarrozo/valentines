export default function Razoes({ lista }) {
  return (
    <div style={{ padding: '40px 20px', background: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Alguns dos milhares motivos para te amar</h2>
      <ul style={{ maxWidth: '500px', margin: '0 auto', lineHeight: '2' }}>
        {lista.map((razao, index) => (
          <li key={index} style={{ listStyleType: 'none', marginBottom: '10px' }}>
            💖 {razao}
          </li>
        ))}
      </ul>
    </div>
  )
}