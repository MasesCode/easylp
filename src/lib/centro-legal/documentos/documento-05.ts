import type { DocumentoLegal } from "@/lib/centro-legal/tipos";

export const DOCUMENTO_05: DocumentoLegal = {
  "numero": "05",
  "slug": "cookies",
  "titulo": "Política de cookies e tecnologias de rastreamento",
  "resumo": "Explica o que são cookies e tecnologias similares, quais categorias a Easy Faxina utiliza, para que servem, quanto tempo permanecem no dispositivo e como o titular pode consentir, recusar ou revogar seu uso.",
  "aplicaSe": "todos os que acessam o site e os aplicativos da Easy Faxina",
  "versao": "1.0",
  "secoes": [
    {
      "numero": "1",
      "titulo": "O que são cookies",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Cookies são pequenos arquivos de texto gravados no navegador ou no dispositivo do usuário quando ele acessa um site ou um aplicativo, que permitem reconhecer o dispositivo, lembrar preferências e medir o uso."
          ],
          "clausula": "1.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Esta Política abrange, além dos cookies, tecnologias de efeito equivalente, como armazenamento local do navegador, pixels e etiquetas de rastreamento, identificadores de dispositivo e de publicidade e kits de desenvolvimento integrados aos aplicativos."
          ],
          "clausula": "1.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Esta Política integra a Política de Privacidade (",
            {
              "documento": "04",
              "texto": "Documento nº 04"
            },
            "), que descreve as bases legais, os prazos de conservação e os direitos do titular."
          ],
          "clausula": "1.3"
        }
      ]
    },
    {
      "numero": "2",
      "titulo": "Categorias utilizadas",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Estritamente necessários."
            },
            " Viabilizam o funcionamento básico da Plataforma: manutenção da sessão autenticada, segurança do acesso, prevenção a fraude, balanceamento de carga, memória do carrinho de Agendamento e registro das preferências de consentimento. Não dependem de consentimento, pois sem eles a Plataforma não funciona."
          ],
          "clausula": "2.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "De preferência."
            },
            " Guardam escolhas do usuário, como idioma, região, endereço utilizado com frequência e exibição de avisos já visualizados."
          ],
          "clausula": "2.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "De desempenho e análise."
            },
            " Medem audiência, telas visitadas, origem do acesso, tempo de permanência, cliques, erros e abandono de fluxos, permitindo corrigir falhas e aprimorar a Plataforma. Podem ser próprios ou de terceiros contratados para essa finalidade."
          ],
          "clausula": "2.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "De publicidade e de redes sociais."
            },
            " Permitem mensurar campanhas, atribuir conversões, limitar a repetição de anúncios e construir audiências para exibição de anúncios em plataformas de terceiros."
          ],
          "clausula": "2.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os cookies das categorias 2.2 a 2.4 ",
            {
              "negrito": "somente são instalados após o consentimento"
            },
            " manifestado no aviso de cookies, exceto quando, para a categoria de preferência, a escolha for indispensável ao atendimento de pedido expresso do próprio usuário."
          ],
          "clausula": "2.5"
        }
      ]
    },
    {
      "numero": "3",
      "titulo": "Duração",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Cookies de sessão"
            },
            " são eliminados ao fechar o navegador ou encerrar a sessão."
          ],
          "clausula": "3.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Cookies persistentes"
            },
            " permanecem no dispositivo pelo prazo definido em cada cookie, que não excede ",
            {
              "campo": "PRAZO MÁXIMO DOS COOKIES PERSISTENTES",
              "sugestao": "12 meses"
            },
            ", renovável a cada novo consentimento."
          ],
          "clausula": "3.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A relação detalhada dos cookies utilizados, com nome, finalidade, titularidade e prazo, está disponível no painel de preferências de cookies em ",
            {
              "campo": "DOMÍNIO OFICIAL"
            },
            "/cookies."
          ],
          "clausula": "3.3"
        }
      ]
    },
    {
      "numero": "4",
      "titulo": "Consentimento e revogação",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "No primeiro acesso é exibido aviso que permite aceitar todos os cookies, recusar os não essenciais ou escolher por categoria, com igual destaque para as opções de aceitar e de recusar."
          ],
          "clausula": "4.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A escolha pode ser alterada a qualquer momento pelo painel de preferências de cookies, sem prejuízo à navegação, ressalvadas as funcionalidades que dependam de cookies não essenciais."
          ],
          "clausula": "4.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A revogação do consentimento não afeta a licitude do tratamento realizado antes dela."
          ],
          "clausula": "4.3"
        }
      ]
    },
    {
      "numero": "5",
      "titulo": "Gerenciamento pelo navegador e pelo dispositivo",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O usuário pode bloquear, restringir ou excluir cookies diretamente nas configurações de seu navegador, bem como redefinir ou limitar o identificador de publicidade nas configurações do sistema operacional de seu dispositivo móvel."
          ],
          "clausula": "5.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O bloqueio de cookies estritamente necessários pode impedir o funcionamento adequado da Plataforma, inclusive o acesso à Conta e a realização de Agendamentos, hipótese em que a Easy Faxina não garante a disponibilidade das funcionalidades afetadas."
          ],
          "clausula": "5.2"
        }
      ]
    },
    {
      "numero": "6",
      "titulo": "Visitantes e anonimização",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os dados de navegação de quem acessa a Plataforma sem Conta são tratados, sempre que tecnicamente possível, de forma anonimizada, ressalvada a guarda dos registros de acesso exigida pelo Marco Civil da Internet."
          ],
          "clausula": "6.1"
        }
      ]
    },
    {
      "numero": "7",
      "titulo": "Compartilhamento com terceiros",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os cookies de análise e de publicidade implicam o compartilhamento de dados de navegação com os respectivos provedores, que atuam como operadores ou como controladores próprios, conforme o caso, segundo suas próprias políticas de privacidade, cujos links constam do painel de preferências de cookies."
          ],
          "clausula": "7.1"
        }
      ]
    },
    {
      "numero": "8",
      "titulo": "Alterações",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Esta Política pode ser atualizada sempre que houver mudança nas tecnologias utilizadas ou na legislação aplicável, com publicação da versão vigente em ",
            {
              "campo": "DOMÍNIO OFICIAL"
            },
            "/centro-legal e indicação da data de atualização."
          ],
          "clausula": "8.1"
        }
      ]
    }
  ]
};
