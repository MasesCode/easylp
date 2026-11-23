import type { DocumentoLegal } from "@/lib/centro-legal/tipos";

export const DOCUMENTO_06: DocumentoLegal = {
  "numero": "06",
  "slug": "pagamentos-e-repasses",
  "titulo": "Política de pagamentos, custódia (escrow) e repasses",
  "resumo": "Descreve como o pagamento é cobrado do Cliente, como fica retido em custódia até a aprovação do serviço, quando e como é liberado ao Profissional, qual a taxa de serviço da Easy Faxina e em que hipóteses há retenção, compensação ou cobrança de valores.",
  "aplicaSe": "Clientes e Profissionais",
  "versao": "1.0",
  "secoes": [
    {
      "numero": "1",
      "titulo": "Princípio geral",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Todo pagamento referente a Atendimento contratado por meio da Plataforma deve ser realizado ",
            {
              "negrito": "exclusivamente pelos meios de pagamento disponíveis na Plataforma"
            },
            "."
          ],
          "clausula": "1.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "É vedado ao Cliente pagar e ao Profissional receber qualquer valor diretamente, em dinheiro, transferência, PIX, link externo ou qualquer outro meio, inclusive a título de acréscimo, extensão de escopo ou gratificação."
          ],
          "clausula": "1.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A violação desta regra afasta a custódia, a Garantia de Satisfação, a cobertura de danos e a mediação de conflitos, e sujeita o infrator às medidas do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            " e à cobrança da taxa de serviço devida."
          ],
          "clausula": "1.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina ",
            {
              "negrito": "não é instituição financeira nem instituição de pagamento"
            },
            ". As transações são processadas por parceiros legalmente autorizados, cujos termos o Usuário também deve conhecer e aceitar. Esta Política regula apenas a relação do Usuário com a Easy Faxina."
          ],
          "clausula": "1.4"
        }
      ]
    },
    {
      "numero": "2",
      "titulo": "Meios de pagamento e pré-autorização",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os meios de pagamento aceitos são os informados na Plataforma no momento do Agendamento, podendo incluir cartão de crédito, cartão de débito, PIX e, quando disponível, créditos promocionais."
          ],
          "clausula": "2.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Na confirmação do Agendamento, a Easy Faxina ou seu parceiro de pagamento realiza a ",
            {
              "negrito": "pré-autorização ou a reserva do valor integral"
            },
            " do Atendimento no meio de pagamento informado, sem que isso configure cobrança definitiva."
          ],
          "clausula": "2.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não havendo aceite de Profissional, ou sendo o Agendamento encerrado antes do início do Atendimento sem incidência de taxa, a pré-autorização é liberada e o valor retorna ao limite do Cliente no prazo praticado pela instituição emissora."
          ],
          "clausula": "2.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode utilizar meio de pagamento secundário cadastrado pelo Cliente quando o principal for recusado, bem como solicitar a atualização dos dados de pagamento."
          ],
          "clausula": "2.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Recusado o pagamento, o Agendamento não se perfaz e as funcionalidades da Conta podem permanecer bloqueadas até a regularização de valores em aberto."
          ],
          "clausula": "2.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente é responsável por manter seus dados de pagamento atualizados e declara ser o titular ou estar autorizado pelo titular do meio de pagamento utilizado."
          ],
          "clausula": "2.6"
        }
      ]
    },
    {
      "numero": "3",
      "titulo": "Custódia do valor (escrow)",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Confirmado o Agendamento, o valor permanece ",
            {
              "negrito": "retido em custódia"
            },
            " e não é repassado ao Profissional antes da liberação prevista nesta Política."
          ],
          "clausula": "3.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A custódia é liberada ao Profissional, deduzida a taxa de serviço, na ocorrência de qualquer das hipóteses abaixo:"
          ],
          "clausula": "3.2"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "confirmação expressa do Atendimento pelo Cliente na Plataforma; ou"
            ],
            [
              "decurso do prazo de ",
              {
                "campo": "PRAZO DE CONFIRMAÇÃO AUTOMÁTICA",
                "sugestao": "24 horas"
              },
              ", contado do check-out registrado pelo Profissional, sem manifestação do Cliente, hipótese em que a confirmação é considerada automática; ou"
            ],
            [
              "encerramento de apuração de ocorrência em favor do Profissional, nos termos dos ",
              {
                "documento": "08",
                "texto": "Documentos nº 08"
              },
              ", ",
              {
                "documento": "09",
                "texto": "nº 09"
              },
              " e ",
              {
                "documento": "14",
                "texto": "nº 14"
              },
              "."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Registrado problema pelo Cliente dentro do prazo da cláusula 3.2, a custódia permanece retida até a conclusão da apuração, que observa os prazos do ",
            {
              "documento": "08",
              "texto": "Documento nº 08"
            },
            "."
          ],
          "clausula": "3.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A confirmação automática não afasta os direitos assegurados ao consumidor pela legislação aplicável, mas a ausência de registro oportuno pode dificultar a comprovação do alegado."
          ],
          "clausula": "3.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os valores em custódia não rendem juros, correção monetária ou qualquer remuneração em favor de Cliente ou de Profissional."
          ],
          "clausula": "3.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os valores em custódia não podem ser cedidos, dados em garantia, antecipados ou de qualquer forma gravados pelo Profissional em favor de terceiros."
          ],
          "clausula": "3.6"
        }
      ]
    },
    {
      "numero": "4",
      "titulo": "Taxa de serviço da Easy Faxina",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Pela intermediação, pelo uso das ferramentas da Plataforma, pela custódia e pelo processamento do pagamento, a Easy Faxina faz jus à taxa de serviço de ",
            {
              "campo": "PERCENTUAL DA TAXA DE SERVIÇO"
            },
            " sobre o valor de cada Atendimento."
          ],
          "clausula": "4.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A taxa é deduzida automaticamente no momento da liberação da custódia, de modo que o Profissional recebe o valor líquido."
          ],
          "clausula": "4.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O valor líquido devido ao Profissional é exibido na Plataforma antes do aceite de cada Agendamento."
          ],
          "clausula": "4.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não sendo possível a dedução total ou parcial da taxa, a Easy Faxina pode cobrá-la por outros meios legítimos, inclusive emissão de boleto, compensação com créditos futuros e, persistindo a inadimplência, inclusão do devedor em órgãos de proteção ao crédito."
          ],
          "clausula": "4.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A alteração da taxa observa a comunicação prévia de, no mínimo, ",
            {
              "campo": "PRAZO DE AVISO PRÉVIO",
              "sugestao": "30 dias"
            },
            "."
          ],
          "clausula": "4.5"
        }
      ]
    },
    {
      "numero": "5",
      "titulo": "Repasse ao profissional",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O repasse é realizado à conta bancária de titularidade do Profissional cadastrada em seu perfil, ou por chave PIX de sua titularidade, na periodicidade informada na Plataforma."
          ],
          "clausula": "5.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O saldo disponível, o saldo em custódia, o saldo retido e o histórico de repasses ficam visíveis ao Profissional na Plataforma."
          ],
          "clausula": "5.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O saque, quando a funcionalidade estiver disponível, observa os valores mínimos, os prazos e os eventuais custos operacionais informados na Plataforma, bem como a conclusão das verificações de segurança aplicáveis, entre elas a confirmação de telefone e a conferência de titularidade da conta."
          ],
          "clausula": "5.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Gratificações oferecidas pelo Cliente por meio da Plataforma são repassadas integralmente ao Profissional, sem qualquer dedução, junto com o repasse do Atendimento correspondente."
          ],
          "clausula": "5.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina não responde por atraso, falta ou diferença de valor decorrente de dado bancário incorreto ou desatualizado, de caso fortuito ou de força maior, de falha da instituição financeira ou de cobrança de tarifa pela instituição financeira."
          ],
          "clausula": "5.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Profissional é o único responsável pelos tributos, taxas e contribuições incidentes sobre os valores recebidos, sem prejuízo das retenções que a Easy Faxina deva efetuar por determinação legal."
          ],
          "clausula": "5.6"
        }
      ]
    },
    {
      "numero": "6",
      "titulo": "Retenção e compensação de valores",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Profissional autoriza a Easy Faxina e seus parceiros de pagamento a reter, descontar ou compensar valores em custódia, em saldo disponível ou em créditos futuros nas seguintes hipóteses:"
          ],
          "clausula": "6.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "reembolso devido ao Cliente nos termos dos ",
              {
                "documento": "07",
                "texto": "Documentos nº 07"
              },
              " e ",
              {
                "documento": "08",
                "texto": "nº 08"
              },
              ";"
            ],
            [
              "reparação de dano comprovado, nos limites do ",
              {
                "documento": "09",
                "texto": "Documento nº 09"
              },
              ";"
            ],
            [
              "Chargeback, contestação ou estorno relativos a Atendimentos por ele executados, nos termos do ",
              {
                "documento": "14",
                "texto": "Documento nº 14"
              },
              ";"
            ],
            [
              "suspeita fundada de fraude, enquanto durar a apuração;"
            ],
            [
              "valores recebidos indevidamente ou em duplicidade;"
            ],
            [
              "taxa de serviço não deduzida;"
            ],
            [
              "determinação de autoridade competente ou ordem judicial."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A retenção é comunicada ao Profissional com indicação do motivo, do valor e do prazo estimado de apuração."
          ],
          "clausula": "6.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não confirmada a irregularidade, os valores retidos são liberados integralmente ou devolvidos, quando já descontados."
          ],
          "clausula": "6.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Sendo insuficiente o saldo, a Easy Faxina pode emitir cobrança ao Profissional e, persistindo o não pagamento, adotar as medidas da cláusula 4.4."
          ],
          "clausula": "6.4"
        }
      ]
    },
    {
      "numero": "7",
      "titulo": "Inadimplência, encargos e cobrança",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não quitado valor devido por qualquer Usuário, as funcionalidades da Conta podem ser bloqueadas até a regularização."
          ],
          "clausula": "7.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Sobre o valor em atraso incidem correção monetária, juros de mora de 1% (um por cento) ao mês e multa de 2% (dois por cento), além de honorários advocatícios de ",
            {
              "campo": "PERCENTUAL DE HONORÁRIOS",
              "sugestao": "20%"
            },
            " em caso de cobrança judicial."
          ],
          "clausula": "7.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Decorridos ",
            {
              "campo": "PRAZO PARA NEGATIVAÇÃO",
              "sugestao": "20 dias"
            },
            " do vencimento, a Easy Faxina pode incluir o devedor em órgãos de proteção ao crédito e adotar as medidas judiciais e extrajudiciais de cobrança, reconhecido o débito como líquido, certo e exigível."
          ],
          "clausula": "7.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A inclusão em órgãos de proteção ao crédito observa o disposto no ",
            {
              "documento": "04",
              "texto": "Documento nº 04"
            },
            " quanto ao tratamento de dados pessoais."
          ],
          "clausula": "7.4"
        }
      ]
    },
    {
      "numero": "8",
      "titulo": "Estornos e reembolsos",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Deferido reembolso, o valor é restituído pelo mesmo meio de pagamento utilizado, salvo impossibilidade técnica."
          ],
          "clausula": "8.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Em pagamentos por cartão de crédito, o crédito pode aparecer na fatura corrente ou na subsequente, conforme a data de fechamento da instituição emissora, prazo sobre o qual a Easy Faxina não tem controle."
          ],
          "clausula": "8.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Em pagamentos por PIX, o reembolso é realizado em até ",
            {
              "campo": "PRAZO DE REEMBOLSO PIX",
              "sugestao": "5 dias úteis"
            },
            " da decisão, para chave de titularidade do Cliente."
          ],
          "clausula": "8.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Créditos promocionais utilizados no Agendamento são restituídos como crédito na Plataforma, observada a validade original da campanha, e não em dinheiro."
          ],
          "clausula": "8.4"
        }
      ]
    },
    {
      "numero": "9",
      "titulo": "Contestação de cobrança",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Qualquer divergência de valor cobrado deve ser comunicada ao suporte da Easy Faxina imediatamente e, em qualquer caso, no prazo de ",
            {
              "campo": "PRAZO DE CONTESTAÇÃO",
              "sugestao": "24 horas"
            },
            " da emissão da cobrança."
          ],
          "clausula": "9.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Recebida a contestação, a Easy Faxina pode suspender a cobrança ou a liberação da custódia até a conclusão da análise."
          ],
          "clausula": "9.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não havendo contestação no prazo, a cobrança é considerada autorizada, sem prejuízo dos direitos assegurados ao consumidor pela legislação aplicável."
          ],
          "clausula": "9.3"
        }
      ]
    },
    {
      "numero": "10",
      "titulo": "Nota fiscal",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina emite documento fiscal relativo à taxa de serviço por ela cobrada."
          ],
          "clausula": "10.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O documento fiscal relativo ao serviço de limpeza é de responsabilidade exclusiva do Profissional, quando a legislação o exigir, cabendo ao Cliente solicitá-lo diretamente ao Profissional."
          ],
          "clausula": "10.2"
        }
      ]
    },
    {
      "numero": "11",
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
          "clausula": "11.1"
        }
      ]
    }
  ]
};
