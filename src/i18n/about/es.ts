import type { AboutContent } from './types';
import { SITE_NAME } from '../seo/helpers';

/**
 * The editorial-policy page, in es. Long-form prose rather than chrome, so it
 * lives here and not in the `ui` dictionary — burying six hundred words of
 * policy among ninety UI labels would make both harder to find.
 */
export const es = (termCount: number, countryCount: number): AboutContent => ({
    h1: 'Cómo documentamos las definiciones',
    lead: `${SITE_NAME} tiene ahora mismo ${termCount} entradas de ${countryCount} ${countryCount === 1 ? 'país' : 'países'} en su edición en español. Esta página explica cómo se escriben, qué hacemos cuando los datos no están claros y dónde sabemos que el diccionario flojea. Si solo vas a leer una página antes de fiarte del resto, que sea esta.`,
    sections: [
      {
        heading: 'Qué tiene que llevar cada entrada',
        paragraphs: [
          'Ninguna entrada se publica sin al menos una acepción y al menos una frase de ejemplo trabajada con su traducción natural. Lo impone la compilación: una entrada a la que le falte cualquiera de las dos no pasa la validación y el sitio no compila. Es un instrumento deliberadamente tosco, y existe porque el modo de fallo de un diccionario de argot grande son cientos de entradas escuálidas y rellenas que técnicamente dicen algo y en conjunto no dicen nada.',
          'Más allá de ese mínimo, cada entrada lleva lo que de verdad se sabe de ella. Algunas tienen etimologías detalladas; otras no tienen ninguna, porque no hay ninguna establecida con fiabilidad. Preferimos que una entrada se vea más corta antes que rellenarla para igualarla con sus vecinas.',
        ],
      },
      {
        heading: 'Registro y avisos de uso',
        paragraphs: [
          'Cada término lleva una etiqueta de registro —informal, coloquial, vulgar, tabú, anticuado o regional— y algunos llevan además un aviso de uso explícito. Son los campos más útiles y también los más subjetivos del sitio. Una palabra como cabrón es un saludo cariñoso entre amigos y un insulto serio viniendo de un desconocido; ninguna etiqueta suelta recoge eso, así que la entrada lo dice en las acepciones en vez de fingir que la etiqueta basta.',
          'Incluimos los insultos discriminatorios y los términos ofensivos en lugar de omitirlos, con su aviso al lado. Un diccionario que se deja fuera justo las palabras que más necesitas que te expliquen no está protegiendo a nadie.',
        ],
      },
      {
        heading: 'Etimologías en disputa e inventadas',
        paragraphs: [
          'El argot atrae la etimología popular más que ninguna otra parte de una lengua, y las historias buenas viajan más rápido que las verdaderas. Varios orígenes que se repiten con mucha seguridad por internet son sencillamente inverificables: el chamba mexicano supuestamente sacado de «Chamber of Commerce», el chunder australiano de un grito de cubierta, las siglas inventadas que se le cuelgan a naff.',
          'Cuando incluimos una de estas, decimos con todas las letras que no está verificada, y decimos por qué merece mencionarse igualmente: normalmente porque se repite tanto que omitirla confundiría más que abordarla. Cuando el origen está genuinamente discutido entre quienes estudian esto, la entrada dice que la cuestión sigue abierta en vez de quedarse con la respuesta más redonda.',
        ],
      },
      {
        heading: 'De dónde viene el argot',
        paragraphs: [
          'Buena parte de lo que circula como argot «americano» genérico nació en el inglés vernáculo afroamericano; buena parte del argot juvenil británico actual viene del inglés multicultural de Londres y, antes de eso, del patois jamaicano; mucho argot francés llegó por las banlieues desde el árabe. Estas rutas se anotan en las entradas, porque la historia de una palabra suele ser lo más interesante que tiene y porque atribuirla importa.',
        ],
      },
      {
        heading: 'Cómo está organizado el sitio',
        paragraphs: [
          'Primero el país, luego el tema, luego el término: /es/mexican-slang/people/guey/. Ese orden no es arbitrario. El argot pertenece a un lugar antes que a un idioma —el español de México y el de España comparten la gramática y casi nada de su vocabulario informal—, así que el país es la taxonomía de la que cuelga todo lo demás.',
          'Un término archivado en varios temas sigue teniendo exactamente una dirección, construida a partir del primero de ellos. Aparece también en las otras páginas de tema, pero esas páginas enlazan a su única URL canónica en vez de servir una segunda copia de él.',
        ],
      },
      {
        heading: 'Idiomas',
        paragraphs: [
          'La edición en inglés vive en la raíz del sitio; cada una de las demás vive bajo su propio prefijo: /es/, /pt/, /fr/, /de/, /it/, /ru/, /ja/, /ko/. Una página aparece en un idioma solo cuando su contenido se ha escrito de verdad en ese idioma: no hay recurso automático al inglés, y ninguna página se duplica entre idiomas con las mismas palabras dentro. Cuando una página existe en varios, cada una enlaza a las otras con hreflang para que los buscadores puedan servir la correcta.',
          'Lo que se traduce es la explicación, nunca el argot. Una entrada japonesa conserva su término en japonés, su romanización y sus frases de ejemplo en japonés en todas las ediciones; lo que cambia es el idioma en el que están escritas las acepciones, las notas de uso y la etimología. Cualquier idioma nuevo seguirá la misma regla: primero el contenido traducido, después las páginas.',
        ],
      },
      {
        heading: 'En qué flojea ahora mismo este diccionario',
        bullets: [
          {
            lead: 'La cobertura es desigual.',
            rest: 'Dieciséis países y ocho idiomas son un comienzo, no un panorama. Tradiciones enormes de argot —el portugués de Brasil, el pidgin nigeriano, el inglés de India, el árabe— sencillamente no están.',
          },
          {
            lead: 'La profundidad regional es escasa.',
            rest: 'Los términos se etiquetan con una región amplia cuando tenemos confianza, y se dejan sin etiquetar cuando no. Una palabra marcada como «General» puede muy bien ser regional de formas que no hemos recogido.',
          },
          {
            lead: 'El argot caduca.',
            rest: 'Algunas entradas de aquí sonarán anticuadas dentro de unos años. Cuando un término ya va de salida lo marcamos como anticuado, pero no siempre llegaremos a tiempo.',
          },
          {
            lead: 'No hay audio.',
            rest: 'La pronunciación se da en AFI y en una transcripción llana. Para los términos que dependen del tono y la entonación —buena parte de las entradas italianas y mexicanas— eso no basta, sinceramente.',
          },
        ],
      },
      {
        heading: 'Correcciones',
        paragraphs: [
          'Si una entrada está mal, se ha quedado vieja o no recoge cómo se usa de verdad una palabra donde tú vives, merece la pena saberlo. Las correcciones de hablantes nativos son la aportación más valiosa que puede recibir un diccionario como este, y los campos con más papeletas de estar equivocados son el registro y la región: justo los más difíciles de investigar y los más fáciles de detectar para un hablante.',
        ],
      },
    ],
  });
