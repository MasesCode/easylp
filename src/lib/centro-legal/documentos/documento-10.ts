import type { DocumentoLegal } from "@/lib/centro-legal/tipos";

export const DOCUMENTO_10: DocumentoLegal = {
  "numero": "10",
  "slug": "verificacao-e-seguranca",
  "titulo": "Política de verificação de identidade e segurança operacional",
  "resumo": "Descreve as verificações que a Easy Faxina realiza antes e durante a permanência na Plataforma — documentos, conferência biométrica, antecedentes criminais, referências — o que o selo de verificação significa, o que ele não garante, e as medidas de segurança do Atendimento, como check-in com identificação e botão de denúncia.",
  "aplicaSe": "Clientes e Profissionais",
  "versao": "1.0",
  "secoes": [
    {
      "numero": "1",
      "titulo": "Finalidade",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As verificações descritas neste documento têm finalidade exclusiva de ",
            {
              "negrito": "segurança"
            },
            " dos Usuários e de prevenção a fraude."
          ],
          "clausula": "1.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A realização de verificações ",
            {
              "negrito": "não caracteriza"
            },
            " processo seletivo, contratação, supervisão, fiscalização, subordinação ou qualquer forma de vínculo empregatício entre a Easy Faxina e o Profissional, conforme o ",
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
            "A Easy Faxina reconhece que o serviço de limpeza é prestado no interior de residências e de estabelecimentos, expondo a privacidade, a intimidade e o patrimônio do Cliente, bem como a integridade física do Profissional, o que justifica as medidas aqui previstas."
          ],
          "clausula": "1.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O tratamento dos dados coletados nas verificações observa integralmente o ",
            {
              "documento": "04",
              "texto": "Documento nº 04"
            },
            ", em especial quanto ao consentimento específico para dado biométrico, aos prazos de conservação e aos direitos do titular."
          ],
          "clausula": "1.4"
        }
      ]
    },
    {
      "numero": "2",
      "titulo": "Verificação na entrada — profissional",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Antes da liberação do perfil, o Profissional deve apresentar:"
          ],
          "clausula": "2.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "documento oficial de identidade com foto, frente e verso, legível e dentro da validade;"
            ],
            [
              "autorretrato para conferência biométrica com a imagem do documento;"
            ],
            [
              "CPF regular;"
            ],
            [
              "comprovante de endereço residencial atualizado;"
            ],
            [
              "certidão de antecedentes criminais da Polícia Federal e, quando disponível, da Polícia Civil do estado de domicílio;"
            ],
            [
              "certidão de distribuição criminal da Justiça Estadual e da Justiça Federal;"
            ],
            [
              "dados bancários de conta ou chave PIX de sua própria titularidade;"
            ],
            [
              "quando aplicável, comprovante de inscrição como Microempreendedor Individual ou de inscrição no CNPJ."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Profissional pode indicar até ",
            {
              "campo": "QUANTIDADE DE REFERÊNCIAS",
              "sugestao": "3"
            },
            " referências profissionais por categoria de serviço pretendida, limitadas ao primeiro nome e ao telefone de contato de cada referência, que podem ser contatadas pela Easy Faxina para colher depoimento."
          ],
          "clausula": "2.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode contratar terceiros especializados para realizar a conferência biométrica, a validação documental e a consulta de antecedentes, hipótese em que haverá uso compartilhado dos dados estritamente necessários, nos termos do ",
            {
              "documento": "04",
              "texto": "Documento nº 04"
            },
            "."
          ],
          "clausula": "2.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O cadastro pode ser recusado, sem direito a indenização, quando: os documentos forem ilegíveis, divergentes, falsos ou de terceiro; a conferência biométrica não confirmar a identidade; houver registro de condenação ou de processo em curso por crime que a Easy Faxina, de forma motivada, entenda incompatível com a atividade exercida no interior de imóvel de terceiro, em especial crimes contra a vida, contra a liberdade pessoal, contra o patrimônio, contra a dignidade sexual e crimes hediondos; ou quando houver outro indício objetivo de risco a Usuários."
          ],
          "clausula": "2.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A análise prevista na cláusula 2.4 é individualizada, considera a natureza do fato, o tempo decorrido e a situação processual, e o Profissional pode apresentar esclarecimentos e documentos antes da decisão final."
          ],
          "clausula": "2.5"
        }
      ]
    },
    {
      "numero": "3",
      "titulo": "Verificação na entrada — cliente",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Do Cliente são exigidos, no mínimo, nome completo, CPF ou CNPJ, telefone celular confirmado por código e e-mail válido."
          ],
          "clausula": "3.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode exigir, de forma adicional e motivada, a apresentação de documento de identidade com foto, de autorretrato ou de confirmação de titularidade do meio de pagamento, em especial quando houver indício de fraude, histórico de Chargeback, ocorrência registrada por Profissional ou divergência cadastral."
          ],
          "clausula": "3.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não atendida a exigência da cláusula 3.2, as funcionalidades da Conta podem permanecer bloqueadas."
          ],
          "clausula": "3.3"
        }
      ]
    },
    {
      "numero": "4",
      "titulo": "Verificação continuada",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode reconferir documentos, certidões e dados cadastrais a qualquer momento durante a permanência do Usuário na Plataforma, com a periodicidade de ",
            {
              "campo": "PERIODICIDADE DA RECONFERÊNCIA",
              "sugestao": "12 meses"
            },
            " para certidões de antecedentes de Profissionais."
          ],
          "clausula": "4.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Não atendida a solicitação de atualização no prazo informado, o acesso pode ser suspenso até o envio do que foi solicitado."
          ],
          "clausula": "4.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Verificado fato novo incompatível com a atividade, aplica-se o ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "4.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode exigir nova conferência biométrica como condição de acesso, de aceite de Agendamento ou de solicitação de saque, especialmente quando houver troca de dispositivo, alteração de dados bancários ou indício de uso da Conta por terceiro."
          ],
          "clausula": "4.4"
        }
      ]
    },
    {
      "numero": "5",
      "titulo": "O que o selo de verificação significa",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O selo ou indicação de perfil verificado exibido na Plataforma significa, exclusivamente, que o Profissional apresentou os documentos da cláusula 2.1 e que as verificações então realizadas não apontaram impedimento."
          ],
          "clausula": "5.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O selo ",
            {
              "negrito": "não constitui"
            },
            " garantia, endosso, atestado de qualidade, certificação técnica, fiança ou seguro, e ",
            {
              "negrito": "não assegura"
            },
            " que o Atendimento transcorrerá sem incidente."
          ],
          "clausula": "5.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As verificações refletem a informação disponível na data em que foram realizadas e não alcançam fatos posteriores ou não registrados em bases consultáveis."
          ],
          "clausula": "5.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A exibição do selo não afasta o dever de cautela do Cliente, inclusive quanto à conferência de identidade no check-in e à guarda de objetos de valor."
          ],
          "clausula": "5.4"
        }
      ]
    },
    {
      "numero": "6",
      "titulo": "Segurança no atendimento",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Check-in com identificação."
            },
            " O Atendimento se inicia com o registro de check-in pelo Profissional, com confirmação de identidade e de localização. A Plataforma exibe ao Cliente o nome e a foto do Profissional esperado."
          ],
          "clausula": "6.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Conferência pelo Cliente."
            },
            " O Cliente deve conferir se a pessoa presente corresponde ao perfil exibido e, havendo divergência, não permitir o início do serviço e acionar imediatamente o canal de denúncia, com cancelamento sem ônus nos termos do ",
            {
              "documento": "07",
              "texto": "Documento nº 07"
            },
            "."
          ],
          "clausula": "6.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Acompanhamento em tempo real."
            },
            " A Plataforma disponibiliza o status do Atendimento, incluindo aceite, deslocamento, chegada, início, conclusão e confirmação."
          ],
          "clausula": "6.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Botão de denúncia."
            },
            " A Plataforma disponibiliza, a Clientes e a Profissionais, canal destacado para denunciar conduta inadequada, risco, assédio, discriminação, ameaça, suspeita de crime ou qualquer violação do Centro Legal, acessível antes, durante e após o Atendimento."
          ],
          "clausula": "6.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Suporte prioritário."
            },
            " Denúncias que envolvam risco à integridade física recebem tratamento prioritário e podem acarretar a inativação cautelar imediata da Conta envolvida."
          ],
          "clausula": "6.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Mascaramento de contato."
            },
            " A Plataforma pode intermediar ou mascarar números de telefone e endereços de e-mail, de modo que a comunicação ocorra sem exposição direta dos dados de contato."
          ],
          "clausula": "6.6"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Divulgação restrita de endereço."
            },
            " O endereço completo do Cliente é revelado ao Profissional somente após o aceite do Agendamento, e o endereço residencial do Profissional nunca é revelado ao Cliente."
          ],
          "clausula": "6.7"
        }
      ]
    },
    {
      "numero": "7",
      "titulo": "Deveres de segurança dos usuários",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente deve: informar previamente o nome do Profissional à portaria ou ao controle de acesso, quando exigido; guardar objetos de valor antes do Atendimento; informar a existência de câmeras de monitoramento interno; manter o local em condições seguras; e não solicitar tarefa que exponha o Profissional a risco."
          ],
          "clausula": "7.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Profissional deve: comparecer pessoalmente e identificar-se; não levar terceiros não cadastrados; utilizar equipamento de proteção adequado; não permanecer no local na ausência de pessoa maior de 18 (dezoito) anos e plenamente capaz; e comunicar imediatamente qualquer risco ou irregularidade."
          ],
          "clausula": "7.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Nenhuma das partes deve registrar imagem da outra sem consentimento, ressalvados os registros realizados pelas ferramentas da própria Plataforma."
          ],
          "clausula": "7.3"
        }
      ]
    },
    {
      "numero": "8",
      "titulo": "Tratamento das denúncias",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Toda denúncia é registrada, recebe protocolo e é analisada pela equipe responsável, que pode ouvir ambas as partes, solicitar evidências e consultar os registros da Plataforma."
          ],
          "clausula": "8.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A identidade do denunciante é preservada perante a parte denunciada sempre que possível, ressalvadas as hipóteses em que a revelação for indispensável ao exercício de defesa ou exigida por autoridade."
          ],
          "clausula": "8.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Denúncia manifestamente falsa, feita de má-fé ou com o propósito de prejudicar, sujeita o denunciante às medidas do ",
            {
              "documento": "13",
              "texto": "Documento nº 13"
            },
            "."
          ],
          "clausula": "8.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina pode comunicar fatos que configurem ilícito penal às autoridades competentes e colaborar com a investigação, nos termos do ",
            {
              "documento": "04",
              "texto": "Documento nº 04"
            },
            "."
          ],
          "clausula": "8.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O desfecho da denúncia é informado ao denunciante, observados os limites de confidencialidade e de proteção de dados dos envolvidos."
          ],
          "clausula": "8.5"
        }
      ]
    },
    {
      "numero": "9",
      "titulo": "Limites",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As medidas deste documento reduzem riscos, mas ",
            {
              "negrito": "não os eliminam"
            },
            ". A Easy Faxina não responde por conduta ilícita praticada por um Usuário contra o outro, nos termos do ",
            {
              "documento": "01",
              "texto": "Documento nº 01"
            },
            "."
          ],
          "clausula": "9.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina não realiza vigilância, monitoramento por vídeo ou acompanhamento presencial do Atendimento."
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
