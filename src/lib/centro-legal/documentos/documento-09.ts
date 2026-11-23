import type { DocumentoLegal } from "@/lib/centro-legal/tipos";

export const DOCUMENTO_09: DocumentoLegal = {
  "numero": "09",
  "slug": "danos-e-sinistros",
  "titulo": "Política de danos, sinistros e cobertura",
  "resumo": "Trata do que acontece quando algo é danificado, subtraído ou quando ocorre acidente durante o Atendimento: prazo e provas para comunicar, apuração, limites de cobertura, exclusões e os efeitos sobre o repasse do Profissional.",
  "aplicaSe": "Clientes e Profissionais",
  "versao": "1.0",
  "secoes": [
    {
      "numero": "1",
      "titulo": "Objeto e natureza",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Este documento regula o tratamento de danos materiais, de subtração de bens e de acidentes ocorridos durante o Atendimento contratado e pago por meio da Plataforma."
          ],
          "clausula": "1.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "O responsável pelos danos causados durante a execução do serviço é o Profissional"
            },
            ", que assume integralmente essa responsabilidade nos termos do ",
            {
              "documento": "03",
              "texto": "Documento nº 03"
            },
            "."
          ],
          "clausula": "1.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A cobertura descrita neste documento é oferecida pela Easy Faxina por liberalidade ou por meio de apólice contratada com seguradora parceira, não constitui seguro contratado pelo Usuário, não transforma a Easy Faxina em seguradora ou garantidora e aplica-se apenas nos limites e nas condições aqui previstos."
          ],
          "clausula": "1.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A cobertura ",
            {
              "negrito": "somente se aplica a Atendimentos contratados e pagos integralmente por meio da Plataforma"
            },
            ", com check-in e check-out registrados."
          ],
          "clausula": "1.4"
        }
      ]
    },
    {
      "numero": "2",
      "titulo": "Comunicação da ocorrência",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A ocorrência deve ser registrada na Plataforma no prazo de ",
            {
              "campo": "PRAZO DE COMUNICAÇÃO DE DANO",
              "sugestao": "48 horas"
            },
            " contado do check-out e, nos casos de subtração de bem, imediatamente após a constatação."
          ],
          "clausula": "2.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O registro deve conter: descrição do ocorrido; identificação do bem, com marca, modelo e características; fotografias ou vídeos do bem danificado e do local; comprovante de propriedade, valor ou nota fiscal, quando houver; e orçamento de reparo ou de substituição."
          ],
          "clausula": "2.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Nos casos de subtração de bem, de violação de domicílio, de agressão, de ameaça ou de qualquer suspeita de crime, o Cliente deve registrar ",
            {
              "negrito": "boletim de ocorrência"
            },
            " junto à autoridade policial e apresentá-lo à Easy Faxina, condição indispensável para a análise."
          ],
          "clausula": "2.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Profissional deve comunicar imediatamente, pela Plataforma, qualquer dano que tenha causado ou constatado, bem como qualquer acidente que sofra durante o Atendimento."
          ],
          "clausula": "2.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O bem danificado deve ser preservado no estado em que se encontra até a conclusão da apuração, salvo risco iminente, sob pena de inviabilizar a verificação."
          ],
          "clausula": "2.5"
        }
      ]
    },
    {
      "numero": "3",
      "titulo": "Apuração",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Registrada a ocorrência, a Easy Faxina suspende a liberação da custódia e, quando necessário, retém valores do saldo do Profissional, nos limites do ",
            {
              "documento": "06",
              "texto": "Documento nº 06"
            },
            ", até a conclusão da apuração."
          ],
          "clausula": "3.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A apuração considera as evidências apresentadas, os registros de check-in e check-out, o histórico do chat, as declarações das partes, laudos técnicos e, quando aplicável, o parecer do regulador da seguradora."
          ],
          "clausula": "3.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Ambas as partes são ouvidas e podem apresentar provas em prazo igual, de ",
            {
              "campo": "PRAZO DE DEFESA",
              "sugestao": "5 dias"
            },
            "."
          ],
          "clausula": "3.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode solicitar documentos e esclarecimentos adicionais, que devem ser apresentados em até ",
            {
              "campo": "PRAZO PARA COMPLEMENTO",
              "sugestao": "10 dias"
            },
            " da solicitação."
          ],
          "clausula": "3.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A decisão é comunicada em até ",
            {
              "campo": "PRAZO DE DECISÃO",
              "sugestao": "15 dias úteis"
            },
            " do recebimento de todos os elementos, e admite um único pedido de reexame no prazo de ",
            {
              "campo": "PRAZO DE REEXAME",
              "sugestao": "5 dias"
            },
            "."
          ],
          "clausula": "3.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não comprovada a relação entre o dano e a execução do serviço, a ocorrência é indeferida e os valores retidos são liberados ao Profissional."
          ],
          "clausula": "3.6"
        }
      ]
    },
    {
      "numero": "4",
      "titulo": "Limites da cobertura",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A cobertura observa o limite de ",
            {
              "campo": "LIMITE POR OCORRÊNCIA"
            },
            " por ocorrência e de ",
            {
              "campo": "LIMITE POR ATENDIMENTO"
            },
            " por Atendimento, com franquia de ",
            {
              "campo": "FRANQUIA"
            },
            ", conforme as condições da apólice vigente ou da política comercial em vigor."
          ],
          "clausula": "4.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A indenização corresponde ao custo de reparo do bem ou, sendo o reparo inviável ou mais oneroso, ao valor de mercado de bem equivalente em estado de conservação semelhante, ",
            {
              "negrito": "nunca ao valor de bem novo"
            },
            ", salvo quando se tratar de bem novo comprovadamente."
          ],
          "clausula": "4.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A cobertura não contempla valor sentimental, de coleção, de raridade, de afeição ou de perda de oportunidade, nem lucros cessantes ou danos indiretos."
          ],
          "clausula": "4.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As condições gerais e as exclusões da apólice vigente, quando houver, ficam disponíveis para consulta em ",
            {
              "campo": "DOMÍNIO OFICIAL"
            },
            "/centro-legal e prevalecem quanto ao alcance da cobertura securitária."
          ],
          "clausula": "4.4"
        }
      ]
    },
    {
      "numero": "5",
      "titulo": "Exclusões",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não há cobertura nas seguintes hipóteses:"
          ],
          "clausula": "5.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "dano causado por dolo, má-fé, negligência ou provocação do próprio Cliente;"
            ],
            [
              "vício preexistente, desgaste natural, deterioração gradativa, defeito de fabricação, má qualidade, infiltração, corrosão, oxidação, incrustação, mofo estrutural ou desarranjo mecânico, elétrico ou eletrônico anterior ao Atendimento;"
            ],
            [
              "dano decorrente de instalação elétrica, hidráulica ou de gás irregular ou precária no imóvel;"
            ],
            [
              "dano em bem cuja preexistência, propriedade ou valor não possam ser comprovados;"
            ],
            [
              "dano em bem de terceiro não residente no imóvel, de origem ilícita, contrabandeado ou falsificado;"
            ],
            [
              "dinheiro em espécie, joias, pedras e metais preciosos, relógios de alto valor, obras de arte, documentos, títulos, cartões, senhas, criptoativos e bens de natureza semelhante que não tenham sido previamente guardados pelo Cliente;"
            ],
            [
              "dano decorrente de evento da natureza, incêndio, explosão, queda de raio, enchente, vendaval, terremoto, oscilação ou interrupção de energia elétrica;"
            ],
            [
              "dano decorrente de guerra, terrorismo, tumulto, vandalismo, greve, comoção social ou ato de autoridade;"
            ],
            [
              "dano causado por tarefa vedada pelo ",
              {
                "documento": "02",
                "texto": "Documento nº 02"
              },
              ", exigida pelo Cliente ou executada à sua revelia;"
            ],
            [
              "dano ocorrido fora do período registrado entre o check-in e o check-out;"
            ],
            [
              "dano em Atendimento contratado, negociado ou pago fora da Plataforma;"
            ],
            [
              "dano decorrente de execução por pessoa diversa do Profissional titular da Conta, hipótese em que a responsabilidade é integralmente do titular que cedeu a Conta;"
            ],
            [
              "dano decorrente de serviço prestado por terceiro estranho à Plataforma no mesmo período."
            ]
          ]
        }
      ]
    },
    {
      "numero": "6",
      "titulo": "Ressarcimento e efeitos sobre o repasse",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Deferida a reparação, a Easy Faxina pode: indenizar diretamente o Cliente e exercer o direito de ressarcimento contra o Profissional; deduzir o valor da custódia ou do saldo do Profissional; ou acionar a cobertura securitária, conforme o caso."
          ],
          "clausula": "6.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As deduções sobre o saldo do Profissional observam o limite de ",
            {
              "campo": "LIMITE DE DEDUÇÃO POR OCORRÊNCIA",
              "sugestao": "valor do dano apurado, parcelável"
            },
            " e podem ser parceladas em repasses futuros, mediante informação prévia do valor, do número de parcelas e do saldo remanescente."
          ],
          "clausula": "6.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Sendo insuficiente o saldo, a Easy Faxina pode emitir cobrança ao Profissional, com os encargos do ",
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
            "O Profissional que indenizar diretamente o Cliente deve comprová-lo na Plataforma, hipótese em que as retenções são imediatamente liberadas."
          ],
          "clausula": "6.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O pagamento realizado pela Easy Faxina a título de cobertura não configura reconhecimento de responsabilidade própria pela execução do serviço."
          ],
          "clausula": "6.5"
        }
      ]
    },
    {
      "numero": "7",
      "titulo": "Acidente com o profissional",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Acidente sofrido pelo Profissional durante o Atendimento deve ser registrado na Plataforma imediatamente, com relato e, quando houver, atendimento médico e documentação correspondente."
          ],
          "clausula": "7.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina presta orientação, aciona apoio emergencial quando possível e, havendo cobertura de acidentes pessoais contratada, comunica a seguradora, observadas as condições da apólice vigente."
          ],
          "clausula": "7.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O registro do acidente não implica reconhecimento de vínculo empregatício, de subordinação ou de responsabilidade da Easy Faxina pela atividade do Profissional."
          ],
          "clausula": "7.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente deve prestar auxílio imediato em caso de acidente ocorrido em seu imóvel e responde pelos danos decorrentes de condição insegura do local que conhecia ou deveria conhecer e não informou."
          ],
          "clausula": "7.4"
        }
      ]
    },
    {
      "numero": "8",
      "titulo": "Situações de risco e emergência",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Em situação de risco à integridade física de qualquer pessoa, a prioridade é o acionamento dos serviços públicos de emergência, devendo a Plataforma ser comunicada em seguida."
          ],
          "clausula": "8.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode, para proteção da vida ou da incolumidade física, compartilhar dados com autoridades e com serviços de emergência, nos termos do ",
            {
              "documento": "04",
              "texto": "Documento nº 04"
            },
            "."
          ],
          "clausula": "8.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Ocorrência grave acarreta a inativação cautelar da Conta envolvida, na forma do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            ", até a conclusão da apuração."
          ],
          "clausula": "8.3"
        }
      ]
    },
    {
      "numero": "9",
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
          "clausula": "9.1"
        }
      ]
    }
  ]
};
