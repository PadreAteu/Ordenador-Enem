let videosJson = [
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/JQfJMJrV5Bk?si=V_iaT1_PocE28-V6\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO de Matemática do FUNDAMENTAL pro ENEM 2026",
                subject: "Matemática (OPCIONAL)",
                desc: "Aula OPCIONAL, caso você tenha MUITA DIFICULDADE em matemática, o básico, bem explicado, sem enrolação, didática mágica."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/_EmywnyCOM0?si=sD28SJdPNgxmu70t\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TODA a MATEMÁTICA do ENEM em 12 horas",
                subject: "Matemática",
                desc: "Aula que explora toda a matemática que mais cai no ENEM, de forma didática e marcante."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/0-A20W9YWIM?si=sNBs8gznVIIPLrWA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO de SISTEMAS para o ENEM 2026",
                subject: "Matemática",
                desc: "Conteúdo OBRIGATÓRIO, domine sistemas de uma forma que você nunca irá esquecer, nem se quiser."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/cBYDah2TJNs?si=GhfgZeJHiWHftgO2\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "Tudo de ESCALAS para o ENEM 2026",
                subject: "Matemática (OPCIONAL)",
                desc: "O que dizer sobre escalas? Uma das matérias mais FUNDAMENTAIS do ENEM, agora explicada de forma mágica e brutal. "
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/1duUBUleN2I?si=XRdQ918QqsAJKIte\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO DE TRIGONOMETRIA PRO ENEM 2026",
                subject: "Matemática (OPCIONAL)",
                desc: "Toda a TRIGONOMETRIA do ENEM, matéria complicada e que engana, mas com a didática mágica, tudo que é difícil fica fácil."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/YJDB9JlZhPA?si=yJ_jT7fquZhEyzhD\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO de LOGARITMO pro ENEM",
                subject: "Matemática (OPCIONAL)",
                desc: "Logaritmo é muito temido, mas é muito fácil, na real, ainda mais se você tiver a melhor didática do Brasil. Essa didática está bem na sua frente, domínio garantido."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/M58XvuZ4Zy8?si=Xl2BMSy7v6V7Wcff\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TODA A FÍSICA DO ENEM 2026 em 12 horas",
                subject: "Física",
                desc: "Como o nome diz, toda a física do ENEM , explicada com experimentos reais e com um intelecto assustador, acertos garantidos."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/aaGx54PbdvA?si=rXTOLwTgJh_QoRxr\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO de ELETROMAGNETISMO do ENEM",
                subject: "Física",
                desc: "Tudo sobre ELETROMAGNETISMO, uma das matérias que caem muito, com uma aula que transforma o complexo em simples."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/oRPwxS88kZE?si=kowZqpSgnTMkXxk9\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "Optica geométrica para o ENEM",
                subject: "Física",
                desc: "Tudo sobre Optica geométrica, uma das matérias que também caem bastante, para te blindar em física e chegar arregaçando a prova."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/M3Bbg1bginM?si=SmzKUDHGfMbVEPNd\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "Curso completo de CINEMÁTICA pro ENEM",
                subject: "Física (OPCIONAL)",
                desc: "Matéria complementar de cinemática, aprofundada intensamente, feito para quem quer garantir sua aprovação."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/m4X6guWd5So?si=CtcRmZVhV-s-iKsv\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "LEIS DE NEWTON E DINAMICA",
                subject: "Física (OPCIONAL)",
                desc: "Aula que explica TUDO sobre as leis de newton e sobre e dinâmica, blindagem total, confiança 100%, acertos garantidos."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/dEVXre6ZhTo?si=EYhxjeHqhV4zDYSv\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "REFRAÇÃO em nível avançado para o ENEM 2026",
                subject: "Física (OPCIONAL)",
                desc: "Aprofundamento intenso em REFRAÇÂO, o fenômeno ondulatório que mais engana no ENEM, blidagem e segurança total na prova."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/S5O-_kHn3W0?si=6AVWzthhiQtxcOcL\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO de QUÍMICA GERAL pro ENEM",
                subject: "Química",
                desc: "Toda a química geral do ENEM, explicando e aprofundando desde o básico até o avançado, construindo com você desde a base até o telhado do seu gabarito."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/x1tx_KZZW1M?si=eNBlx44SQ1Z4xOH7\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "Tudo de Estequiometria para o ENEM 2026",
                subject: "Química",
                desc: "Tudo sobre Estequiometria, o tema de química que MAIS CAI NO ENEM, com mais de 100 questões pra te blindar na prova."
            },
            {   
                iframe: `<iframe src="https://www.youtube.com/embed/8OKgg3CWmUM?si=EX-OcuaC4bGCACCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                name: "Tudo de Separação de Misturas para o ENEM",
                subject: "Química",
                desc: "Tudo sobre separação de misturas, tema que cai até mesmo fora da química, essencial para se destacar de verdade."
            },
            {
                iframe: `<iframe src="https://www.youtube.com/embed/eiNb-LfEDHI?si=sb18PkWA-zqq7fZT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                name: "A melhor aula de NOX da sua vida para o ENEM",
                subject: "Química",
                desc: "Tema recorrente no ENEM, manipule NOX de uma forma descomplicada e, como sempre, com didática brutal."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/riQoW22yMO4?si=pmlcaCzfapt4l5Xa\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "A melhor aula de QUÍMICA INORGÂNICA para o ENEM",
                subject: "Química",
                desc: "Blindagem em química inorgânica, excelência em forma de aula, depois dessa, o ENEM é quem vai te achar difícil."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/rfvBCtd2VNE?si=O8yz51D0q8yNqCNO\"title=\"YouTube video player\" frameborder=\"0\"allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TODA a BIOLOGIA do ENEM em 12 horas",
                subject: "Biologia",
                desc: "Aula que aborda um resumo de tudo sobre a Biologia do ENEM, de forma rápida, mas extremamente precisa e aprofundada."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/I6XycvmojEo?si=lSMvpp6hOYJwIZwC\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO DE CITOLOGIA PARA O ENEM 2026 ",
                subject: "Biologia (OPCIONAL)",
                desc: "Toda a citologia que vai cair no ENEM, ABSOLUTAMENTE TUDO, dominar isso é dominar parte do seu sucesso no futuro."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/0QoqAjdfsPM?si=IDbS0jzF_iLsQi4C\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO de BOTÂNICA para o ENEM",
                subject: "Biologia (OPCIONAL)",
                desc: "Tudo sobre Botânica no ENEM, entendendo a natureza com perfeição e garantindo o seu gabarito de biologia no ENEM."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/VFly2_ikd8Q?si=34ZWEP5hVIuZIb66\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO de GENÉTICA pro ENEM 2026",
                subject: "Biologia (OPCIONAL)",
                desc: "Tudo de Genética pro ENEM, didática mágica, veja como você é formado, e entenda que você vai se formar um gênio."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/6ZceJt72hQs?si=8c0yrIkoSk20zTcZ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "Vacinas, imunologia, DNA, organelas e vírus pro ENEM 2026",
                subject: "Biologia (OPCIONAL)",
                desc: "Tudo sobre vacinas e imunologia com uma palhinha de organelas e DNA, feito pra destruir o ENEM e sair comemorando."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/8ZTMDDJ0pXE?si=8lVQJigGHJLc1Bgi\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "HORMÔNIOS FEMININOS e CICLO MENSTRUAL pro ENEM",
                subject: "Biologia (OPCIONAL)",
                desc: "Matéria menos frequente, mas que exige que você esteja blindado quando aparece na prova. Você estará."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/7HEKqvV2JiU?si=_gKvyRJjmLmCnv_D\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO de HISTÓRIA DO BRASIL pro ENEM 2026",
                subject: "História",
                desc: "Infelizmente não tem toda a história do ENEM no canal de Pedro, somente a do Brasil, mas os acertos sobre esse tema já são garantidos."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/tkn-YU7rleQ?si=-Yn9GocmZqRCI_JK\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO DE GEOGRAFIA FÍSICA PARA O ENEM",
                subject: "Geografia",
                desc: "Geografia Física, um dos temas de geografia mais cobrados do ENEM, scom a didática mágica que você já conhece."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/7DXuzcD5erI?si=UlX8-PG44f8-3GoV\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO de GEOGRAFIA AGRÁRIA para o ENEM",
                subject: "Geografia",
                desc: "Geografia Agrária, o segundo tema de geografia mais cobrado do ENEM, simples, rápido, didático e mágico."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/8bUVI_iE6zk?si=vzH6t80NFPotEqaR\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-\" allowfullscreen></iframe>",
                name: "DOMÍNIOS MORFOCLIMÁTICOS PARA O ENEM 2026",
                subject: "Geografia",
                desc: "Um dos assuntos considerados mais complexos do ENEM, bem explicado até para bananas, uma oportunidade de ouro."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/HNldzs3-aZM?si=HgL2wMkS7bipZtIx\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO de FILOSOFIA para o ENEM",
                subject: "Filosofia",
                desc: "Filosofia do ENEM, se voce filosofava antes sobre temas banais, agora vai filosofar sobre o quão bem você aprendeu."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/_wbtaX3VDt8?si=AzIlZDXEjvciTUYJ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "Aula de HUMANAS para o ENEM 2026",
                subject: "Ciências Humanas em Geral",
                desc: "Correção de prova rápida e eficiente sobre os conceitos de ciências humanas, pra você entender na prática o quão fácil é. "
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/ekZi8MYe06g?si=distkYZVzMkwjZRy\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "FIGURAS DE LINGUAGEM PRO ENEM 2026",
                subject: "Português",
                desc: "TODAS as figuras de linguagem do ENEM, fácil e mágico, o complexo fica fácil, acertos garantidos."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/fN-tmG-kzzw?si=BZp9rU8ds0mv2HeE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "TUDO sobre FUNÇÕES DA LINGUAGEM pro ENEM",
                subject: "Português",
                desc: "Tudo sobre as funções da linguagem, não preciso me estender, você sabe que está em boas mãos quando o assunto é Pedro Assad."
            },
            {
                iframe: "<iframe src=\"https://www.youtube.com/embed/K3g7l1hIREw?si=K5nJOeO6szdpwFcQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
                name: "LITERATURA e VANGUARDAS EUROPÉIAS pro ENEM",
                subject: "Português",
                desc: "O nome engana, é um dos temas mais cobrados sobre português no ENEM, didática mágica, acertos garantidos."
            },
            {
                iframe: `<iframe src="https://www.youtube.com/embed/JieTN96XwrU?si=40heNh0SSvjGrSo1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                name: "Nunca mais perca ponto na COMPETÊNCIA 1 da Redação ENEM",
                subject: "Redação",
                desc: "Aula gramática corringindo erros de redação que com certeza você já cometeu, resultados garantidos, você sabe disso."
            },
            {
                iframe: `<iframe src="https://www.youtube.com/embed/5yMOgW2Pfzo?si=XhwmCNQVhePVwoft" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                name: "Como blindar competência 3 - Prof Milla Borges",
                subject: "Redação",
                desc: "Pode não ser o Pedro Assad, mas te garanto que a qualidade é a mesma, blinde sua redação, alavanque sua nota com a Milla Borges."
            },
            {
                iframe: `<iframe src="https://www.youtube.com/embed/SIOL2KWBkXs?si=g-s9MOGwxUZL6YQP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                name: "Escreva comigo para REDAÇÃO ENEM | Aula 1",
                subject: "Redação (OPCIONAL)",
                desc: "Redação na pratica, entenda como o próprio Pedro escreve e conserte seus erros de redação, nota nunca é demais no ENEM"
            },
            {
                iframe: `<iframe src="https://www.youtube.com/embed/1VxCWJyLbyk?si=pErXVb06uiu2husA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                name: "Escreva comigo para REDAÇÃO ENEM | Aula 2",
                subject: "Redação (OPCIONAL)",
                desc: "Aula 2 de redação prática, entenda ainda mais o que errou e desbloqueie sua inteligência."
            },
            {
                iframe: `<iframe src="https://www.youtube.com/embed/Fei09Xvy3yI?si=P5UF7PkBeopl33hN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                name: "Escreva comigo para REDAÇÃO ENEM | Aula 3",
                subject: "Redação (OPCIONAL)",
                desc: "Aula 3 de redação prática, você já sabe o que esperar, aperfeiçoe sua escrita com exemplos reais."
            },
            {
                iframe: `<iframe src="https://www.youtube.com/embed/1_gXyMjJoKU?si=HSifTLwmTm6Cwbuo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                name: "Tentando tirar 1000 na Redação com a Milla Borges",
                subject: "Redação (OPCIONAL)",
                desc: "Aula para se desafiar, agora que você entende o básico da redação, escreva junto com os melhores."
            },
            {
                iframe: `<iframe src="https://www.youtube.com/embed/BqAl370-Ues?si=cVQGdrDBNatTbugU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                name: "Não vou desistir de tirar 1000 na Redação com a Milla Borges",
                subject: "Redação (OPCIONAL)",
                desc: "Mais uma vez, se desafie, escreva junto com as melhores pessoas e aperfeiçoe ainda mais suas habilidades."
            },
            {
                iframe: `<iframe src="https://www.youtube.com/embed/zXGrzS1jK5o?si=T4mJKTzdjTtV5uH7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                name: "Tentando tirar 3000 na Redação com Milla Borges (três temas ao mesmo tempo)",
                subject: "Redação (OPCIONAL)",
                desc: "Será que você consegue fazer 3 redações tão boas e rápidas quanto a dele? Depois dessa aula, você com certeza conseguirá."
            }
        ];

        let videoNum = 1;

        videosJson.map((video) => {
            let videoDiv = document.querySelector(".video").cloneNode(true);

            videoDiv.querySelector(".iframe-video").innerHTML = video.iframe;
            videoDiv.querySelector(".video-text h2").textContent = video.subject;
            videoDiv.querySelector(".video-text .video-name").textContent = `${videoNum}º) ${video.name}`;
            videoDiv.querySelector(".video-desc-text").textContent = video.desc;
            document.querySelector(".videos").append(videoDiv)

            videoNum += 1;
        });