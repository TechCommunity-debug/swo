import type { AboutContent } from './types';
import { SITE_NAME } from '../seo/helpers';

/**
 * The editorial-policy page, in pt. Long-form prose rather than chrome, so it
 * lives here and not in the `ui` dictionary — burying six hundred words of
 * policy among ninety UI labels would make both harder to find.
 */
export const pt = (termCount: number, countryCount: number): AboutContent => ({
    h1: 'Como apuramos as definições',
    lead: `O ${SITE_NAME} tem hoje ${termCount} entradas de ${countryCount} ${countryCount === 1 ? 'país' : 'países'} na sua edição em português. Esta página explica como elas são escritas, o que fazemos quando os fatos não são claros e onde sabemos que o dicionário é fraco. Se você for ler uma página só antes de confiar no resto, leia esta.`,
    sections: [
      {
        heading: 'O que toda entrada tem de conter',
        paragraphs: [
          'Nenhuma entrada é publicada sem pelo menos uma acepção e pelo menos uma frase de exemplo trabalhada, com tradução natural. Quem cobra isso é o build: uma entrada sem qualquer um dos dois não passa na validação e o site não compila. É um instrumento deliberadamente tosco, e existe porque o modo de falha de um dicionário grande de gíria são centenas de entradas magras e enroladas, cada uma dizendo tecnicamente alguma coisa e todas juntas não dizendo nada.',
          'Fora esse mínimo, cada entrada carrega o que de fato se sabe sobre ela. Algumas têm etimologias detalhadas; outras não têm nenhuma, porque nenhuma está estabelecida com segurança. Preferimos que uma entrada fique visivelmente mais curta a enchê-la de linguiça para emparelhar com as vizinhas.',
        ],
      },
      {
        heading: 'Registro e avisos de uso',
        paragraphs: [
          'Todo termo recebe uma etiqueta de registro — informal, coloquial, vulgar, tabu, antiquado ou regional — e alguns levam também um aviso de uso explícito. São os campos mais úteis e, ao mesmo tempo, os mais subjetivos do site. Uma palavra como cabrón é uma saudação carinhosa entre amigos e um insulto sério vindo de um desconhecido; nenhuma etiqueta sozinha dá conta disso, então a entrada diz o que precisa ser dito nas acepções em vez de fingir que a etiqueta basta.',
          'Listamos xingamentos discriminatórios e termos ofensivos em vez de omiti-los, com o aviso ao lado. Um dicionário que deixa de fora justamente as palavras que você mais precisa que expliquem não está protegendo ninguém.',
        ],
      },
      {
        heading: 'Etimologias contestadas e inventadas',
        paragraphs: [
          'A gíria atrai etimologia popular mais do que qualquer outra parte de um idioma, e as histórias boas viajam mais rápido que as verdadeiras. Várias origens repetidas com muita confiança pela internet são simplesmente impossíveis de verificar: o chamba mexicano supostamente vindo de “Chamber of Commerce”, o chunder australiano de um grito de convés — “watch under” —, as siglas inventadas que penduraram em naff.',
          'Quando incluímos uma dessas, dizemos com todas as letras que não está verificada, e dizemos por que ainda assim vale a pena mencioná-la: em geral porque é repetida tanto que omiti-la confundiria mais do que tratá-la. Quando a origem é de fato disputada entre quem estuda o assunto, a entrada diz que a questão está em aberto em vez de escolher a resposta mais redondinha.',
        ],
      },
      {
        heading: 'De onde vem a gíria',
        paragraphs: [
          'Boa parte do que circula como gíria “americana” genérica nasceu no inglês vernáculo afro-americano; boa parte da gíria jovem britânica atual vem do inglês multicultural de Londres e, antes disso, do patoá jamaicano; muita gíria francesa chegou pelas banlieues, vinda do árabe. Esses percursos são anotados nas entradas, porque a história de uma palavra costuma ser a coisa mais interessante que ela tem e porque atribuir importa.',
        ],
      },
      {
        heading: 'Como o site é organizado',
        paragraphs: [
          'Primeiro o país, depois o assunto, depois o termo: /pt/mexican-slang/people/guey/. Essa ordem não é arbitrária. A gíria pertence a um lugar antes de pertencer a um idioma — o espanhol do México e o da Espanha dividem a gramática e quase nada do vocabulário informal —, então o país é a taxonomia da qual todo o resto pende.',
          'Um termo arquivado em vários assuntos continua tendo exatamente um endereço, construído a partir do primeiro deles. Ele aparece também nas outras páginas de assunto, mas essas páginas apontam para a sua única URL canônica em vez de servir uma segunda cópia dele.',
        ],
      },
      {
        heading: 'Idiomas',
        paragraphs: [
          'A edição em inglês fica na raiz do site; cada uma das outras fica sob o seu próprio prefixo: /es/, /pt/, /fr/, /de/, /it/, /ru/, /ja/, /ko/. Uma página aparece num idioma só quando o conteúdo dela foi de fato escrito nesse idioma: não há recurso automático ao inglês, e nenhuma página é duplicada entre idiomas com as mesmas palavras dentro. Onde uma página existe em vários, cada uma aponta para as demais com hreflang, para que os buscadores sirvam a certa.',
          'O que é traduzido é a explicação, nunca a gíria. Uma entrada japonesa mantém o termo em japonês, a romanização e as frases de exemplo em japonês em todas as edições; o que muda é o idioma em que estão escritas as acepções, as notas de uso e a etimologia. Qualquer idioma novo seguirá a mesma regra: primeiro o conteúdo traduzido, depois as páginas.',
        ],
      },
      {
        heading: 'No que este dicionário é ruim hoje',
        bullets: [
          {
            lead: 'A cobertura é desigual.',
            rest: 'Dezesseis países e oito idiomas são um começo, não um panorama. Tradições enormes de gíria — o português do Brasil, o pidgin nigeriano, o inglês da Índia, o árabe — simplesmente não estão aqui.',
          },
          {
            lead: 'A profundidade regional é rasa.',
            rest: 'Os termos recebem etiqueta de região ampla quando temos confiança, e ficam sem etiqueta quando não temos. Uma palavra marcada como “Geral” pode muito bem ser regional de um jeito que não captamos.',
          },
          {
            lead: 'Gíria vence.',
            rest: 'Algumas entradas daqui vão soar antiquadas em poucos anos. Quando um termo já está de saída, marcamos como antiquado, mas nem sempre vamos perceber a tempo.',
          },
          {
            lead: 'Não há áudio.',
            rest: 'A pronúncia vem em AFI e numa transcrição simples. Para termos que dependem de tom e entonação — boa parte das entradas italianas e mexicanas — isso sinceramente não basta.',
          },
        ],
      },
      {
        heading: 'Correções',
        paragraphs: [
          'Se uma entrada está errada, ficou velha ou não reflete como uma palavra é de fato usada onde você mora, vale a pena saber. Correções de falantes nativos são a contribuição mais valiosa que um dicionário como este pode receber, e os campos com mais chance de estarem errados são o registro e a região: justamente os mais difíceis de pesquisar e os mais fáceis de um falante notar.',
        ],
      },
    ],
  });
