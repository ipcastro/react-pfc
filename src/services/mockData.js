export const mockPersonagens = [
  {
    id: 1,
    nome: "Amélia",
    descricao: "Uma jovem estudante curiosa e determinada que adora desvendar os mistérios da física. Com sua inteligência e perseverança, ela transforma conceitos complexos em aventuras emocionantes.",
    imagem: "/amelia.png",
    conceitos: ["Cinemática", "Movimento", "Velocidade"]
  },
  {
    id: 2,
    nome: "Isaac Newton",
    descricao: "O famoso físico que, de forma divertida e amigável, guia Amélia através das leis da física. Com sua sabedoria e experiência, ele torna o aprendizado uma jornada fascinante.",
    imagem: "/newton.png",
    conceitos: ["Leis do Movimento", "Gravidade", "Força"]
  }
];

export const mockConteudo = [
  {
    id: 1,
    titulo: "Movimento Retilíneo Uniforme",
    conteudo: `
      <h2>O que é MRU?</h2>
      <p>O Movimento Retilíneo Uniforme (MRU) é um tipo de movimento onde um corpo se desloca em linha reta com velocidade constante.</p>
      
      <h3>Características do MRU:</h3>
      <ul>
        <li>Trajetória retilínea</li>
        <li>Velocidade constante</li>
        <li>Aceleração nula</li>
      </ul>

      <h3>Fórmula do MRU:</h3>
      <p>S = S₀ + v.t</p>
      <p>Onde:</p>
      <ul>
        <li>S = posição final</li>
        <li>S₀ = posição inicial</li>
        <li>v = velocidade</li>
        <li>t = tempo</li>
      </ul>
    `,
    referencias: [
      "HALLIDAY, D.; RESNICK, R.; WALKER, J. Fundamentos de Física. 10ª ed. Rio de Janeiro: LTC, 2016.",
      "NUSSENZVEIG, H. M. Curso de Física Básica. 5ª ed. São Paulo: Edgard Blücher, 2013."
    ]
  }
]; 