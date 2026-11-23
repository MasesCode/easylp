import type { DocumentoLegal } from "@/lib/centro-legal/tipos";

export const DOCUMENTO_04: DocumentoLegal = {
  "numero": "04",
  "slug": "privacidade",
  "titulo": "Política de privacidade e tratamento de dados pessoais",
  "resumo": "Política elaborada conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Descreve quais dados pessoais a Easy Faxina trata, com que finalidade e base legal, com quem os compartilha, por quanto tempo os conserva, como os protege e como o titular exerce seus direitos.",
  "aplicaSe": "Clientes, Profissionais, Visitantes e demais titulares de dados",
  "versao": "1.0",
  "secoes": [
    {
      "numero": "1",
      "titulo": "Controlador e encarregado",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O controlador dos dados pessoais tratados na Plataforma é ",
            {
              "campo": "RAZÃO SOCIAL"
            },
            ", inscrita no CNPJ sob o nº ",
            {
              "campo": "CNPJ"
            },
            ", com sede em ",
            {
              "campo": "ENDEREÇO COMPLETO DA SEDE"
            },
            "."
          ],
          "clausula": "1.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Encarregado pelo Tratamento de Dados Pessoais (DPO) é ",
            {
              "campo": "NOME DO ENCARREGADO"
            },
            ", que pode ser contatado pelo e-mail ",
            {
              "campo": "E-MAIL DO DPO"
            },
            " ou por correspondência ao endereço da sede, com a indicação \"Encarregado de Dados\"."
          ],
          "clausula": "1.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Esta Política integra o Centro Legal Easy Faxina e deve ser lida em conjunto com os Termos Gerais de Uso (",
            {
              "documento": "01",
              "texto": "Documento nº 01"
            },
            ") e com a Política de Cookies (",
            {
              "documento": "05",
              "texto": "Documento nº 05"
            },
            ")."
          ],
          "clausula": "1.3"
        }
      ]
    },
    {
      "numero": "2",
      "titulo": "Conceitos",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Para os fins desta Política:"
          ],
          "clausula": "2.1"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              {
                "negrito": "Dado pessoal"
              },
              ": informação relacionada a pessoa natural identificada ou identificável."
            ],
            [
              {
                "negrito": "Dado pessoal sensível"
              },
              ": dado sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico."
            ],
            [
              {
                "negrito": "Tratamento"
              },
              ": toda operação realizada com dados pessoais, como coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação, controle, modificação, comunicação, transferência, difusão ou extração."
            ],
            [
              {
                "negrito": "Titular"
              },
              ": a pessoa natural a quem se referem os dados pessoais."
            ],
            [
              {
                "negrito": "Controlador"
              },
              ": quem toma as decisões sobre o tratamento."
            ],
            [
              {
                "negrito": "Operador"
              },
              ": quem trata dados pessoais em nome do controlador."
            ],
            [
              {
                "negrito": "Anonimização"
              },
              ": processo pelo qual o dado perde a possibilidade de associação a um indivíduo."
            ]
          ]
        }
      ]
    },
    {
      "numero": "3",
      "titulo": "Dados que tratamos — clientes",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados cadastrais"
            },
            ": nome completo, CPF, data de nascimento, telefone celular, e-mail, senha em formato criptografado e, no caso de pessoa jurídica, razão social, nome fantasia e CNPJ."
          ],
          "clausula": "3.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados do imóvel e do Atendimento"
            },
            ": endereço completo com CEP, complemento, instruções de acesso, tipo e metragem do imóvel, número de ambientes, presença de animais, fotos do ambiente enviadas voluntariamente, escopo, data, horário e histórico de Agendamentos."
          ],
          "clausula": "3.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados de pagamento"
            },
            ": número do cartão, bandeira, validade, nome e CPF do titular do cartão, código de segurança e, quando aplicável, dados de cobrança por PIX ou boleto. Os dados completos de cartão são tratados em ambiente dos parceiros de pagamento, e a Easy Faxina conserva apenas identificadores parciais, como os quatro últimos dígitos e a bandeira."
          ],
          "clausula": "3.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados de comunicação"
            },
            ": mensagens e imagens trocadas no chat da Plataforma, registros de atendimento ao suporte, gravações de chamadas telefônicas de atendimento e respostas a pesquisas de satisfação."
          ],
          "clausula": "3.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados de navegação e de dispositivo"
            },
            ": endereço IP, registros de acesso com data e hora, identificador do dispositivo, modelo, sistema operacional, versão do aplicativo, páginas e telas visitadas, cliques, tempo de permanência, Agendamentos abertos e cancelados e dados de cookies, na forma do ",
            {
              "documento": "05",
              "texto": "Documento nº 05"
            },
            "."
          ],
          "clausula": "3.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados de geolocalização"
            },
            ": localização aproximada ou precisa, quando o titular autoriza o acesso nas configurações do dispositivo, para sugerir endereço, estimar deslocamento e acompanhar o status do Atendimento."
          ],
          "clausula": "3.6"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados de prevenção a fraude"
            },
            ": identificador do dispositivo, histórico de transações, padrão de uso, imagem de documento e autorretrato, quando solicitados para confirmação de identidade."
          ],
          "clausula": "3.7"
        }
      ]
    },
    {
      "numero": "4",
      "titulo": "Dados que tratamos — profissionais",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados cadastrais"
            },
            ": nome completo, nome social, CPF, data de nascimento, filiação, telefone celular, e-mail, endereço residencial, foto de perfil e, quando houver, CNPJ, razão social e nome fantasia."
          ],
          "clausula": "4.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados de verificação e segurança"
            },
            ": imagem de documento oficial de identidade, frente e verso; autorretrato para conferência biométrica; comprovante de endereço; certidões de antecedentes criminais e certidões de distribuição cível e criminal; referências profissionais indicadas pelo próprio Profissional, limitadas a primeiro nome e telefone de contato; e o resultado das consultas realizadas."
          ],
          "clausula": "4.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dado biométrico"
            },
            ": o cotejo entre o autorretrato e a imagem do documento constitui tratamento de ",
            {
              "negrito": "dado pessoal sensível"
            },
            " e é realizado exclusivamente para confirmar a identidade de quem acessa a Conta e de quem comparece ao Atendimento, nos termos da cláusula 6.4."
          ],
          "clausula": "4.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados financeiros"
            },
            ": banco, agência, número e tipo de conta, chave PIX, titularidade, histórico de repasses e, quando exigido por lei, documentos fiscais emitidos."
          ],
          "clausula": "4.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados operacionais"
            },
            ": serviços ofertados, área de atuação, disponibilidade, Atendimentos aceitos, recusados, cancelados e concluídos, registros de check-in e check-out com data, hora e geolocalização, avaliações recebidas, índices de pontualidade, de cancelamento e de ausência, e tempo de resposta."
          ],
          "clausula": "4.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Dados de comunicação, navegação, dispositivo e prevenção a fraude"
            },
            ", nos mesmos termos das cláusulas 3.4 a 3.7."
          ],
          "clausula": "4.6"
        }
      ]
    },
    {
      "numero": "5",
      "titulo": "Dados de visitantes",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "De quem acessa a Plataforma sem Conta tratamos dados de navegação, de dispositivo e de cookies, além dos dados fornecidos voluntariamente em formulários de contato, de simulação de preço ou de inscrição em comunicações."
          ],
          "clausula": "5.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Os registros de acesso de Visitantes são mantidos pelo prazo legal e, quando possível, tratados de forma anonimizada."
          ],
          "clausula": "5.2"
        }
      ]
    },
    {
      "numero": "6",
      "titulo": "Finalidades e bases legais",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Execução do contrato e procedimentos preliminares"
            },
            " (art. 7º, V, LGPD): viabilizar o cadastro; autenticar o acesso; criar, precificar e processar Agendamentos; identificar e sugerir Profissionais compatíveis; compartilhar com o Profissional os dados necessários à execução do serviço; processar pagamentos, custódia e repasses; operar a Garantia de Satisfação; prestar suporte; viabilizar avaliações; enviar comunicações transacionais sobre os Atendimentos."
          ],
          "clausula": "6.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Cumprimento de obrigação legal ou regulatória"
            },
            " (art. 7º, II, LGPD): guarda de registros de acesso na forma do Marco Civil da Internet; conservação de documentos fiscais e contábeis; atendimento a requisições de autoridade competente e a ordens judiciais; obrigações de prevenção à lavagem de dinheiro aplicáveis aos parceiros de pagamento."
          ],
          "clausula": "6.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Exercício regular de direitos"
            },
            " (art. 7º, VI, LGPD): apuração de ocorrências, de reclamações e de suspeitas de fraude; instrução de defesa em processo judicial, administrativo ou arbitral; cobrança de valores devidos; retenções previstas nos ",
            {
              "documento": "09",
              "texto": "Documentos nº 09"
            },
            " e ",
            {
              "documento": "14",
              "texto": "nº 14"
            },
            "."
          ],
          "clausula": "6.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Consentimento específico e destacado"
            },
            " (art. 7º, I, e art. 11, I, LGPD): tratamento de dado biométrico para conferência de identidade; acesso à geolocalização precisa; envio de comunicações de marketing; uso de nome, imagem, voz ou depoimento em campanhas publicitárias; uso de cookies não essenciais. O consentimento é colhido de forma separada, pode ser revogado a qualquer momento pelos canais indicados nesta Política e sua revogação não afeta a licitude do tratamento realizado anteriormente."
          ],
          "clausula": "6.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Legítimo interesse"
            },
            " (art. 7º, IX, LGPD): prevenção a fraude e à segurança do titular, inclusive verificação de antecedentes; prevenção a Chargeback indevido; moderação de conteúdo e monitoramento do chat para apuração de condutas; melhoria da Plataforma, estudos internos, pesquisa de usabilidade, métricas e relatórios; segmentação de comunicações sobre serviços similares aos já contratados. Nessas hipóteses a Easy Faxina realiza avaliação de impacto quando cabível e assegura ao titular o direito de oposição."
          ],
          "clausula": "6.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Proteção do crédito"
            },
            " (art. 7º, X, LGPD): consulta a bases de agências de crédito e inclusão de Usuário inadimplente em órgãos de proteção ao crédito, hipótese em que podem ser tratados nome completo, CPF ou CNPJ, endereço, telefone, identificador da cobrança e valor devido."
          ],
          "clausula": "6.6"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Proteção da vida ou da incolumidade física"
            },
            " (art. 7º, VII, e art. 11, II, \"e\", LGPD): atuação em situação de emergência, acidente ou risco iminente a Cliente, a Profissional ou a terceiro durante o Atendimento."
          ],
          "clausula": "6.7"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina ",
            {
              "negrito": "não comercializa, não aluga, não cede e não empresta"
            },
            " dados pessoais de seus titulares."
          ],
          "clausula": "6.8"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina não toma decisões unicamente automatizadas que produzam efeitos jurídicos relevantes sobre o titular sem possibilidade de revisão. A ordenação de perfis e as medidas de segurança que se apoiem em processamento automatizado são passíveis de revisão humana por solicitação do titular, nos termos da cláusula 11.1."
          ],
          "clausula": "6.9"
        }
      ]
    },
    {
      "numero": "7",
      "titulo": "Compartilhamento de dados",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Entre Usuários"
            },
            ": para viabilizar o Atendimento, são compartilhados com o Profissional o nome do Cliente, o telefone de contato mascarado ou intermediado pela Plataforma, o endereço completo após o aceite, as informações do imóvel e o escopo do serviço. Com o Cliente são compartilhados o primeiro nome e a inicial do sobrenome do Profissional, sua foto de perfil, sua avaliação média, suas especialidades e seu histórico na Plataforma. Não são compartilhados com o Cliente o endereço residencial, o CPF, os dados bancários nem as certidões do Profissional."
          ],
          "clausula": "7.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Operadores e provedores"
            },
            ": empresas de infraestrutura e hospedagem em nuvem, processamento de pagamento e custódia, envio de e-mail, SMS e notificação, atendimento e suporte, análise de dados, prevenção a fraude, conferência biométrica e consulta de antecedentes, e emissão de documentos fiscais. Esses agentes tratam os dados em nome da Easy Faxina, segundo suas instruções e sob contrato que impõe confidencialidade e medidas de segurança."
          ],
          "clausula": "7.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Seguradoras e reguladores de sinistro"
            },
            ": na hipótese de acionamento da cobertura prevista no ",
            {
              "documento": "09",
              "texto": "Documento nº 09"
            },
            ", com os dados estritamente necessários à análise da ocorrência."
          ],
          "clausula": "7.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Autoridades"
            },
            ": órgãos públicos, autoridade policial, Ministério Público, autoridades fiscais, Autoridade Nacional de Proteção de Dados e Poder Judiciário, no cumprimento de obrigação legal, de requisição regular ou de ordem judicial."
          ],
          "clausula": "7.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Reorganização societária"
            },
            ": em caso de fusão, aquisição, incorporação, cisão ou transferência de ativos, os dados podem ser transferidos ao sucessor, que ficará sujeito a esta Política até que o titular seja informado de eventual alteração."
          ],
          "clausula": "7.5"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Parceiros comerciais"
            },
            ": a divulgação de produtos e serviços de parceiros ocorre pelos canais da própria Easy Faxina, sem transferência de dados identificáveis ao parceiro, salvo mediante consentimento específico do titular. A relação de parceiros pode ser solicitada ao Encarregado."
          ],
          "clausula": "7.6"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            {
              "negrito": "Transferência internacional"
            },
            ": alguns operadores podem armazenar ou processar dados fora do Brasil. Nessas hipóteses a Easy Faxina adota as salvaguardas do art. 33 da LGPD, incluindo cláusulas contratuais específicas e a verificação do nível de proteção adotado no país de destino."
          ],
          "clausula": "7.7"
        }
      ]
    },
    {
      "numero": "8",
      "titulo": "Prazos de conservação",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Dados cadastrais e de Atendimento: por todo o período em que a Conta estiver ativa."
          ],
          "clausula": "8.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Após o encerramento da Conta, os dados necessários ao cumprimento de obrigação legal, à defesa em processo e à prevenção a fraude são conservados pelos seguintes prazos, contados do encerramento ou do último Atendimento:"
          ],
          "clausula": "8.2"
        },
        {
          "tipo": "lista",
          "itens": [
            [
              "registros de acesso a aplicação de internet: ",
              {
                "campo": "PRAZO",
                "sugestao": "6 meses"
              },
              ";"
            ],
            [
              "dados fiscais, contábeis e de pagamento: ",
              {
                "campo": "PRAZO",
                "sugestao": "5 anos"
              },
              ";"
            ],
            [
              "dados necessários à defesa em pretensões de natureza civil e consumerista: ",
              {
                "campo": "PRAZO",
                "sugestao": "5 anos"
              },
              ";"
            ],
            [
              "documentos de verificação de identidade e certidões de antecedentes de Profissionais: ",
              {
                "campo": "PRAZO",
                "sugestao": "5 anos"
              },
              ";"
            ],
            [
              "registros de ocorrência, denúncia, dano e fraude: ",
              {
                "campo": "PRAZO",
                "sugestao": "5 anos após o encerramento da apuração"
              },
              "."
            ]
          ]
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Encerrados os prazos e não havendo outra hipótese legal que autorize a conservação, os dados são eliminados ou anonimizados."
          ],
          "clausula": "8.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Dados anonimizados podem ser conservados por prazo indeterminado para fins estatísticos, de pesquisa e de melhoria da Plataforma."
          ],
          "clausula": "8.4"
        }
      ]
    },
    {
      "numero": "9",
      "titulo": "Segurança da informação",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Easy Faxina adota medidas técnicas e administrativas para proteger os dados pessoais, entre elas: criptografia em trânsito e em repouso para dados sensíveis e credenciais; armazenamento de senhas apenas em forma de resumo criptográfico; controle de acesso por perfil, com concessão pelo critério da necessidade; registro de auditoria de acessos; segregação de ambientes; cópias de segurança; política interna de segurança e confidencialidade imposta a colaboradores e operadores."
          ],
          "clausula": "9.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Somente colaboradores autorizados têm acesso a dados pessoais, na medida necessária ao exercício de suas atribuições, sujeitos a dever de confidencialidade que subsiste após o término do vínculo."
          ],
          "clausula": "9.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Nenhum sistema é absolutamente invulnerável. A Easy Faxina não responde por acesso indevido decorrente de culpa exclusiva do titular, em especial compartilhamento de senha, uso de dispositivo comprometido ou vítima de golpe por canal externo à Plataforma."
          ],
          "clausula": "9.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Verificado incidente de segurança com risco ou dano relevante aos titulares, a Easy Faxina comunicará a Autoridade Nacional de Proteção de Dados e os titulares afetados em prazo razoável, informando a natureza dos dados, os titulares envolvidos, as medidas técnicas adotadas, os riscos e as providências de mitigação."
          ],
          "clausula": "9.4"
        }
      ]
    },
    {
      "numero": "10",
      "titulo": "Canais e consentimento para comunicações",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Comunicações transacionais e de segurança relativas aos Atendimentos e à Conta são inerentes ao serviço e não dependem de consentimento, não podendo ser recusadas enquanto a Conta estiver ativa."
          ],
          "clausula": "10.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Comunicações de marketing dependem de consentimento e podem ser recusadas a qualquer momento pelo link de descadastro, pelas preferências do aplicativo ou por solicitação ao Encarregado."
          ],
          "clausula": "10.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Pesquisas de satisfação relativas a Atendimento realizado são tratadas como comunicação transacional."
          ],
          "clausula": "10.3"
        }
      ]
    },
    {
      "numero": "11",
      "titulo": "Direitos do titular",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O titular pode, a qualquer momento, solicitar: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos, inexatos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei; portabilidade a outro fornecedor, observados os segredos comercial e industrial; eliminação dos dados tratados com base em consentimento; informação sobre as entidades com as quais houve compartilhamento; informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa; revogação do consentimento; oposição a tratamento fundado em hipótese de dispensa de consentimento; e revisão de decisão tomada unicamente com base em tratamento automatizado."
          ],
          "clausula": "11.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "As solicitações devem ser dirigidas ao Encarregado pelo e-mail ",
            {
              "campo": "E-MAIL DO DPO"
            },
            " e são respondidas em até 15 (quinze) dias, contados do recebimento, podendo ser exigida a confirmação da identidade do solicitante antes do atendimento, como medida de segurança."
          ],
          "clausula": "11.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A eliminação de dados pode ser recusada, total ou parcialmente, quando a conservação for exigida por obrigação legal ou regulatória, para o exercício regular de direitos, para prevenção a fraude ou nas demais hipóteses do art. 16 da LGPD, hipótese em que a recusa é informada ao titular com a respectiva justificativa."
          ],
          "clausula": "11.3"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O encerramento da Conta é solicitado pelas funcionalidades da Plataforma ou pelos canais de atendimento, com análise em até 10 (dez) dias úteis para verificação de Atendimentos e valores pendentes."
          ],
          "clausula": "11.4"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O titular pode apresentar reclamação à Autoridade Nacional de Proteção de Dados."
          ],
          "clausula": "11.5"
        }
      ]
    },
    {
      "numero": "12",
      "titulo": "Dados de crianças e adolescentes",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Plataforma é destinada exclusivamente a maiores de 18 (dezoito) anos e a Easy Faxina não coleta intencionalmente dados de crianças e de adolescentes."
          ],
          "clausula": "12.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Identificada a existência de Conta de menor de 18 (dezoito) anos, a Conta será encerrada e os dados eliminados, ressalvada a conservação exigida por lei."
          ],
          "clausula": "12.2"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O Cliente deve evitar inserir no Agendamento, nas fotos do ambiente ou no chat dados pessoais de crianças e de adolescentes que residam no imóvel. Eventuais dados assim recebidos são tratados apenas na medida do necessário à execução do serviço e no melhor interesse da criança e do adolescente."
          ],
          "clausula": "12.3"
        }
      ]
    },
    {
      "numero": "13",
      "titulo": "Sites e serviços de terceiros",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "A Plataforma pode conter links para sites e serviços de terceiros, que possuem políticas próprias. A Easy Faxina não controla e não responde pelo conteúdo, pela segurança ou pelas práticas de privacidade desses terceiros."
          ],
          "clausula": "13.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "O uso de login social, quando disponível, implica o recebimento pela Easy Faxina dos dados autorizados pelo titular junto ao respectivo provedor."
          ],
          "clausula": "13.2"
        }
      ]
    },
    {
      "numero": "14",
      "titulo": "Alterações desta política",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Esta Política pode ser atualizada para refletir mudanças legais, regulatórias ou operacionais. A versão vigente estará sempre disponível em ",
            {
              "campo": "DOMÍNIO OFICIAL"
            },
            "/centro-legal, com indicação da data de atualização."
          ],
          "clausula": "14.1"
        },
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Alterações relevantes, em especial mudança de finalidade incompatível com a finalidade original, serão comunicadas previamente ao titular pelo e-mail cadastrado, com informação sobre as consequências da eventual discordância e, quando o tratamento se fundar em consentimento, com a possibilidade de revogá-lo."
          ],
          "clausula": "14.2"
        }
      ]
    },
    {
      "numero": "15",
      "titulo": "Lei aplicável",
      "blocos": [
        {
          "tipo": "paragrafo",
          "conteudo": [
            "Esta Política é regida pela Lei nº 13.709/2018, pela Lei nº 12.965/2014 e pelas demais normas aplicáveis da República Federativa do Brasil."
          ],
          "clausula": "15.1"
        }
      ]
    }
  ]
};
