import type { DocumentoLegal } from "@/lib/centro-legal/tipos";

export const DOCUMENTO_16: DocumentoLegal = {
  "numero": "16",
  "slug": "atendimento-e-conflitos",
  "titulo": "Política de atendimento e resolução de conflitos",
  "resumo": "Reúne os canais oficiais de atendimento, os prazos de resposta por tipo de solicitação, as etapas da mediação entre Cliente e Profissional, as instâncias de recurso e os caminhos externos disponíveis, incluindo o consumidor.gov.br.",
  "aplicaSe": "Clientes e Profissionais",
  "versao": "1.0",
  "secoes": [
    {
      "numero": "1",
      "titulo": "Canais oficiais",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "São canais oficiais de atendimento da Easy Faxina:"
          ],
          "clausula": "1.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "a central de ajuda e o chat de suporte disponíveis no aplicativo e no site;"
            ],
            [
              "o e-mail ",
              {
                "campo": "E-MAIL DE CONTATO"
              },
              ";"
            ],
            [
              "o telefone ou canal de mensagens ",
              {
                "campo": "TELEFONE / WHATSAPP OFICIAL"
              },
              ";"
            ],
            [
              "o e-mail do Encarregado de Dados ",
              {
                "campo": "E-MAIL DO DPO"
              },
              ", para assuntos relativos a dados pessoais;"
            ],
            [
              "o endereço postal da sede, em ",
              {
                "campo": "ENDEREÇO COMPLETO DA SEDE"
              },
              "."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O horário de atendimento humano é ",
            {
              "campo": "HORÁRIO DE ATENDIMENTO"
            },
            ", sendo o canal de denúncia e emergência disponível em ",
            {
              "campo": "DISPONIBILIDADE DO CANAL DE EMERGÊNCIA",
              "sugestao": "24 horas"
            },
            "."
          ],
          "clausula": "1.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Somente os canais listados nesta cláusula são oficiais."
            },
            " A Easy Faxina não solicita senha, código de verificação, dados completos de cartão ou transferência para contas de pessoas físicas. Contato recebido por outro canal deve ser tratado como tentativa de golpe e comunicado imediatamente."
          ],
          "clausula": "1.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Toda solicitação registrada recebe número de protocolo, que deve ser informado nos contatos subsequentes."
          ],
          "clausula": "1.4"
        }
      ]
    },
    {
      "numero": "2",
      "titulo": "Prazos de resposta",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os prazos de resposta, contados do registro da solicitação com todos os elementos necessários, são:"
          ],
          "clausula": "2.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "denúncia que envolva risco à integridade física: ",
              {
                "negrito": "imediato"
              },
              ", com tratamento prioritário;"
            ],
            [
              "problema em Atendimento em curso: até ",
              {
                "campo": "PRAZO",
                "sugestao": "2 horas, dentro do horário de atendimento"
              },
              ";"
            ],
            [
              "contestação de cobrança: até ",
              {
                "campo": "PRAZO",
                "sugestao": "2 dias úteis"
              },
              ";"
            ],
            [
              "acionamento da Garantia de Satisfação: até ",
              {
                "campo": "PRAZO",
                "sugestao": "5 dias úteis"
              },
              ", conforme o ",
              {
                "documento": "08",
                "texto": "Documento nº 08"
              },
              ";"
            ],
            [
              "ocorrência de dano ou sinistro: até ",
              {
                "campo": "PRAZO",
                "sugestao": "15 dias úteis"
              },
              ", conforme o ",
              {
                "documento": "09",
                "texto": "Documento nº 09"
              },
              ";"
            ],
            [
              "pedido de revisão de medida aplicada à Conta: até ",
              {
                "campo": "PRAZO",
                "sugestao": "48 horas"
              },
              ", conforme o ",
              {
                "documento": "13",
                "texto": "Documento nº 13"
              },
              ";"
            ],
            [
              "solicitação de titular de dados pessoais: até 15 (quinze) dias, conforme o ",
              {
                "documento": "04",
                "texto": "Documento nº 04"
              },
              ";"
            ],
            [
              "demais solicitações: até ",
              {
                "campo": "PRAZO",
                "sugestao": "5 dias úteis"
              },
              "."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os prazos ficam suspensos enquanto pendente de atendimento solicitação de documento ou de esclarecimento dirigida ao Usuário."
          ],
          "clausula": "2.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Prorrogações justificadas são comunicadas ao Usuário, com indicação do novo prazo."
          ],
          "clausula": "2.3"
        }
      ]
    },
    {
      "numero": "3",
      "titulo": "Mediação entre usuários",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Divergências entre Cliente e Profissional devem ser tratadas, em primeiro lugar, diretamente entre as partes, pelo chat da Plataforma."
          ],
          "clausula": "3.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não havendo solução, qualquer das partes pode solicitar a mediação da Easy Faxina, que atuará como facilitadora, podendo ouvir as partes, solicitar evidências e consultar os registros da Plataforma."
          ],
          "clausula": "3.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A mediação da Easy Faxina ",
            {
              "negrito": "não a torna parte da relação de prestação de serviço"
            },
            " nem lhe transfere a responsabilidade pelas obrigações assumidas entre os Usuários, conforme o ",
            {
              "documento": "01",
              "texto": "Documento nº 01"
            },
            "."
          ],
          "clausula": "3.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A decisão proferida em mediação produz efeitos no âmbito da Plataforma — refação, reembolso, retenção, liberação de custódia e medidas na Conta — e não substitui as vias administrativa, arbitral ou judicial."
          ],
          "clausula": "3.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As partes se comprometem a colaborar com a mediação, apresentando informações verdadeiras e completas."
          ],
          "clausula": "3.5"
        }
      ]
    },
    {
      "numero": "4",
      "titulo": "Instâncias internas",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O atendimento observa as seguintes instâncias:"
          ],
          "clausula": "4.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              {
                "negrito": "primeira instância"
              },
              ": equipe de suporte, responsável pela análise inicial;"
            ],
            [
              {
                "negrito": "segunda instância"
              },
              ": equipe de revisão, acionada pelo pedido de revisão previsto no ",
              {
                "documento": "13",
                "texto": "Documento nº 13"
              },
              " e nas políticas específicas, formada por integrantes distintos dos que decidiram em primeira instância;"
            ],
            [
              {
                "negrito": "canal do Encarregado"
              },
              ": para matéria de proteção de dados pessoais, conforme o ",
              {
                "documento": "04",
                "texto": "Documento nº 04"
              },
              "."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Usuário pode solicitar a íntegra do fundamento da decisão que lhe for desfavorável, observados os limites de confidencialidade e de proteção dos dados de terceiros."
          ],
          "clausula": "4.2"
        }
      ]
    },
    {
      "numero": "5",
      "titulo": "Vias externas",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Esgotado o atendimento interno, ou a qualquer momento se assim preferir, o Usuário pode recorrer:"
          ],
          "clausula": "5.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "ao serviço público gratuito ",
              {
                "negrito": "consumidor.gov.br"
              },
              ", para tratativa direta e registrada com a Easy Faxina;"
            ],
            [
              "aos órgãos de defesa do consumidor, como Procon e Ministério Público;"
            ],
            [
              "à ",
              {
                "negrito": "Autoridade Nacional de Proteção de Dados"
              },
              ", em matéria de dados pessoais;"
            ],
            [
              "ao Poder Judiciário."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina se compromete a responder as manifestações recebidas pelas vias externas nos prazos por elas estabelecidos."
          ],
          "clausula": "5.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O uso de via externa não impede a continuidade do atendimento interno da solicitação."
          ],
          "clausula": "5.3"
        }
      ]
    },
    {
      "numero": "6",
      "titulo": "Acessibilidade e idioma",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O atendimento é prestado em português. Canais e materiais em outros idiomas, quando disponíveis, são oferecidos como conveniência, prevalecendo a versão em português em caso de divergência."
          ],
          "clausula": "6.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina busca manter seus canais acessíveis a pessoas com deficiência e disponibiliza atendimento por escrito como alternativa ao atendimento por voz."
          ],
          "clausula": "6.2"
        }
      ]
    },
    {
      "numero": "7",
      "titulo": "Boa-fé no atendimento",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "É vedado ao Usuário ofender, ameaçar, importunar de forma reiterada ou dirigir conduta discriminatória aos colaboradores da Easy Faxina, sob pena das medidas do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "7.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As chamadas telefônicas de atendimento podem ser gravadas para registro interno, nos termos do ",
            {
              "documento": "04",
              "texto": "Documento nº 04"
            },
            "."
          ],
          "clausula": "7.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Solicitações manifestamente infundadas, repetitivas ou abusivas podem ser encerradas sumariamente, com registro do motivo."
          ],
          "clausula": "7.3"
        }
      ]
    },
    {
      "numero": "8",
      "titulo": "Lei aplicável e foro",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Aplicam-se a este documento a lei e o foro previstos no ",
            {
              "documento": "01",
              "texto": "Documento nº 01"
            },
            ", ressalvado o direito do consumidor de demandar no foro de seu domicílio."
          ],
          "clausula": "8.1"
        }
      ]
    }
  ]
};
