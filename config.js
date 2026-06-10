// =====================================================
//  ♡  EDITE AQUI — todo o conteúdo do site está neste arquivo
// =====================================================

// ---------- HERO ----------
export const HERO = {
  tag: "12 de junho · Dia dos Namorados",
  title: "Para o amor\nda minha vida",        // \n quebra a linha
  subtitle: "Uma história que começou de um jeito especial — e nunca mais parou.",
  yourName: "Júlia",                           // seu nome para a assinatura
  hisName: "Amor",                             // como você chama ele
  startDate: "2024-03-16",                     // ← data que começaram a namorar (AAAA-MM-DD)
}

// ---------- FOTOS (coloque os arquivos em /public/fotos/) ----------
// ex: { src: "/fotos/foto1.jpg", caption: "Nossa primeira viagem" }
// Enquanto não tiver fotos, deixe os placeholders abaixo
export const PHOTOS = [
  { src: '/fotos/beijo-ludmila.jpeg', caption: "Eu caso com esse homem e vou parar lá em Maldivas!" },
  { src: '/fotos/beijo-djavan.jpeg', caption: "Todas as horas que o tempo tem a me oferecer são tuas até eu morrer." },
  { src: '/fotos/flores-espelho.jpeg', caption: "Flor e beija-flor" },
  { src: '/fotos/metade-gui.jpeg', caption: "Mêsversário inesquecível!" },
]

// ---------- LINHA DO TEMPO ----------
export const TIMELINE = [
  {
    emoji: "✨",
    date: "O começo",                         // ← coloque a data real
    title: "O dia que tudo começou",
    desc: "Nos conhecemos no restaurante chinês por nossa amiga em comum Gaby",
  },
  {
    emoji: "💌",
    date: "Logo depois",
    title: "Quando eu percebi que te amava",
    desc: "Quando nós começamos a conversar e eu comecei a te conhecer melhor, quanto mais conhecia, mais percebia o quanto era especial.",
  },
  {
    emoji: "💗",
    date: "Quando menos esperava",
    title: "Nosso primeiro beijo",
    desc: "Nesse dia sabia que não poderia terminar o ensino médio sem realizar o meu maior desejo.",
  },
  {
    emoji: "💑",
    date: "Cena de filme",
    title: "O beijo o-f-i-c-i-a-l",
    desc: "Esse momento vai ficar gravado na minha mente para sempre, como uma cena de filme romântico ou a materialização dos meus sonhos.",
  },
  {
    emoji: "💍",
    date: "Data especial",
    title: "O pedido de namoro",
    desc: "Um dia que pensei que seria apenas um date no clube com meu amigo, se tornou o dia em que começamos a namorar.",
  },

]

// ---------- QUIZ ----------
// Coloque até 5 perguntas. Marque correct: true na resposta certa.
export const QUIZ_QUESTIONS = [
  {
    question: "Onde nos conhecemos pela primeira vez?",
    options: [
      { text: "Opção A — MC Donalds 405 sul", correct: false },
      { text: "Opção B — Muralha da China", correct: false },
      { text: "Opção C — Restaurante chinês Long", correct: true },
      { text: "Opção D — Seu juca", correct: false },
    ],
    fun: "O harumaki vegetariano nos uniu...",
  },
  {
    question: "Qual filme assistimos no cinema pela primeira vez?",
    options: [
      { text: "Barbie", correct: false },
      { text: "Batman", correct: true },
      { text: "Chaves", correct: false },
      { text: "Premunição", correct: false },
    ],
    fun: "Foi a melhor noite!",
  },
  {
    question: "O que comemos no dia que nos beijamos pela 'primeira vez'?",
    options: [
      { text: "Pizza", correct: false },
      { text: "Sushi", correct: false },
      { text: "Hamburguer", correct: true },
      { text: "Pastel", correct: false },
    ],
    fun: "Você sabe tudo sobre mim ♡",
  },
  {
    question: "Em que mês comemoramos nosso primeiro aniversário de namoro juntos?",
    options: [
      { text: "Janeiro", correct: false },
      { text: "Fevereiro", correct: false },
      { text: "Março", correct: true },
      { text: "Abril", correct: false },
    ],
    fun: "Cada mesversário é especial.",
  },
  {
    question: "Qual é a nossa música?",
    options: [
      { text: "Oceano - Djavan", correct: false },
      { text: "Velha infância - Tribalhistas", correct: false },
      { text: "Preciso dizer que te amo - Cazuza e Bebel", correct: true },
      { text: "É você - Tribalhistas", correct: false },
    ],
    fun: "Toda vez que ouço me lembro de você.",
  },
]

// ---------- PLAYLIST (opcional) ----------
// Cole o ID do embed do Spotify — ou deixe null para esconder a seção
// Como pegar: abra a playlist > ... > Compartilhar > Incorporar > copie só o ID depois de /playlist/
export const SPOTIFY_PLAYLIST_ID = "7jUKhJmhHvCyN6MUhBpkza?si=8mtS7xdcRPS4_Ef7k3nJ5g&pi=5kNwznU1TOimP&nd=1&dlsi=0f67ebb270a64391"  // ex: "37i9dQZF1DX4sWSpwq3LiO"

// ---------- DECLARAÇÃO DE AMOR ----------
export const LOVE_LETTER = `
Meu amor,

Sua existência é o que existe de mais belo na vida. Estar com você me ensinou tantas coisas durante esses quase três anos, que já não consigo imaginar minha vida sem você nela. Você é tudo o que já sonhei e poderia sonhar, mas melhor. Eu sou muito grata por ter a sorte de um amor saudável, que me inspira a crescer e ser a melhor versão de mim mesma. Espero de todo o meu coração, conseguir te dar cuidado, afeto e companheirismo por toda a nossa vida. Pode ter certeza que vou me esforçar para isso. 

Com todo o meu amor, sempre,
Sua Júlia ♡
`

// ---------- RAZÕES PARA TE AMAR ----------
export const REASONS = [
  "Do jeito que você me olha com amor",
  "Do som da sua risada quando falo besteiras",
  "Da sua inteligência e esforço",
  "Do seu cuidado com quem você aa",
  "De como você me faz querer ser melhor",
  "Do seu sorriso que ilumina tudo",
  "Do seu cheiro quando te abraço",
  "De simplesmente você ser você",
]