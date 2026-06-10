import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Quiz from './components/Quiz'
import Galeria from './components/Galeria'
import Carta from './components/Carta'
import Razoes from './components/Razoes'
import PlaylistSpotify from './components/PlaylistSpotify'
import { 
  TIMELINE, 
  QUIZ_QUESTIONS, 
  LOVE_LETTER, 
  REASONS, PHOTOS, SPOTIFY_PLAYLIST_ID 
} from '../config.js'

export default function App() {
  return (
    <main>
      <Hero />

      <section id="quiz">
        <Quiz perguntas={QUIZ_QUESTIONS} />
      </section>

      <section id="timeline">
        <Timeline marcos={TIMELINE} />
      </section>

      <section id="galeria">
        <Galeria fotos={PHOTOS} />
      </section>

      <section id="playlist">
        <PlaylistSpotify playlistId={SPOTIFY_PLAYLIST_ID} />
      </section>

      <section id="razoes">
        <Razoes lista={REASONS} />
      </section>

      <section id="carta">
        <Carta texto={LOVE_LETTER} />
      </section>
    </main>
  )
}