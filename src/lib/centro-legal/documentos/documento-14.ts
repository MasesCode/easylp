import type { DocumentoLegal } from "@/lib/centro-legal/tipos";

export const DOCUMENTO_14: DocumentoLegal = {
  "numero": "14",
  "slug": "prevencao-a-fraudes",
  "titulo": "Política de prevenção a fraudes, chargeback e retenção de valores",
  "resumo": "Define o que a Easy Faxina considera fraude, como apura a suspeita, quando retém ou desconta valores, como trata contestações de pagamento (chargeback) e quais as consequências para quem fraudar a Plataforma.",
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
            "Este documento regula a prevenção, a detecção e o tratamento de condutas fraudulentas praticadas na Plataforma, bem como as contestações de pagamento e as retenções de valores decorrentes."
          ],
          "clausula": "1.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As medidas aqui previstas visam proteger os Usuários de boa-fé, a integridade da Plataforma e a confiabilidade dos pagamentos."
          ],
          "clausula": "1.2"
        }
      ]
    },
    {
      "numero": "2",
      "titulo": "O que configura fraude",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Configura fraude, entre outras condutas de igual natureza:"
          ],
          "clausula": "2.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "uso de dados de identificação, documento ou meio de pagamento de terceiro, com ou sem seu conhecimento;"
            ],
            [
              "apresentação de documento falso, adulterado ou alterado digitalmente;"
            ],
            [
              "burla da conferência biométrica, inclusive por uso de fotografia, vídeo, máscara ou recurso de geração artificial de imagem;"
            ],
            [
              "cessão, aluguel ou compartilhamento de Conta, e execução de Atendimento por pessoa diversa do titular;"
            ],
            [
              "registro de check-in ou de check-out sem a efetiva presença no local, ou com manipulação de geolocalização;"
            ],
            [
              "declaração de Atendimento não realizado, ou realizado em escopo e duração distintos dos informados;"
            ],
            [
              "combinação entre Cliente e Profissional para gerar Atendimento fictício, obter liberação de custódia, cupom, crédito, bônus de indicação ou qualquer vantagem;"
            ],
            [
              "criação de Contas múltiplas para obter benefício de primeira contratação, de indicação ou de campanha promocional;"
            ],
            [
              "reclamação, denúncia ou ocorrência de dano deliberadamente falsa, destinada a obter refação, reembolso ou indenização indevida;"
            ],
            [
              "manipulação de avaliações, inclusive por troca combinada de notas ou por contas criadas para esse fim;"
            ],
            [
              "revenda, transferência ou uso indevido de cupons e créditos promocionais;"
            ],
            [
              "contestação de pagamento referente a Atendimento efetivamente prestado e confirmado — autofraude ou fraude amigável;"
            ],
            [
              "tentativa de acesso não autorizado a sistemas, contas ou bases de dados da Plataforma."
            ]
          ]
        }
      ]
    },
    {
      "numero": "3",
      "titulo": "Monitoramento e medidas preventivas",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina adota mecanismos de prevenção a fraude que podem analisar, de forma automatizada, padrões de cadastro, de uso, de pagamento, de geolocalização, de dispositivo e de comunicação, nos termos do ",
            {
              "documento": "04",
              "texto": "Documento nº 04"
            },
            "."
          ],
          "clausula": "3.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Identificado indício de risco, a Easy Faxina pode, de forma preventiva e sem aviso prévio: exigir nova conferência biométrica; exigir documento ou comprovação adicional; limitar meios de pagamento; limitar o valor ou a quantidade de Agendamentos; bloquear saques; retomar a conferência cadastral; e inativar cautelarmente a Conta."
          ],
          "clausula": "3.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As medidas preventivas são comunicadas ao Usuário com indicação do motivo e do que é necessário para regularização, salvo quando a comunicação possa comprometer a apuração ou a segurança de terceiros."
          ],
          "clausula": "3.3"
        }
      ]
    },
    {
      "numero": "4",
      "titulo": "Apuração de suspeita",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A suspeita de fraude é apurada ",
            {
              "negrito": "caso a caso"
            },
            ", com oportunidade de manifestação ao Usuário envolvido, nos termos do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "4.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode solicitar documentos e esclarecimentos, que devem ser apresentados em até ",
            {
              "campo": "PRAZO PARA ESCLARECIMENTO",
              "sugestao": "10 dias"
            },
            "."
          ],
          "clausula": "4.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Durante a apuração, os valores relacionados à ocorrência permanecem retidos, não podendo ser utilizados, cedidos, antecipados ou dados em garantia pelo Usuário."
          ],
          "clausula": "4.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Não confirmada a fraude, todos os valores retidos são integralmente liberados"
            },
            " e, se já descontados, devolvidos, com restabelecimento da Conta e correção dos indicadores afetados."
          ],
          "clausula": "4.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Confirmada a fraude, aplicam-se as medidas da cláusula 7."
          ],
          "clausula": "4.5"
        }
      ]
    },
    {
      "numero": "5",
      "titulo": "Chargeback e contestação de pagamento",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "A Easy Faxina não responde por Chargeback"
            },
            " decorrente de uso de dados de terceiro, de fraude na execução do serviço, de fraude posterior à contratação, de autofraude, de fraude amigável, de erro de processamento ou de desacordo comercial entre Usuários."
          ],
          "clausula": "5.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Recebida notificação de Chargeback, a Easy Faxina pode bloquear a Conta envolvida e reter valores correspondentes até a conclusão da análise pela instituição emissora e pelo parceiro de pagamento."
          ],
          "clausula": "5.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os Usuários autorizam a Easy Faxina e os parceiros de pagamento a aplicar retenção, desconto, compensação com créditos futuros, débito em conta e cobrança por outros meios legítimos, judiciais ou extrajudiciais, dos valores contestados, conforme as regras de cada meio de pagamento."
          ],
          "clausula": "5.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não havendo saldo suficiente, a Easy Faxina pode emitir cobrança ao Usuário responsável e, em caso de não pagamento, adotar as medidas do ",
            {
              "documento": "06",
              "texto": "Documento nº 06"
            },
            ", inclusive protesto e inclusão em órgãos de proteção ao crédito."
          ],
          "clausula": "5.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Cliente cuja Conta esteja vinculada a número excessivo de Chargebacks pode ter o acesso restrito, suspenso ou desativado, a critério da Easy Faxina, bem como ter limitados os meios de pagamento disponíveis."
          ],
          "clausula": "5.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente que discordar de uma cobrança deve utilizar primeiro o canal de contestação do ",
            {
              "documento": "06",
              "texto": "Documento nº 06"
            },
            ", cuja via é mais célere do que o Chargeback."
          ],
          "clausula": "5.6"
        }
      ]
    },
    {
      "numero": "6",
      "titulo": "Retenção de valores",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A retenção de valores por suspeita de fraude é medida cautelar destinada a evitar, minimizar ou recuperar dano à Easy Faxina, aos Clientes, aos Profissionais ou a terceiros."
          ],
          "clausula": "6.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A retenção é comunicada ao Usuário com indicação do valor, do motivo e do prazo estimado da apuração, que não excederá ",
            {
              "campo": "PRAZO MÁXIMO DE RETENÇÃO",
              "sugestao": "30 dias"
            },
            ", salvo determinação de autoridade ou necessidade justificada de prorrogação, igualmente comunicada."
          ],
          "clausula": "6.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os valores retidos não rendem juros, correção ou qualquer remuneração."
          ],
          "clausula": "6.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Confirmada a fraude, os valores retidos são destinados à reparação dos prejudicados e ao ressarcimento da Easy Faxina, na ordem de preferência: Cliente lesado, Profissional lesado, terceiro lesado e Easy Faxina."
          ],
          "clausula": "6.4"
        }
      ]
    },
    {
      "numero": "7",
      "titulo": "Consequências",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Confirmada a fraude, a Easy Faxina pode, isolada ou cumulativamente:"
          ],
          "clausula": "7.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "desativar a Conta em definitivo, sem aviso prévio e sem direito a compensação;"
            ],
            [
              "impedir novo cadastro sob qualquer identidade;"
            ],
            [
              "reter e descontar os valores envolvidos, bem como cobrar os prejuízos apurados;"
            ],
            [
              "cancelar cupons, créditos, bônus e benefícios obtidos de forma indevida;"
            ],
            [
              "comunicar os fatos às autoridades policiais e ao Ministério Público;"
            ],
            [
              "adotar as medidas judiciais e extrajudiciais cabíveis, nas esferas civil e criminal;"
            ],
            [
              "comunicar os parceiros de pagamento e as instituições financeiras envolvidas."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A desativação por fraude não gera direito ao recebimento dos valores relacionados às condutas fraudulentas."
          ],
          "clausula": "7.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Usuário responde pelos prejuízos causados à Easy Faxina, aos demais Usuários e a terceiros, inclusive honorários advocatícios e custas processuais."
          ],
          "clausula": "7.3"
        }
      ]
    },
    {
      "numero": "8",
      "titulo": "Direito de revisão",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Usuário pode pedir revisão da medida e da retenção, na forma do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            ", com resposta em até ",
            {
              "campo": "PRAZO DE RESPOSTA DO RECURSO",
              "sugestao": "48 horas"
            },
            "."
          ],
          "clausula": "8.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A decisão sobre fraude é passível de revisão humana, ainda que amparada em alerta automatizado, nos termos do ",
            {
              "documento": "04",
              "texto": "Documento nº 04"
            },
            "."
          ],
          "clausula": "8.2"
        }
      ]
    },
    {
      "numero": "9",
      "titulo": "Colaboração do usuário",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Usuário que identificar indício de fraude deve comunicá-lo imediatamente pelo canal de denúncia."
          ],
          "clausula": "9.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A omissão deliberada de informação relevante sobre fraude de que o Usuário tenha conhecimento é tratada como participação na conduta."
          ],
          "clausula": "9.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Usuário deve manter seus dados de acesso em sigilo e comunicar imediatamente qualquer suspeita de uso indevido de sua Conta."
          ],
          "clausula": "9.3"
        }
      ]
    },
    {
      "numero": "10",
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
          "clausula": "10.1"
        }
      ]
    }
  ]
};
