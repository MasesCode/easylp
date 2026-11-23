import type { DocumentoLegal } from "@/lib/centro-legal/tipos";

export const DOCUMENTO_02: DocumentoLegal = {
  "numero": "02",
  "slug": "condicoes-para-clientes",
  "titulo": "Condições de contratação para clientes",
  "resumo": "Regras do ciclo de contratação visto pelo Cliente: como o Agendamento é criado e aceito, o que o Cliente precisa providenciar, o que acontece no dia do Atendimento, como o serviço é confirmado e qual conduta é esperada de quem recebe uma profissional em sua casa.",
  "aplicaSe": "Clientes — quem contrata serviços de limpeza pela Plataforma",
  "versao": "1.0",
  "secoes": [
    {
      "numero": "1",
      "titulo": "Objeto",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Este documento complementa os Termos Gerais de Uso (",
            {
              "documento": "01",
              "texto": "Documento nº 01"
            },
            ") e regula especificamente a posição do Cliente na contratação de Serviços de Limpeza por meio da Plataforma."
          ],
          "clausula": "1.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Ao criar um Agendamento, o Cliente declara ter lido e aceito este documento, a Política de Pagamentos (",
            {
              "documento": "06",
              "texto": "Documento nº 06"
            },
            "), a Política de Cancelamento (",
            {
              "documento": "07",
              "texto": "Documento nº 07"
            },
            ") e o Código de Conduta (",
            {
              "documento": "11",
              "texto": "Documento nº 11"
            },
            ")."
          ],
          "clausula": "1.2"
        }
      ]
    },
    {
      "numero": "2",
      "titulo": "Criação do agendamento",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Para criar um Agendamento, o Cliente informa: endereço completo do imóvel, tipo e metragem aproximada do imóvel, número de ambientes, tipo de serviço desejado, data, horário de início, duração estimada e observações relevantes sobre o local."
          ],
          "clausula": "2.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente declara que as informações do Agendamento são verdadeiras e completas. Informação incorreta sobre metragem, número de ambientes, estado de conservação, presença de animais, obra em andamento ou condições de acesso pode ensejar o ajuste de preço e de duração previsto na cláusula 6 ou a interrupção do Atendimento nos termos da cláusula 8."
          ],
          "clausula": "2.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O preço é apresentado ao Cliente antes da confirmação, calculado a partir dos parâmetros informados, do tipo de serviço, da duração contratada, da região e das condições de oferta e demanda no período solicitado."
          ],
          "clausula": "2.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Agendamento somente se perfaz com (i) a confirmação do Cliente, (ii) a autorização do meio de pagamento e (iii) o aceite de um Profissional. Enquanto não houver aceite de Profissional, o Agendamento permanece em busca e pode não ser atendido."
          ],
          "clausula": "2.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Plataforma pode sugerir Profissionais compatíveis com base em localização, histórico, avaliações, especialidade e disponibilidade. A escolha final é do Cliente, quando a funcionalidade estiver disponível, e não implica garantia da Easy Faxina quanto ao resultado do serviço."
          ],
          "clausula": "2.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não havendo Profissional disponível para a data e região solicitadas, o Agendamento é encerrado sem custo e o valor pré-autorizado é liberado na forma do ",
            {
              "documento": "06",
              "texto": "Documento nº 06"
            },
            "."
          ],
          "clausula": "2.6"
        }
      ]
    },
    {
      "numero": "3",
      "titulo": "Serviços abrangidos e não abrangidos",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Estão abrangidos os Serviços de Limpeza descritos na Plataforma, nas modalidades e durações nela ofertadas, entre elas faxina padrão, faxina pesada, limpeza pós-obra, limpeza de manutenção recorrente e organização de ambientes."
          ],
          "clausula": "3.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Não estão abrangidos"
            },
            " e não podem ser solicitados ao Profissional, mesmo com oferta de pagamento adicional:"
          ],
          "clausula": "3.2"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "cuidado de crianças, idosos, pessoas com deficiência, enfermos ou animais, em qualquer extensão;"
            ],
            [
              "preparo de refeições, salvo quando a modalidade contratada expressamente o incluir;"
            ],
            [
              "limpeza de área externa em altura, fachada, telhado, caixa d'água, poço, cisterna ou qualquer local que exija equipamento de proteção contra queda;"
            ],
            [
              "manuseio de produtos químicos de uso controlado, aplicação de inseticidas profissionais, dedetização e desinsetização;"
            ],
            [
              "serviços de manutenção predial, elétrica, hidráulica, de gás, pintura, montagem de móveis ou reparos em geral;"
            ],
            [
              "remoção de entulho, de lixo em volume incompatível com o serviço contratado, de resíduos biológicos, de dejetos de animais em grande quantidade ou de material cortante exposto;"
            ],
            [
              "movimentação de móveis, eletrodomésticos ou objetos pesados sem auxílio adequado;"
            ],
            [
              "qualquer tarefa estranha ao escopo contratado ou que coloque em risco a integridade física do Profissional."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Profissional pode recusar, no local, a execução de tarefa não abrangida ou que represente risco, sem que isso configure descumprimento do Agendamento."
          ],
          "clausula": "3.3"
        }
      ]
    },
    {
      "numero": "4",
      "titulo": "Obrigações do cliente",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente obriga-se a:"
          ],
          "clausula": "4.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "garantir o acesso do Profissional ao imóvel na data e no horário agendados, inclusive junto à portaria, ao controle de acesso ou ao condomínio, informando previamente o nome do Profissional quando exigido;"
            ],
            [
              "estar presente pessoalmente ou designar pessoa maior de 18 (dezoito) anos e plenamente capaz para receber e acompanhar o Atendimento;"
            ],
            [
              "fornecer todos os produtos, utensílios e equipamentos de limpeza necessários à execução do serviço, em quantidade suficiente e em condições de uso, salvo quando a modalidade contratada expressamente incluir o fornecimento de materiais;"
            ],
            [
              "disponibilizar água, energia elétrica e condições mínimas de higiene e segurança no local;"
            ],
            [
              "informar previamente a existência de animais, câmeras de monitoramento interno, obra em andamento, infiltração, instalação precária, objetos de alto valor ou qualquer circunstância relevante;"
            ],
            [
              "guardar joias, dinheiro, documentos e objetos de alto valor antes do início do Atendimento;"
            ],
            [
              "tratar o Profissional com respeito e urbanidade, sem qualquer forma de discriminação, assédio, constrangimento ou exigência estranha ao serviço contratado;"
            ],
            [
              "confirmar a conclusão do Atendimento na Plataforma, ou registrar o problema encontrado, dentro do prazo do ",
              {
                "documento": "06",
                "texto": "Documento nº 06"
              },
              "."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente não pode exigir do Profissional o uso de uniforme, crachá, equipamento ou produto específico de sua propriedade como condição do serviço, nem impor jornada, registro de ponto, controle de intervalo ou subordinação de qualquer natureza, sob pena de caracterizar relação estranha ao objeto da Plataforma."
          ],
          "clausula": "4.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente não pode fotografar, filmar ou divulgar imagem do Profissional sem seu consentimento, ressalvada a conferência de identidade feita pelas ferramentas da própria Plataforma."
          ],
          "clausula": "4.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "A supervisão do serviço é de responsabilidade exclusiva do Cliente."
            },
            " Não havendo no local pessoa maior de 18 (dezoito) anos e plenamente capaz, o Profissional não deve permanecer no imóvel nem iniciar o Atendimento, hipótese em que se aplica a regra de ausência do ",
            {
              "documento": "07",
              "texto": "Documento nº 07"
            },
            "."
          ],
          "clausula": "4.4"
        }
      ]
    },
    {
      "numero": "5",
      "titulo": "Check-in, acompanhamento e check-out",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "No início do Atendimento, o Profissional registra o check-in na Plataforma, com confirmação de identidade e de localização. O Cliente deve conferir se a pessoa presente corresponde ao perfil exibido no aplicativo."
          ],
          "clausula": "5.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Verificada divergência entre a pessoa presente e o perfil exibido, o Cliente ",
            {
              "negrito": "não deve permitir o início do serviço"
            },
            " e deve comunicar a Easy Faxina imediatamente pelo canal de denúncia, para apuração na forma dos ",
            {
              "documento": "10",
              "texto": "Documentos nº 10"
            },
            " e ",
            {
              "documento": "13",
              "texto": "nº 13"
            },
            "."
          ],
          "clausula": "5.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente pode acompanhar pela Plataforma o status do Atendimento, entre eles o aceite, o deslocamento, a chegada, o início, a conclusão e a confirmação."
          ],
          "clausula": "5.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Ao final, o Profissional registra o check-out. A partir desse momento começa a contar o prazo para a confirmação do serviço ou para o registro de problema, nos termos do ",
            {
              "documento": "06",
              "texto": "Documento nº 06"
            },
            "."
          ],
          "clausula": "5.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os registros de check-in, geolocalização, horários e mensagens constituem prova em eventual apuração de controvérsia."
          ],
          "clausula": "5.5"
        }
      ]
    },
    {
      "numero": "6",
      "titulo": "Ajuste de escopo, preço e duração",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Constatada no local divergência relevante entre as informações do Agendamento e a situação real do imóvel, o Profissional deve registrar a divergência na Plataforma, com evidências, antes de prosseguir."
          ],
          "clausula": "6.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Plataforma apresentará ao Cliente a proposta de ajuste de duração, de escopo ou de preço. O ajuste somente produz efeito com o aceite expresso do Cliente na Plataforma."
          ],
          "clausula": "6.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não havendo aceite do ajuste, o Atendimento é executado no escopo e na duração originalmente contratados, ficando a cargo do Cliente a parte do imóvel ou da tarefa não alcançada no tempo disponível."
          ],
          "clausula": "6.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente pode solicitar extensão de duração durante o Atendimento, mediante disponibilidade do Profissional e aceite do valor adicional na Plataforma."
          ],
          "clausula": "6.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "É vedado o pagamento de qualquer valor diretamente ao Profissional"
            },
            ", em dinheiro, transferência, PIX ou qualquer outro meio externo, inclusive a título de extensão, acréscimo ou gratificação. Gratificações, quando a funcionalidade estiver disponível, são oferecidas pela própria Plataforma e repassadas integralmente ao Profissional."
          ],
          "clausula": "6.5"
        }
      ]
    },
    {
      "numero": "7",
      "titulo": "Serviços recorrentes",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente pode contratar Atendimentos recorrentes, nas periodicidades ofertadas na Plataforma, com cobrança a cada Atendimento."
          ],
          "clausula": "7.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A recorrência pode ser alterada, pausada ou encerrada pelo Cliente na Plataforma, observado o prazo de antecedência do ",
            {
              "documento": "07",
              "texto": "Documento nº 07"
            },
            " em relação ao próximo Atendimento já agendado."
          ],
          "clausula": "7.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina procura manter o mesmo Profissional nos Atendimentos recorrentes, mas não garante a continuidade, que depende da disponibilidade e da permanência do Profissional na Plataforma."
          ],
          "clausula": "7.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A indisponibilidade do Profissional habitual não caracteriza descumprimento, hipótese em que a Plataforma oferece Profissional substituto ou, não havendo substituto, encerra o Atendimento sem custo."
          ],
          "clausula": "7.4"
        }
      ]
    },
    {
      "numero": "8",
      "titulo": "Interrupção do atendimento",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Profissional pode interromper o Atendimento, com registro na Plataforma, nas seguintes hipóteses:"
          ],
          "clausula": "8.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "ausência de pessoa maior de 18 (dezoito) anos e plenamente capaz no local;"
            ],
            [
              "ausência de produtos, utensílios, água ou energia elétrica indispensáveis à execução;"
            ],
            [
              "risco à sua integridade física, à sua saúde ou à sua segurança, inclusive risco sanitário, estrutural ou elétrico;"
            ],
            [
              "exigência de tarefa não abrangida pela cláusula 3.2 ou estranha ao escopo contratado;"
            ],
            [
              "assédio, discriminação, ameaça, ofensa, constrangimento ou qualquer conduta vedada pelo ",
              {
                "documento": "11",
                "texto": "Documento nº 11"
              },
              ";"
            ],
            [
              "presença de pessoa em estado que comprometa a segurança do Atendimento;"
            ],
            [
              "solicitação de pagamento ou de contratação fora da Plataforma."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A interrupção fundada em conduta ou em omissão do Cliente é equiparada a cancelamento pelo Cliente no curso do Atendimento, com os efeitos financeiros do ",
            {
              "documento": "07",
              "texto": "Documento nº 07"
            },
            ", sem prejuízo da apuração do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "8.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A interrupção sem causa, por iniciativa do Profissional, é tratada como descumprimento do Profissional, com reembolso integral ao Cliente e apuração na forma do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "8.3"
        }
      ]
    },
    {
      "numero": "9",
      "titulo": "Confirmação, garantia e problemas no serviço",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A liberação do valor ao Profissional depende da confirmação do Cliente ou do decurso do prazo automático, na forma do ",
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
            "Insatisfação quanto à qualidade do serviço é tratada pela Garantia de Satisfação do ",
            {
              "documento": "08",
              "texto": "Documento nº 08"
            },
            ", que prevê refação do serviço, e, nas hipóteses nele previstas, reembolso parcial ou integral."
          ],
          "clausula": "9.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Dano a bem do imóvel é tratado pelo ",
            {
              "documento": "09",
              "texto": "Documento nº 09"
            },
            "."
          ],
          "clausula": "9.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Suspeita de subtração de bem, de violação de privacidade ou de qualquer ilícito deve ser comunicada imediatamente pelo canal de denúncia e, quando for o caso, à autoridade policial, cabendo ao Cliente registrar o boletim de ocorrência para instrução da apuração."
          ],
          "clausula": "9.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A confirmação do Atendimento sem registro de ressalva, ou o decurso do prazo sem manifestação, não afasta os direitos assegurados ao consumidor pela legislação aplicável, mas pode dificultar a apuração dos fatos e a comprovação do alegado."
          ],
          "clausula": "9.5"
        }
      ]
    },
    {
      "numero": "10",
      "titulo": "Conduta e consequências para o cliente",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Está sujeito às medidas do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            " o Cliente que:"
          ],
          "clausula": "10.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "reiteradamente deixar de dar acesso ao imóvel na data e no horário agendados;"
            ],
            [
              "cancelar Atendimentos de forma reiterada e injustificada;"
            ],
            [
              "praticar qualquer conduta vedada pelo ",
              {
                "documento": "11",
                "texto": "Documento nº 11"
              },
              ", em especial assédio, discriminação ou ameaça;"
            ],
            [
              "propor ou aceitar contratação ou pagamento fora da Plataforma;"
            ],
            [
              "registrar avaliação ou reclamação falsa com o propósito de obter reembolso, refação ou vantagem indevida;"
            ],
            [
              "deixar de quitar valor devido ou gerar Chargeback indevido, nos termos do ",
              {
                "documento": "14",
                "texto": "Documento nº 14"
              },
              ";"
            ],
            [
              "exigir tarefa vedada pela cláusula 3.2 ou impor condição de trabalho degradante."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Enquanto houver valor em aberto, as funcionalidades da Conta podem permanecer bloqueadas."
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
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Em caso de divergência entre este documento e o ",
            {
              "documento": "01",
              "texto": "Documento nº 01"
            },
            " quanto à posição do Cliente, prevalece este documento."
          ],
          "clausula": "11.2"
        }
      ]
    }
  ]
};
