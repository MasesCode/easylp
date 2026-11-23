import type { DocumentoLegal } from "@/lib/centro-legal/tipos";

export const DOCUMENTO_12: DocumentoLegal = {
  "numero": "12",
  "slug": "avaliacoes-e-reputacao",
  "titulo": "Política de avaliações, reputação e conteúdo do usuário",
  "resumo": "Define quem pode avaliar, quando, o que a avaliação pode e não pode conter, como a Easy Faxina modera e remove conteúdo, como a parte avaliada pode contestar, e como a reputação influencia a exibição do perfil.",
  "aplicaSe": "Clientes e Profissionais",
  "versao": "1.0",
  "secoes": [
    {
      "numero": "1",
      "titulo": "Quem pode avaliar",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Somente pode avaliar quem participou de Atendimento efetivamente realizado e registrado na Plataforma."
          ],
          "clausula": "1.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A avaliação pode ser registrada em até ",
            {
              "campo": "PRAZO PARA AVALIAR",
              "sugestao": "14 dias"
            },
            " contados do check-out. Decorrido o prazo, a avaliação não é mais admitida."
          ],
          "clausula": "1.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A avaliação é composta de nota e, opcionalmente, de comentário, e pode incluir critérios específicos informados na Plataforma, como pontualidade, qualidade, cuidado e comunicação."
          ],
          "clausula": "1.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A avaliação é facultativa e sua ausência não gera penalidade."
          ],
          "clausula": "1.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode adotar divulgação simultânea, de modo que as avaliações recíprocas de um mesmo Atendimento sejam publicadas ao mesmo tempo ou ao fim do prazo da cláusula 1.2, para reduzir o risco de retaliação."
          ],
          "clausula": "1.5"
        }
      ]
    },
    {
      "numero": "2",
      "titulo": "Conteúdo da avaliação",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A avaliação deve referir-se exclusivamente ao Atendimento e ser verdadeira, objetiva e redigida em linguagem respeitosa."
          ],
          "clausula": "2.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "É proibido"
            },
            " na avaliação e em qualquer conteúdo publicado pelo Usuário:"
          ],
          "clausula": "2.2"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "ofensa, insulto, xingamento, ameaça, calúnia, difamação e injúria;"
            ],
            [
              "conteúdo discriminatório, de conotação sexual, obsceno, violento ou que incite crime ou ódio;"
            ],
            [
              "dado pessoal de terceiro, inclusive nome completo, endereço, telefone, e-mail, CPF, placa de veículo e imagem;"
            ],
            [
              "dado de contato próprio, link, oferta de serviço, propaganda ou convite para negociação fora da Plataforma;"
            ],
            [
              "menção a fato estranho ao Atendimento, inclusive à vida privada, à aparência, à religião, à orientação sexual, à condição de saúde, à origem ou à situação financeira da outra parte;"
            ],
            [
              "afirmação sabidamente falsa ou acusação de crime sem o correspondente registro de ocorrência;"
            ],
            [
              "conteúdo publicado com o propósito de chantagem, de retaliação ou de obtenção de vantagem indevida."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Usuário é integralmente e exclusivamente responsável pelo conteúdo que publica, respondendo civil e criminalmente por ele."
          ],
          "clausula": "2.3"
        }
      ]
    },
    {
      "numero": "3",
      "titulo": "Moderação e remoção",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina ",
            {
              "negrito": "não verifica previamente"
            },
            " nem valida o conteúdo das avaliações e não endossa as opiniões nelas manifestadas."
          ],
          "clausula": "3.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode, a seu critério e sem aviso prévio, remover ou ocultar avaliação e qualquer conteúdo que: viole a cláusula 2.2; não guarde relação com o Atendimento; não possua valor informativo; decorra de erro evidente de destinatário; ou resulte de manipulação, de troca combinada de notas ou de uso de contas múltiplas."
          ],
          "clausula": "3.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode corrigir erro gráfico evidente e abreviar comentário excessivamente longo, ",
            {
              "negrito": "sem alterar o sentido"
            },
            " da manifestação, para padronizar a apresentação."
          ],
          "clausula": "3.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A nota não é alterada pela moderação do comentário, salvo nas hipóteses de remoção integral da avaliação."
          ],
          "clausula": "3.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A manipulação de avaliações, a oferta de vantagem em troca de nota e a coação para obtenção ou remoção de avaliação sujeitam o infrator às medidas do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "3.5"
        }
      ]
    },
    {
      "numero": "4",
      "titulo": "Contestação pela parte avaliada",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A parte avaliada pode contestar a avaliação no prazo de ",
            {
              "campo": "PRAZO DE CONTESTAÇÃO DE AVALIAÇÃO",
              "sugestao": "7 dias"
            },
            " da publicação, indicando o fundamento."
          ],
          "clausula": "4.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina analisa a contestação em até ",
            {
              "campo": "PRAZO DE ANÁLISE",
              "sugestao": "5 dias úteis"
            },
            " e pode manter, ocultar ou remover a avaliação."
          ],
          "clausula": "4.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A parte avaliada pode publicar ",
            {
              "negrito": "uma única resposta pública"
            },
            " à avaliação, sujeita às mesmas regras da cláusula 2.2."
          ],
          "clausula": "4.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Avaliação registrada em Atendimento cuja ocorrência tenha sido decidida em favor da parte avaliada, nos termos dos ",
            {
              "documento": "08",
              "texto": "Documentos nº 08"
            },
            " e ",
            {
              "documento": "09",
              "texto": "nº 09"
            },
            ", pode ser removida de ofício."
          ],
          "clausula": "4.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não é admitida a remoção de avaliação desfavorável pelo simples fato de ser desfavorável."
          ],
          "clausula": "4.5"
        }
      ]
    },
    {
      "numero": "5",
      "titulo": "Reputação e exibição do perfil",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A avaliação média, o número de Atendimentos concluídos, o tempo de permanência na Plataforma e os índices de pontualidade, de cancelamento e de ausência compõem a reputação do Usuário."
          ],
          "clausula": "5.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A reputação pode influenciar a ordenação e a exibição do perfil do Profissional nos resultados de busca e nas recomendações, conforme critérios objetivos informados na Plataforma."
          ],
          "clausula": "5.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O histórico de avaliações do Profissional é exibido publicamente de forma agregada e, quando houver comentário, com a identificação apenas do primeiro nome do Cliente."
          ],
          "clausula": "5.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Avaliação média persistentemente abaixo do patamar informado na Plataforma, após alerta e prazo para recuperação, sujeita o Profissional às medidas do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "5.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A exclusão de avaliações individuais não altera retroativamente indicadores já consolidados, salvo erro apurado."
          ],
          "clausula": "5.5"
        }
      ]
    },
    {
      "numero": "6",
      "titulo": "Licença de uso do conteúdo",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Ao publicar avaliação, comentário, foto ou qualquer conteúdo na Plataforma, o Usuário mantém a titularidade de seus direitos e concede à Easy Faxina ",
            {
              "negrito": "licença gratuita, mundial, não exclusiva e pelo prazo de conservação do conteúdo"
            },
            " para reproduzir, armazenar, exibir, adaptar o formato e distribuir esse conteúdo na Plataforma e em seus canais oficiais, exclusivamente para apresentação do serviço."
          ],
          "clausula": "6.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O uso do conteúdo em campanha publicitária, peça promocional ou material de divulgação externa depende de ",
            {
              "negrito": "autorização específica e por escrito"
            },
            " do Usuário, nos termos do ",
            {
              "documento": "15",
              "texto": "Documento nº 15"
            },
            "."
          ],
          "clausula": "6.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Removido o conteúdo pelo Usuário ou pela moderação, a Easy Faxina cessa seu uso em prazo comercialmente razoável, ressalvada a conservação de cópia para cumprimento de obrigação legal e para defesa em processo."
          ],
          "clausula": "6.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode recusar a publicação de qualquer conteúdo, a seu critério, e não garante a sua preservação indefinida, recomendando ao Usuário que mantenha cópia do que considerar relevante."
          ],
          "clausula": "6.4"
        }
      ]
    },
    {
      "numero": "7",
      "titulo": "Disposições finais",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Aplicam-se a este documento as disposições gerais, a limitação de responsabilidade, a lei aplicável e o foro previstos no ",
            {
              "documento": "01",
              "texto": "Documento nº 01"
            },
            "."
          ],
          "clausula": "7.1"
        }
      ]
    }
  ]
};
