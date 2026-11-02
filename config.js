// =====================================================================
// CONFIGURAÇÃO — o único arquivo que você precisa editar.
// Troque os valores marcados com COLE_... e suba no GitHub.
// =====================================================================
window.CFG = {
  // Supabase → Project Settings → API (ou "Data API")
  supabaseUrl: 'https://vgnbqwijryscbkbkjxnu.supabase.co',          // ex.: https://abcdefgh.supabase.co
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnbmJxd2lqcnlzY2JrYmtqeG51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1NzM1MTIsImV4cCI6MjEwOTE0OTUxMn0.s5q1l6l8YQNC-O-d5IFn5aOD09QEtMfr2VQC54ILUak', // a chave "anon public" (nunca a "service_role")

  // WhatsApp que aparece nos botões (55 + DDD + número, só dígitos)
  whatsapp: '5522999585413',

  // Prazo prometido na página
  prazoLiberacao: '30 minutos',

  // Último dia do plano "Até a prova" (o banco também guarda essa data)
  dataProva: '2026-12-06',

  // Preços mostrados na página (os cobrados ficam no Mercado Pago e na tabela "planos" do banco)
  planos: {
    prova:  { nome: 'Até a prova', preco: 45,  detalhe: 'pagamento único' },
    mensal: { nome: 'Mensal',      preco: 35,  detalhe: 'por mês' },
    anual:  { nome: 'Anual',       preco: 350, detalhe: 'por ano' }
  },

  simulados: {
    eletrica: {
      nome: 'Elétrica',
      titulo: 'Simulado Técnico Eletricista',
      eyebrow: 'Simulado · Nível médio · Elétrica',
      itens: [
        '318 questões de elétrica, Português e Matemática, com explicação',
        'Prova cronometrada no formato do dia',
        'Caderno de erros: refaz as erradas até dominar',
        'Tempo de estudo e acerto por matéria',
        'Progresso salvo no celular e no notebook'
      ]
    },
    seguranca: {
      nome: 'Segurança do Trabalho',
      titulo: 'Simulado Técnico de Segurança do Trabalho',
      eyebrow: 'Simulado · Nível médio · Segurança do Trabalho',
      itens: [
        'Questões de NRs, Português e Matemática, com explicação',
        'Prova cronometrada no formato do dia',
        'Caderno de erros: refaz as erradas até dominar',
        'Tempo de estudo e acerto por matéria',
        'Progresso salvo no celular e no notebook'
      ]
    }
  },

  // Links de pagamento do Mercado Pago (um por plano e simulado)
  links: {
    eletrica:  { prova: 'COLE_O_LINK', mensal: 'COLE_O_LINK', anual: 'COLE_O_LINK' },
    seguranca: { prova: 'COLE_O_LINK', mensal: 'COLE_O_LINK', anual: 'COLE_O_LINK' }
  }
};
