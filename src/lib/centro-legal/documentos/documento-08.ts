import type { DocumentoLegal } from "@/lib/centro-legal/tipos";

export const DOCUMENTO_08: DocumentoLegal = {
  "numero": "08",
  "slug": "garantia-de-satisfacao",
  "titulo": "Política de garantia de satisfação e refação do serviço",
  "resumo": "Regula a garantia oferecida pela Easy Faxina quando o serviço não atende ao escopo contratado: prazo para reclamar, provas exigidas, prioridade da refação sobre o reembolso, hipóteses de recusa da garantia e efeitos para o Profissional.",
  "aplicaSe": "Clientes e Profissionais",
  "versao": "1.0",
  "secoes": [
    {
      "numero": "1",
      "titulo": "Objeto",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Garantia de Satisfação é um compromisso assumido pela Easy Faxina, por liberalidade e nos limites deste documento, para que o Cliente cujo Atendimento tenha sido executado de forma incompleta ou em desacordo com o escopo contratado tenha o serviço refeito ou, nas hipóteses aqui previstas, o valor restituído."
          ],
          "clausula": "1.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Garantia ",
            {
              "negrito": "não transfere à Easy Faxina a responsabilidade pela execução do serviço"
            },
            ", que permanece integralmente com o Profissional, nem afasta a garantia legal prevista no Código de Defesa do Consumidor, a ser exercida diretamente perante o Profissional."
          ],
          "clausula": "1.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Garantia ",
            {
              "negrito": "somente se aplica a Atendimentos contratados e pagos integralmente por meio da Plataforma"
            },
            "."
          ],
          "clausula": "1.3"
        }
      ]
    },
    {
      "numero": "2",
      "titulo": "Abrangência",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Garantia abrange:"
          ],
          "clausula": "2.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "ambiente ou tarefa integrante do escopo contratado que não tenha sido executado;"
            ],
            [
              "execução manifestamente deficiente, incompatível com o padrão esperado para a modalidade contratada;"
            ],
            [
              "encerramento do Atendimento pelo Profissional antes do término da duração contratada, sem causa prevista no ",
              {
                "documento": "02",
                "texto": "Documento nº 02"
              },
              ";"
            ],
            [
              "descumprimento de instrução expressa constante do Agendamento, desde que compatível com o escopo."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Garantia ",
            {
              "negrito": "não abrange"
            },
            ":"
          ],
          "clausula": "2.2"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "tarefa não contratada, não informada no Agendamento ou excluída pelo ",
              {
                "documento": "02",
                "texto": "Documento nº 02"
              },
              ";"
            ],
            [
              "resultado inalcançável pelas condições do imóvel, como mancha permanente, incrustação antiga, desgaste natural, deterioração gradativa, corrosão, oxidação, mofo estrutural, infiltração e vício preexistente do bem ou da edificação;"
            ],
            [
              "sujeira ou desordem produzida após o check-out, inclusive por ocupantes, visitantes ou animais;"
            ],
            [
              "insuficiência, inadequação ou ausência de produtos, utensílios, água ou energia elétrica que deveriam ser fornecidos pelo Cliente;"
            ],
            [
              "redução de escopo decorrente de atraso do Cliente em liberar o acesso ou de recusa do ajuste previsto no ",
              {
                "documento": "02",
                "texto": "Documento nº 02"
              },
              ";"
            ],
            [
              "divergência de expectativa quanto a resultado estético não especificado no Agendamento;"
            ],
            [
              "dano a bem, que é tratado pelo ",
              {
                "documento": "09",
                "texto": "Documento nº 09"
              },
              ";"
            ],
            [
              "fato decorrente de dolo, de má-fé ou de negligência do próprio Cliente;"
            ],
            [
              "caso fortuito, força maior ou evento da natureza;"
            ],
            [
              "serviço contratado, negociado ou pago fora da Plataforma."
            ]
          ]
        }
      ]
    },
    {
      "numero": "3",
      "titulo": "Prazo e forma de acionamento",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A reclamação deve ser registrada na Plataforma no prazo de ",
            {
              "campo": "PRAZO DE ACIONAMENTO",
              "sugestao": "24 horas"
            },
            " contado do check-out do Profissional e, em qualquer hipótese, ",
            {
              "negrito": "antes da confirmação do Atendimento"
            },
            " pelo Cliente."
          ],
          "clausula": "3.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O registro deve conter a descrição objetiva do problema, a indicação dos ambientes e das tarefas afetadas e ",
            {
              "negrito": "fotografias ou vídeos"
            },
            " que evidenciem o alegado."
          ],
          "clausula": "3.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Registrada a reclamação no prazo, a liberação da custódia é suspensa até a conclusão da apuração, nos termos do ",
            {
              "documento": "06",
              "texto": "Documento nº 06"
            },
            "."
          ],
          "clausula": "3.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode solicitar informações e documentos complementares, que devem ser apresentados pelo Cliente em até ",
            {
              "campo": "PRAZO PARA COMPLEMENTO",
              "sugestao": "5 dias"
            },
            ", e dará ao Profissional oportunidade de se manifestar em prazo equivalente."
          ],
          "clausula": "3.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não apresentados os complementos solicitados, ou não havendo manifestação do Cliente por ",
            {
              "campo": "PRAZO DE INÉRCIA",
              "sugestao": "30 dias"
            },
            " após o primeiro contato, a solicitação é encerrada por falta de elementos."
          ],
          "clausula": "3.5"
        }
      ]
    },
    {
      "numero": "4",
      "titulo": "Análise e decisão",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina analisa a reclamação com base nas evidências apresentadas, no escopo registrado no Agendamento, nos registros de check-in e check-out, no histórico do chat e no histórico operacional das partes."
          ],
          "clausula": "4.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A decisão é comunicada em até ",
            {
              "campo": "PRAZO DE DECISÃO",
              "sugestao": "5 dias úteis"
            },
            " do recebimento de todos os elementos."
          ],
          "clausula": "4.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A decisão pode determinar: a refação do serviço; o reembolso parcial, proporcional ao escopo não executado; o reembolso integral; ou o indeferimento da reclamação."
          ],
          "clausula": "4.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "A refação é a solução preferencial."
            },
            " O reembolso é adotado quando a refação for inviável, quando o Cliente não puder disponibilizar o imóvel em prazo razoável, quando houver recusa justificada do Cliente em receber novamente o mesmo Profissional, ou quando a falha for de tal extensão que a refação não atenda à finalidade do serviço."
          ],
          "clausula": "4.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A decisão pode ser objeto de pedido de reexame uma única vez, no prazo de ",
            {
              "campo": "PRAZO DE REEXAME",
              "sugestao": "5 dias"
            },
            ", com apresentação de novos elementos."
          ],
          "clausula": "4.5"
        }
      ]
    },
    {
      "numero": "5",
      "titulo": "Refação",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A refação é realizada sem qualquer custo adicional ao Cliente, limitada ao escopo originalmente contratado e aos ambientes e tarefas efetivamente reconhecidos na decisão."
          ],
          "clausula": "5.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A refação é executada em data e horário acordados, dentro de ",
            {
              "campo": "PRAZO PARA REFAÇÃO",
              "sugestao": "7 dias"
            },
            " da decisão, preferencialmente pelo mesmo Profissional e, havendo recusa justificada ou indisponibilidade, por outro Profissional."
          ],
          "clausula": "5.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente deve manter o imóvel nas mesmas condições verificadas na reclamação até a refação, sob pena de inviabilizar a verificação e acarretar o indeferimento."
          ],
          "clausula": "5.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não comparecendo o Cliente na data acordada para a refação, a Garantia é considerada cumprida."
          ],
          "clausula": "5.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A refação é admitida uma única vez por Atendimento."
          ],
          "clausula": "5.5"
        }
      ]
    },
    {
      "numero": "6",
      "titulo": "Efeitos para o profissional",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Deferida a refação, o Profissional que a executar não recebe valor adicional, por se tratar de complementação do Atendimento já remunerado."
          ],
          "clausula": "6.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Executada a refação por outro Profissional, o valor correspondente é deduzido do repasse devido ao Profissional originário, nos limites da cláusula 6.4."
          ],
          "clausula": "6.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Deferido reembolso ao Cliente, o valor é deduzido da custódia ou do saldo do Profissional, na forma do ",
            {
              "documento": "06",
              "texto": "Documento nº 06"
            },
            "."
          ],
          "clausula": "6.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As deduções desta cláusula estão limitadas ao valor líquido do Atendimento a que se referem."
          ],
          "clausula": "6.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Reclamações deferidas de forma reiterada contra o mesmo Profissional sujeitam-no às medidas do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "6.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Constatado que a reclamação foi deliberadamente falsa ou desproporcional, o Cliente responde pelas medidas do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            " e pela restituição de valores indevidamente obtidos, e nenhum valor é deduzido do Profissional."
          ],
          "clausula": "6.6"
        }
      ]
    },
    {
      "numero": "7",
      "titulo": "Assistência excepcional",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Em circunstâncias excepcionais, diante de falha grave não resolvida pelo Profissional e que gere risco relevante ao Cliente, a Easy Faxina pode prestar assistência por liberalidade, inclusive contratando terceiro para solucionar a ocorrência."
          ],
          "clausula": "7.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A assistência prestada por liberalidade não implica, em nenhuma hipótese, assunção de responsabilidade pela execução do serviço, nem cria direito ou precedente para casos futuros."
          ],
          "clausula": "7.2"
        }
      ]
    },
    {
      "numero": "8",
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
          "clausula": "8.1"
        }
      ]
    }
  ]
};
