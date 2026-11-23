import type { DocumentoLegal } from "@/lib/centro-legal/tipos";

export const DOCUMENTO_07: DocumentoLegal = {
  "numero": "07",
  "slug": "cancelamento-e-reembolso",
  "titulo": "Política de cancelamento, reagendamento e reembolso",
  "resumo": "Define quem pode cancelar, até quando, com que consequência financeira, como funciona o reagendamento e o que acontece nos casos de ausência de uma das partes, de impossibilidade de acesso ao imóvel e de força maior.",
  "aplicaSe": "Clientes e Profissionais",
  "versao": "1.0",
  "secoes": [
    {
      "numero": "1",
      "titulo": "Regra geral",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Todo cancelamento e todo reagendamento devem ser registrados na Plataforma, com indicação do motivo. Comunicação feita apenas por canal externo não produz efeito."
          ],
          "clausula": "1.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O momento do registro na Plataforma determina a consequência financeira aplicável."
          ],
          "clausula": "1.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As taxas desta Política destinam-se a compensar o tempo reservado, o deslocamento e a oportunidade perdida pela parte prejudicada, e não têm natureza punitiva."
          ],
          "clausula": "1.3"
        }
      ]
    },
    {
      "numero": "2",
      "titulo": "Cancelamento pelo cliente",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente pode cancelar o Agendamento a qualquer momento antes do início do Atendimento, observadas as seguintes faixas:"
          ],
          "clausula": "2.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "cancelamento com mais de ",
              {
                "campo": "PRAZO SEM ÔNUS",
                "sugestao": "24 horas"
              },
              " de antecedência do horário agendado: ",
              {
                "negrito": "sem qualquer ônus"
              },
              ", com liberação integral da pré-autorização;"
            ],
            [
              "cancelamento entre ",
              {
                "campo": "PRAZO SEM ÔNUS",
                "sugestao": "24 horas"
              },
              " e ",
              {
                "campo": "PRAZO INTERMEDIÁRIO",
                "sugestao": "4 horas"
              },
              " de antecedência: cobrança de taxa de cancelamento de ",
              {
                "campo": "TAXA INTERMEDIÁRIA",
                "sugestao": "20% do valor"
              },
              ", destinada ao Profissional;"
            ],
            [
              "cancelamento com menos de ",
              {
                "campo": "PRAZO INTERMEDIÁRIO",
                "sugestao": "4 horas"
              },
              " de antecedência, ou após o início do deslocamento do Profissional: cobrança de taxa de cancelamento de ",
              {
                "campo": "TAXA TARDIA",
                "sugestao": "50% do valor"
              },
              ", destinada ao Profissional;"
            ],
            [
              "cancelamento após o check-in do Profissional no local: cobrança integral do valor do Atendimento, salvo nas hipóteses da cláusula 6."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A taxa de cancelamento é repassada ao Profissional deduzida a taxa de serviço da Easy Faxina."
          ],
          "clausula": "2.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O cancelamento de Agendamento que ainda não tenha sido aceito por Profissional não gera ônus em nenhuma hipótese."
          ],
          "clausula": "2.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Cancelamentos reiterados e injustificados sujeitam o Cliente às medidas do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "2.4"
        }
      ]
    },
    {
      "numero": "3",
      "titulo": "Cancelamento pelo profissional",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Profissional pode cancelar Agendamento já aceito, registrando o motivo na Plataforma com a maior antecedência possível."
          ],
          "clausula": "3.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O cancelamento pelo Profissional ",
            {
              "negrito": "não gera cobrança ao Cliente"
            },
            ", que tem a pré-autorização integralmente liberada, e a Plataforma procura oferecer Profissional substituto para a mesma data e horário."
          ],
          "clausula": "3.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não havendo substituto, o Agendamento é encerrado sem custo e o Cliente pode ser contemplado com crédito de cortesia, conforme a política comercial vigente."
          ],
          "clausula": "3.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Cancelamentos após o aceite, cancelamentos de última hora e ausências reiteradas afetam os índices operacionais do Profissional e sujeitam-no às medidas do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "3.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não são computados como cancelamento desfavorável os casos de doença, acidente, luto, caso fortuito ou força maior, comprovados quando solicitado, nem a recusa fundada nas hipóteses de interrupção do ",
            {
              "documento": "02",
              "texto": "Documento nº 02"
            },
            "."
          ],
          "clausula": "3.5"
        }
      ]
    },
    {
      "numero": "4",
      "titulo": "Reagendamento",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O reagendamento depende de concordância de ambas as partes na Plataforma e preserva o valor originalmente contratado."
          ],
          "clausula": "4.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Solicitado pelo Cliente com mais de ",
            {
              "campo": "PRAZO SEM ÔNUS",
              "sugestao": "24 horas"
            },
            " de antecedência, o reagendamento não gera ônus. Solicitado em prazo inferior, depende do aceite do Profissional; na ausência de aceite, aplica-se a faixa de cancelamento correspondente da cláusula 2.1."
          ],
          "clausula": "4.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Cada Agendamento admite até ",
            {
              "campo": "LIMITE DE REAGENDAMENTOS",
              "sugestao": "2"
            },
            " reagendamentos. Excedido o limite, o Agendamento é cancelado conforme a cláusula 2.1."
          ],
          "clausula": "4.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não havendo acordo quanto à nova data, o Agendamento é cancelado sem ônus para nenhuma das partes."
          ],
          "clausula": "4.4"
        }
      ]
    },
    {
      "numero": "5",
      "titulo": "Ausência e impossibilidade de acesso",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Ausência do Cliente."
            },
            " Não encontrando o Profissional, no horário agendado, pessoa maior de 18 (dezoito) anos e plenamente capaz no local, ou não obtendo acesso ao imóvel, deve registrar a ocorrência na Plataforma, com evidência de sua presença, e aguardar ",
            {
              "campo": "TOLERÂNCIA DE ESPERA",
              "sugestao": "30 minutos"
            },
            ". Esgotado o prazo sem solução, o Atendimento é encerrado e cobrado do Cliente no percentual de ",
            {
              "campo": "TAXA POR AUSÊNCIA DO CLIENTE",
              "sugestao": "50% do valor"
            },
            ", repassado ao Profissional deduzida a taxa de serviço."
          ],
          "clausula": "5.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Ausência do Profissional."
            },
            " Não comparecendo o Profissional e não registrando cancelamento, o Cliente deve registrar a ocorrência na Plataforma. O Atendimento é encerrado sem qualquer cobrança ao Cliente, com liberação integral da pré-autorização, oferecimento de Profissional substituto quando possível e apuração na forma do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "5.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Atraso."
            },
            " O atraso de qualquer das partes deve ser comunicado pela Plataforma. O atraso do Profissional superior a ",
            {
              "campo": "TOLERÂNCIA DE ATRASO",
              "sugestao": "30 minutos"
            },
            " faculta ao Cliente cancelar sem ônus. O atraso do Cliente em liberar o acesso não prorroga a duração contratada, podendo reduzir o escopo efetivamente executado."
          ],
          "clausula": "5.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Nas hipóteses desta cláusula, prevalecem como prova os registros de geolocalização, horário e mensagens constantes da Plataforma."
          ],
          "clausula": "5.4"
        }
      ]
    },
    {
      "numero": "6",
      "titulo": "Cancelamento sem ônus por motivo justificado",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não incide qualquer taxa, com liberação integral da pré-autorização, quando o cancelamento decorrer de:"
          ],
          "clausula": "6.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "divergência entre a identidade do Profissional presente no local e o perfil exibido na Plataforma;"
            ],
            [
              "recusa do Profissional em registrar check-in ou em permitir a conferência de identidade;"
            ],
            [
              "estado do Profissional que comprometa a segurança do Atendimento;"
            ],
            [
              "conduta do Profissional vedada pelo ",
              {
                "documento": "11",
                "texto": "Documento nº 11"
              },
              ";"
            ],
            [
              "impossibilidade de execução por caso fortuito ou força maior, inclusive falta de energia ou de água no imóvel por fato alheio ao Cliente, interdição do imóvel, sinistro, calamidade, decretação de medida sanitária restritiva ou interrupção grave de mobilidade na região;"
            ],
            [
              "indisponibilidade relevante da Plataforma que impeça a execução ou a confirmação do Atendimento."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Nas hipóteses de caso fortuito ou de força maior que atinjam ambas as partes, o Agendamento é cancelado sem ônus para nenhuma delas, cabendo à Plataforma reagendar quando houver interesse."
          ],
          "clausula": "6.2"
        }
      ]
    },
    {
      "numero": "7",
      "titulo": "Cancelamento de serviços recorrentes",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A recorrência pode ser pausada ou encerrada pelo Cliente a qualquer momento, com efeito sobre os Atendimentos ainda não iniciados."
          ],
          "clausula": "7.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Atendimento recorrente cujo início esteja a menos de ",
            {
              "campo": "PRAZO SEM ÔNUS",
              "sugestao": "24 horas"
            },
            " segue as faixas da cláusula 2.1."
          ],
          "clausula": "7.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O encerramento da recorrência não gera multa, carência ou qualquer encargo."
          ],
          "clausula": "7.3"
        }
      ]
    },
    {
      "numero": "8",
      "titulo": "Direito de arrependimento",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Tratando-se de contratação realizada fora do estabelecimento comercial, o Cliente pode desistir da contratação no prazo de 7 (sete) dias contados da contratação, nos termos do art. 49 do Código de Defesa do Consumidor, desde que o Atendimento ainda não tenha sido iniciado, hipótese em que o valor é integralmente restituído."
          ],
          "clausula": "8.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Iniciado o Atendimento no período de 7 (sete) dias por solicitação expressa do próprio Cliente, o exercício do arrependimento observa a proporcionalidade do serviço já executado."
          ],
          "clausula": "8.2"
        }
      ]
    },
    {
      "numero": "9",
      "titulo": "Prazos de restituição",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os reembolsos observam os meios e os prazos do ",
            {
              "documento": "06",
              "texto": "Documento nº 06"
            },
            "."
          ],
          "clausula": "9.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina não responde pelo prazo de processamento da instituição emissora do cartão."
          ],
          "clausula": "9.2"
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
