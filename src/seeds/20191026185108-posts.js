'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const postData = [
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',              
              body: 'Que los parlamentarios reduzcan su numero a máximo 40, senadores dos por regiones muy pobladas y 1 por el resto de las regiones ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'David.ag.y@hotmail.cl',
              instagram: 'David.ag.y',
              type: 'Proyecto c',
              body: 'Realizar consultas ciudadanas estilo plebiscito , al momento de tomar decisiones en temas sociales y que pueden afectar a la comunidad , temas como el aborto , sueldos de parlamentarios (aumento o disminución ), matrimonio igualitario  o temas de similares características .',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que el impuesto suba a un 60% para todos pero la educación, la salud, el tranporte  y la educación superior sean gratuitos y de muy buena calidad ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Mejorar lo que hace que la gente viva de manera digna que le alcance para llegar a fin de mes y sin endeudarse de por vida ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'antoniomorares@gmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Educación gratuita y de calidad. Es una demanda que se ha escuchado bastante en los últimos años y que, sin duda, es necesaria de satisfacer. Por otro lado, el mundo está experimentando una época de digitalización de la información, cada vez es más fácil compartir conocimiento y construir sobre o que hacen los demás. Cientos de sitios web ofrecen cursos online (gratuitos o pagados), y me atrevo a decir hoy en día se puede aprender cualquier cosa online.\n\nPropongo intentar aprovechar este escenario para la educación de nuestro país. Puede haber una plataforma que entregue contenido de buena calidad para todos los colegios y profesores del país, en la que los profesores puedan compartir clases, actividades y evaluaciones. En donde los alumnos puedan aprender de una manera más atractiva, mediante juegos o trabajos colaborativos. Por último, puede ser una herramienta muy eficiente para medir el rendimiento, se podrían hacer controles de materia (tipo simce) a miles de alumnos sin necesidad de ir a los colegios y saber los resultados al instante. También se podría hacer un seguimiento más cercano a los alumnos, viendo su desempeño, que tareas hacen y cuales no hacen, tal vez así se pueda entender qué tipo de actividades son verdaderamente atractivas y estimulantes.\n\nNo creo que esta medida sea una solución inmediata, pero si puede ser una buena herramienta que apoye tanto a profesores como a alumnos y, por otro lado, una buena fuente de información para analizar y luego iluminar problemas que no estamos viendo.\n',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'jeff1315@gmail.com',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'De forma corta, uno de los mayores problemas son los bajos sueldos en relación a los altos gastos de una familia en Chile. Una propuesta podría ser un incentivo a las empresas de bajarle tasas de imposición, si suben los sueldos de sus empleados no gerenciales en un 10%, algo con esa idea. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'METRO: Que cobren 500 pesos a gente con ingresos menores de 500.000 mensual y el resto paga la tarifa normal. Que exista un tope mensual (40.000 por ejemplo) en el q puedas tener infinitos viajes sino, de lo contrario los otros montos',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Domingasilvav@gmail.com',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Educación en empresas: Que las empresas que tengan más de una cantidad de trabajadores tengan colegios gratuitos para los hijos de estos. Las empresas así se hacen responsables y entregan una educación de calidad.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Ideas para incentivar la profesión de pedagogía en colegios públicos: subir sueldos a profesores, y mejor ambiente, ya sea: menos estudiantes por clases, dar menos clases a cada profesor, así ellos van a poder organizar mejor sus clases, hacer mejores guias, tener más tiempo para corregir pruebas, y así poder enfocarse más en lo que sus alumnos están fallando para poder repasar esa materia. Mi otra propuesta, es que cada carrera de pedagogía tenga un ramo obligatorio (nose si psicología) un ramo que te de herramientas para dar motivación a los futuros profesores para querer ensañar, y así mismo poder dar herramientas para que los profesores logren motivar a sus estudiantes para que queran aprender, para que se abran de mente y hacerles saber que si se esfuerzan van a poder.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'cihlhe@hotmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Lograr mejorar las pensiones, existiendo un fondo de reparto en el que se vaya contribuyendo de acuerdo a la propia situación económica. Además de planificar de mejor forma la distribución de recursos en los hospitales',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'cuando Miembros de la tercera edad decidan trabajar. Sus trabajos deben ser libres de impuestos, enfocado al sector más vulnerable. Así no pagan doble tributación por pensión y trabajo.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Que las empresas entreguen su asignación de transporte cargando directamente la tarjeta Bip! del trabajador. Así se evita la evasión, se fomenta el transporte público y la asignación de transporte se utiliza para lo que realmente se asigna.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Aunento al impuesto a las empresas, sumado a un aumentos gradual de esto para empresas nuevas. O sea, cuando se cree una nueva empresa, o una empresa extranjera ingrese a chile, rebajarle los impuestos el primer año, subirlos a un punto medio el segundo (puede ser al nivel actual) y dejarlos al porcentaje normal a partir del tercero. \nDe esta manera se puede aumentar los impuestos a empresas sin desmotivar la inversion, ya que los dos primeros años podran servir para "testear" si es rentable.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Creación de la posibilidad de pagar una mensualidad en la tarjeta Bip, con un cobro de 20000 pesos por dos viajes diarios. Además la posibilidad de cobrar 15000 para el quintil de menores ingresos. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Las empresas sanitarias que abastecen de agua potable deben realizar un catastro de las zonas de pérdida de la red (mediante sondaje u otras técnicas) y crear un plan de reparación para las tuberías en mal estado o rotas. Actualmente un 30% del agua potable se pierde en la red, lo que no ha cambiado en los últimos 10 años (Informe SISS 2017), y con reducirlo un 10-15% se ahorra en consumo de agua y gasto energético para potabilizarla. Replicar esto en regiones, porque es más barato y sustentable que construir plantas desalinizadoras o crear carreteras hídricas.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que los jubilados como mínimo tengan como pensión igual o mayor al sueldo mínimo ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'gustavoaaz@gmail.com ',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Dieta parlamentaria: Que el sueldo de los parlamentarios sea igual al sueldo promedio de un trabajador con la misma profesión, considerando grado de estudio, universidad o instituto donde estudió (cuando corresponda), años de titulado, etc. Esto permitiría bajar el sueldo de los parlamentarios a un monto que siga siendo justo y, de tal manera, permitir que la gente se dedique a la política por vocación y no por ambición.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Crear un sistema de pensiones que crezca de manera gradual basado no en los ingresos, sino que en el consumo. Mediante el Iva destinar parte de ese consumo de cada ciudadano a un fondo de ahorro. De esta manera, se incentiva el uso de boletas, ademas de regularizar las pensiones, ya que todos consumimos durante toda nuestra vida, sin embargo hay gente que no trabaja de manera continua (madres, desempleo temporal, etc) ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Legalizacion de todas las drogas',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Debería haber un ramo obligatorio en el curriculum escolar de educación cívica. Es absolutamente necesqrio que la gente aprenda cómo se forma el gobierno, pagar impuestos, y cómo funciona nuestro país. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'i_retamal.ct',
              type: 'Reforma/ca',
              body: 'Construcción de viviendas sociales en varios barrios/comunas con bajo índice de vulnerabilidad. Con acceso a servicios públicos básicos.  Esta viviendas no estarán a la venta, se darán subsidios de arriendo a los beneficiaros. Existe evidencia académica de que es un mejor mecanismo como política pública de vivienda de integración residencial (No tengo el paper a mano, pero lo puedo buscar).  Los subsidios ojalá entregarlo a familias con niños menores a 15 años, porque según estudios son estos niños los que se ven más beneficiados con el cambio de barrio. Esto es a partir de una gran investigación realizada en EEUU llamada “Moving to oportunity”.  Esto no significa que no se deben subsidiar a familias sin menores de 15 años, el estudio (tengo el paper por si lo quieren) entrega que las políticas públicas de cambiar familia a un barrio con menores índices de vulnerabilidad tienen mayores beneficios para los menores de 15 años que son cambiados de ambiente.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Invertir mucho más en ciencia y tecnología pues así se generarán mejores escenarios para invertir en otras áreas en el futuro.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que el cae siga funcionando tal como ahora, pero sin intereses',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Cambiar el sistema presidencialista actual en Chile,  por uno semi-presidencialista. Para darle mayores atribuciones al Congreso y hacer de los representes un cargo más propositivo de políticas públicas de lo que es ahora.\nHe oído muchos comentarios criticando al congreso actual de Chile y esta iniciativa puede resolver varios problemas entorno a cómo se dividen los poderes en el país.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'ariel.kauderer@uc.cl',
              instagram: 'ari_kauderer',
              type: 'Reforma/ca',
              body: 'Sistema de vouchers para educación. No puede ser que el Estado gaste cerca de 500.000 por alumno al mes y no sea capaz de brindar educación decente',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'valdes.benjamin1@gmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Lo que más le ha dolido a la gente y la ha hecho manifestarse es una rabia que a mi gusto tiene como origen principal los robos de instituciones y la desconfianza hacia estas, más que la misma dificultad económica que las familias atraviesan. Es por esto que mi propuesta es reformar el poder judicial, obligando a que todos los juicios que involucren altos montos de dinero o muertes, sean dirigidos por más de un juez, y bajo la supervisión de alguna institución adecuada que sea capaz de identificar coimas y delitos de ese tipo. Además, reducir los sueldos de los jueces de los más altos escalafones (hoy más de 9 millones de pesos), y una revisión mes a mes de todos los jueces para analizar si están haciendo su trabajo correctamente (hoy en día nadie fiscaliza eficientemente la calidad del trabajo de los jueces nuevos, y los jueces antiguos están totalmente "apernados" en sus puestos).\n\nTodos estos cambios son en vista de mejorar la seguridad de la gente, de garantizar el respeto a Derechos Humanos, y de evitar robos millonarios de parte de autoridades y empresarios ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'federeatamal500@gmail.com ',
              instagram: 'federico _retamal ',
              type: 'Reforma/ca',
              body: 'Un cambio en el sistema de partidos, ya que en el actual solo llegan arriba los mas inútil, los que estan de acurdo con todos y con nadie, dejando la puerta abierta para gente inepta que lo unico que intenta es no perder el apoyo. Propongo uno que ponga por delante al país, no al partido ni al poder, uno que bonifique a quien aporta a esta causa, y castigue al inepto. Tipo, las rotativas ministeriales del período parlamentario pero aqui con mas cordura',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'Felipefrancodiaz',
              type: 'Reforma/ca',
              body: 'Que el estado le asegurase a toda persona una jubilación mínima equivalente al sueldo mínimo rigente, en caso que el monto de la jubilación sea inferior a este.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'Felipefrancodiaz',
              type: 'Reforma/ca',
              body: 'Que el estado de Chile asegure por ley de que las empresas nacionales e internacionales que extraen recursos mineros como por ejemplo el cobre y el litio, paguen un "royalty". De esta forma, el estado de Chile poseerá más dinero para temas nacionales como asegurar una educación y sistema de salud público de calidad',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'maximiliano.fabres',
              type: 'Reforma/ca',
              body: 'Desprivatizar las carreteras y los aparcamentos estatales, ya que las calles del país son de la población',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'mlucasl',
              type: 'Reforma/ca',
              body: 'Propuesta legal de irlanda. Cada cargo equivalente de una empresa, para empleados posteriores a los 6 mese de contratado debe recibir el mismo sueldo bruto (Con desviaciones no mayores al 3%). A menos que la empresa tenga medidas de desempeño para dicho cargo, las cuales se podrán utilizar para generar una variación monetaria establecida en el contrato. Dicha variación podrá ser modificada conforme a un acuerdo sindical.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'mlucasl',
              type: 'Reforma/ca',
              body: 'El sistema de previsión obligarlo de salud (fonasa, isapre), debiese trabajar de la misma forma que en países desarrollados. No discriminar por genero, y no poseer preexistencias.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'grcastro@uc.cl',
              instagram: 'No tengo instagram',
              type: 'Reforma/ca',
              body: 'Independización de algunos servicios del estado: JUNJI, SENAME, SENAMA, SML, JUNAEB, SERNAGEOMIN, y servicios público/privados como la CONAF de tal forma que la cabeza no sea una persona asignada por el gobierno de turno. Dicho en fácil, que la persona a cargo de estos servicios sea levantada por la propia institución por los años de carrera y entrega al servicio público, que no se preste para pagar favores políticos.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'grcastro@uc.cl',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Impuestos según región. No más centralismo SII. Independencia tributaria a las regiones. Qué cada región tenga el poder sobre el régimen impositivo que se aplique en su región. Parlamentarios por región tendrían la facultad de proponer y votar por estos temas. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Crear una cuenta de afp con 1 millón ( o más) para cada recién nacido, para que al jubilar, debido al interés compuesto, tenga asegurado decenas de millones en su cuenta.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que la gente del congreso viva, haya vivido, o por último conozca los lugares a los cuales representa.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'mlucasl',
              type: 'Reforma/ca',
              body: 'Crear, al igual que en muchos países, el pago mensual del transporte publico. Que exista la posibilidad de pagar por el uso del transporte publico de forma mensual, que generalmente es una cifra bastante reducida, y así cobrar en una mayor cantidad por tramo a quienes usen el transporte publico de forma esporádica (generalmente clase media alta, y alta).',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'mlucasl',
              type: 'Reforma/ca',
              body: 'Tener ingreso mínimo diferido con apoyo estatal. En otras palabras, tener un sueldo mínimo estandar, y para las mipymes tener un sueldo mínimo diferido con apoyo estatal. Parecido al proyecto propuesto por el presidente, pero con el apoyo estatal solo a las empresas que realmente lo necesitan.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Agregar a la constitución una declaración de derechos del contribuyente, parecida a la de Colorado (TABOR), para que el gobierno sea más eficiente con el presupuesto',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'grcastro@uc.cl',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: ' Vivienda pública con una fuertísima preocupación por el diseño. Bien ubicada y con uso de suelo mixto. Como referencia el plan de vivienda pública de EEUU de 1937. No caro, bien hecho.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'plcarmona@uc.cl',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Replantear la educación de raíz.\nEl sistema de educación actual está obsoleto, sin tener que reinventar la educación se puede simplemente copiar los sistemas de educación de Finlandia o Noruega. \nSi queremos ir más lejos debemos crear un sistema educativo integrando el conocimiento existente en psicología, neurociencia y sociología. Preocupándose de 3 pilares fundamentales: Inteligencia, Integridad y Socialización.\nActualmente la educación se "concentra" en su totalidad en la inteligencia fallando rotundamente porque en pocas palabras apela a la motivación extriseca de las personas y no la intriseca, lo que resulta en una baja calidad de experiencia o un aprendizaje lento o nulo. \nLas otras dos partes se mencionan pero nunca se plantea el como lograrlas, se deben diseñar experiencias (situaciones actuadas) que reflejen la importancia de la honestidad, inclusividad entre otros. Donde los alumnos sean capaces de observar el daño que genera un robo o una mentira por decir un ejemplo. \n\n\n\n\n',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'plcarmona@uc.cl',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Implementar la modalidad "Co-housing" \nConsiste en viviendas donde hay áreas en común el cual todos tienen acceso, como el comedor, la cocina, etc. Y el sector privado con los dormitorios baños y living.\nLos beneficios son varios:\n-Viviendas más baratas y más espacio.\n-Sentido de comunidad\n-Aumento de eficiencia en en consumo energético',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que la gratuidad de educación superior se plantee como un préstamo del Estado, de forma que se estudie gratis pero que una vez terminada la carrera la persona tenga que devolverle al Estado cierto porcentaje de su sueldo (5%-10% dependiendo)  por cierta cantidad de años (de forma que sea más conveniente que el cae). Con lo fondos que hoy se gastan en gratuidad, realizar un ajuste a las pensiones, de forma que puedan llegar al sueldo mínimo o lo más alto posible. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Aumentar el impuesto al tabaco y el alcohol. Que productos como estos tengan mayor impuesto, de forma de aumentar el tesoro estatal. Esto sería un win win, ya que al no fomentar su consumo se vela también por la salud de las personas, lo cual en el largo plazo podría afectar positivamente a instituciones de salud pública.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Destinar cierta cantidad de los impuestos por IVA a “rellenar” imposiciones de personas con lagunas en las AFP de forma que su pensión sea un poco mayor. Además, si al pagar el IVA hay platas destinadas a pensiones se incentiva a la gente a exigir su boleta al pagar, por lo que se evitaría pérdidas estatales por evasión del IVA. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Desincentivar el uso del automóvil particular aplicando impuestos o restricciones. La única forma de romper con el círculo vicioso del transporte público es que la gente se baje del auto para que haya menor congestión (y contaminación) para que así los tiempos de viaje y los costos de operación de los buses sean menores y podamos tener un sistema de transporte publico más atractivo. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'ygorodischer@uc.cl',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Los costos de movilización deberían ser a cargo del empleador, en la medida que sea posible. Las empresas podrían tener un sistema al estilo cheque de restaurant, en el que le entreguen a cada uno de sus empleados una bip con carga para un mes (2 veces por día, por la cantidad de días hábiles). De esta forma, se le saca un peso de encima al trabajador y al no incluirlo dentro del sueldo se asegura que ese dinero sea destinado a transporte. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'ygorodischer@uc.cl',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Aumentar el impuesto a la contaminación de las termoeléctricas. De esta manera se recaudan más fondos y se incentiva a que se desarrollen energías limpias. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Mi propuesta busca iniciar una mejora en torno a la dignidad que le correspone a cada persona. \nLa educación, la previsión de salud y las pensiones, son bienes que no deben pertenecer al mercado, sino que deben ser entregados por el Estado de manera equitativa y a todas las personas. Se debe velar por este cambio que permitirá dejar de monetizar bienes que deberían ser nuestro derecho. No más CAE, no mas colegios privados y subvencionados, no mas AFP, no mas ISAPRE. Todos deben poder acceder de igual forma y con la misma calidad  sin importar el capital económico que pueda tener. Es pedir que todos estos elementos dejen de tener una mirada desde la economía, no son empresas con rentabilidad aprovechable, tener que poseer dinero para acceder a una calidad decente de los respectivos bienes es una violación de derechos humanos y es necesario que haya una mirada social, que busque respetar nuestra dignidad y por que cada uno tenga lo que corresponde según sus necesidades.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Fin de las AFP',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Aumentar el numero de hospitales y  médicos que atiendan por el sistema público, además de que se faciliten todos los medicamentos necesarios a las personas, de está manera la gente no desenbolsaría más dinero en salud, que el 7% de todos los meses.\n',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Si las Isapres se realizan acciones que no son legales contra los usuarios (específicamente en las alzas de planes) que el gobierno proceda a multarlos, sin tener necesidad cada usuario de demandarlas de forma individual.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Al momento de jubilar, permitir que se  retire un porcentaje de los ahorros por lo menos 50%. \nSi la persona fallece, que los ahorros pasen a sus herederos en su totalidad y sin condiciones especiales.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Nacionalización de recursos naturales. Que el agua deje de ser privada y de unos pocos.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que todas ls personas que están privadas de libertad (prisión) trabajen y aporten a la comunidad, para que no tengamos que mantenerlos totalmente con dineros fiscales.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Que las grandes empresas utilicen parte de sus utilidades en generar más puestos de trabajo, mediante proyectos comunitarios, de innovación, investigación, etc.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Sanciones reales para empresarios que se coluden. Las clases de ética y multas no son suficientes.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que las AFP vuelvan a lo que se había definido inicialmente. Que las pérdidas de los fondos no afecten a los usuarios.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que quienes tengan cargos por corrupción no puedan tener cargos públicos.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Quitar la preexistencia de las isapres. Mucha gente no puede optar a mejor nivel de salud por una preexistencia, colpasando el sistema público (cuando muchas veces podrían optar al sistema privado). Esto aumentaría la competencia entre isapres (beneficioso para los usuarios) y descomprimir el sistema público con una masa de pacientes que podrían atenderse en otros lugares y así agilizar el sistema público y dar la oportunidad a mejor salud a otras personas que hoy en día quedan marginadas y sin la posibilidad de ser atendidas en el sistema público.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Bajar gradualmente el IVA, que es un impuesto que afecta a los más pobres. Compensar el déficit fiscal bajando gastos del estado.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Cecilia.moraga77@gmail.com ',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Que el sistema de salud de los uniformados (de cualquier índole, desde carabineros hasta militares como tal), sea el mismo que para el resto del país y que coticen en el mismo lugar que los demás, demás que no se juvilen a los 25 años de servicio, cuando una persona cualquiera tiene que trabajar hasta más de los 60 años. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'Rodrigofdez',
              type: 'Reforma/ca',
              body: 'Elaboración de canasta básica de alimentos a los cuales se les aplique un IVA rebajado o estén exentos. Se ataca directamente el problema del elevado costo de vida. \n\nEl argumento de la dificultad contable de tener IVA distintos es anulado con la experiencia comparada donde en la gran mayoría de países los productos tienen IVA diferenciados. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Dieta parlamentaria: sueldos en sector publico sean máximo 15 veces el sueldo mínimo (incluyendo al presidente), y que las asignaciones de parlamentarios no superen el sueldo que gana este. Disminución de cantidad de parlamentarios. Mayor exigencia de asistencia al congreso para parlamentarios.\n\nAFP: un sistema mixto de aporte individual, y pilar solidario fortalecido garantizándose el sueldo mínimo en las pensiones. Que parte del 19% del IVA (podría ser un 2%) se vaya al pilar solidario porque él consumes algo más o menos constante, y así se logra un mayor aporte de las personas mas ricas (consumen mas). aumento en competencia entre afps para lograr comisiones menores, podría ser una afp estatal.\n\nNecesidades Básicas: aunque garantizar ganancias fue un buen método de llegar con electricidad y agua potable a todo chile, el pais ya posee la infraestructura para que la gran mayoría del país tenga estos servicios, por lo que se debiese disminuir la rentabilidad garantizada a estos servicios, pero se debe mantener que este garantizado ya que sino va a haber poca inversion en esta materia.\n\nSueldo minimo: aunque el sueldo mínimo garantizado es un buen comienzo, los salarios reales deben aumentar por lo menos hasta la linea de pobreza de forma progresiva. Mientras esto se esta llevando a cabo el sueldo mínimo garantizado es una buena forma de cubrir esto. Iniciativas como las de luksic son aplaudibles.\n\nPresupuesto: reformular el presupuesto desde cero. La idea de Felipe Kast es una buena forma de redirigir recursos a las necesidades que creemos mas urgentes. los cambios presupuestarios hasta ahora son cambios marginales en presupuestos anteriores, sin mojarse el poto para quedar mal.\n\n',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Se me olvido de lo que puse recién.\n\nReforma laboral para mejorar la forma de cotizar de las personas. Que las personas con negocios independientes y que trabajan a honorarios también cotizen de una forma mas efectivas para que no hayan lagunas.\n\nMayor impuesto a la herencia para acortar desigualdad\n\nMayor impuesto de primera categoría a la renta, y mas tramos en los impuestos a la renta de segunda categoría. (impuesto megaricos)',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: '1. El legislador (diputado o senador) será asalariado solamente durante su mandato. Y no tendrá jubilación proveniente exclusivamente por el mandato. (éste será un aporte mas)',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: ' Todo legislador (pasado, presente y futuro) que actualmente contribuye al fondo de jubilación del Parlamento pasará al régimen vigente de la Seguridad Social. El legislador participará de los beneficios dentro del régimen de la jubilación exactamente como todos los demás ciudadanos. El fondo de jubilación no puede ser usado para ninguna otra finalidad.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'Milivoj1',
              type: 'Proyecto d',
              body: 'Recuperar empresas que fueron estatales, como Soquimich, adquiridas por privados ( yerno de Pinochet - Ponce Lerou) durante la dictadura y de manera poco lícita, y que manejan gran parte del mercado de no metálicos y minerales estratégicos como el Litio. Hacer un blanqueo de la manera en que fue adquirida y ventilar su participación en hechos de corrupción política actual.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'jtleyton10@gmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: '-Eliminar IVA para productos de canasta básica\n-Ley que haga compartir perdidas entre civiles y afps\n-Reducir impuestos a PYMES\n-Privatizar agua (no a través de licencias, ni derecho de aprovechamiento)\n P R I V A T I Z A R para que vuelva a manos de agricultores y pescadores.\n',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que sea parte del curriculum nacional ramos específicos y obligatorios de ética y educación cívica desde primer ciclo para que se les inculque desde pequeños el buen actuar dentro de una sociedad.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'selsaca@uc.cl',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Piñera hablo sobre subsidiar sueldos para que lleguen a 350 mil pesos. Sería ideal que en vez de 350 mil pesos sean 375 mil pesos y que estos sean cubiertos por las empresas grandes. Mientras que el subsidio vaya cubierto para pequeñas y medianas empresas. Por qué de esta forma? Porque la gran mayoría de las empresas grandes tienen el poder para dar esos sueldos mientras que pequeñas y medianas empresas pelean por subsistir.\n\n Para esas pequeñas y medianas empresas que les cuesta llegar a dar cierto sueldo, esa ayuda vista como subvención es razonable. Siendo una subvención para llegar a los 375.000 pesos.\n\nNo solo la calidad de vida se hace más digna. Sino que también todos los trabajadores sentirán menos injusticia. Más encima tendrán mayor poder de compra, lo cual ayuda a toda la economía del pais.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que ningun arancel mensual de universidad/colegio sobrepase el sueldo mínimo. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'ranelson@uc.cl',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Propongo volver a estudiar la asignación de viáticos para parlamentarios. ¿Realmente es necesario que un parlamentario de Valparaiso perciba la misma asignación de recursos que un representante de Arica? Propongo que la asignación de viaticos a parlamentarios sea en razón proporcional a la distancia de su distrito con el congreso. No es necesario que el parlamentario de valparaiso reciba el mismo dinero que el que recibe el representante de Arica quien tiene que viajsr todas las semanas.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Que el tiempo de viaje de los trabajadores sea contado como horas de trabajo. Esto busca cuidar que efectivamente las personas no usen su tiempo de recreacion, descanso y ocio en viajar al trabajo. Habria un incentivo a contratar gente que trabajase cerca de las empresas y si faltan empleados, no castigar a los que viven lejos. Por otro lado, existe un incentivo a descentralizar la ciudad, creando nuevos trabajos cerca de las zonas más alejadas de la ciudad para asegurar un nivel de producción y horas trabajadas de los empleados.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: '@p.lira.z',
              type: 'Reforma/ca',
              body: 'Reducir el IVA ayudaría a reducir el costo de la vida, pero ello tendría que ir de la mano con un aumento de los impuestos progresivos, especialmente al capital acumulado y no a los ingresos.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Desde ya y hacia el futuro hombres y mujeres trabajarán indistitamente. Sin embargo, el cuidado de los niños por sus padres es un tema que me preocupa. Por eso, creo que debiera existir una ley que permita a cualquier trabajador, realizar su trabajo desde su casa. Hoy sí es posible trabajar desde el hogar para muchos. Pero esta modalidad no debe prestarse para abusos (como trabajar más de las horas remuneradas o en cualquier momento que el jefe lo solicite). Lo que busca esto es que el empleado pueda dedicar tiempo durante la jornada laboral para cuidar y educar a sus hijos, asegurando a la empresa el cumplimiento de sus objetivos y metas laborales.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que los parlamentarios tengan un sueldo normal, no exorbitante, para que la gente esté ahí por vocación y no por interés monetario. Mirar caso de Suecia https://www.google.cl/amp/s/www.bbc.com/mundo/amp/noticias-internacional-47280693',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'pablorovetto',
              type: 'Reforma/ca',
              body: 'Eliminar los sueldos vitalicios para nuestros presidentes.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'pablorovetto',
              type: 'Reforma/ca',
              body: 'Optimizar el trabajo de la cámara de diputados sesionando remotamente y delegando el trabajo distrital de campo y de comisiones.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Flvivanco@uc.cl ',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Crear un filtro que verifique la vocación real de la persona cuando postule a un cargo público. Es decir, asegurarse (o filtrar mejor) que aquellos que postulen a un cargo público lo hagan por una vocación al servicio y no por una búsqueda, en primer lugar, de fama o riquezas.\nDel mismo modo como un profesor asume (no por ello se justifica) un sueldo bajo ya que la vocación por la educación prima en su actuar y no las ansias de riqueza. \n\nLos políticos, o cualquier cargo público con autoridad, manda, pero debiese mandar desde el servicio para los demás. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'pablorovetto',
              type: 'Reforma/ca',
              body: 'Actualizar nuestro código penal, penas más duras a las situaciones que verdaderamente nos aquejan, para los delitos de cuello y corbata no pueden pasar a ser un costo hundido delinquir.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'gargantua5799@gmail.com',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Creo que debería haber un sueldo base de 500 mil pesos a todas las personas que cumplen el rol de cuidador de un sujeto que requiera cuidado y monitoreo constante de su estado de salud. Tengo una prima madre de 2 niñas de las cuales la menor sufre glucogenosis lo que lleva un régimen muy limitado y horarios rígidos de alimentación, ella se ha capacitado para la.instalacion de sueros y otros aditamentos médicos que la niña necesita y la lleva a cheque Is médico. Esto la lleva a abocarse como cuidadora y dueña de casa y su pareja (padre de las dos niñas) recae la carga laboral. Viven en P. Montt. Ella y su familia es una de muchas personas que vuelvan la vida al cuidado de otros en situaciones extremas. Esto debería ir acompañado de una certificación de la persona como cuidador.  Cuyo proceso no fuese engorroso. Ese sueldo base ayudaría de alguna manera a la compra de insumos del que está siendo cuidado y aliviar al bolsillo del cuidador.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Trabajar en que los recursos sean más que suficientes para el SENAME y que NO se aguante una VIOLACIÓN más a los derechos humanos de estos pequeños indefensos y vulnerables. Que sean CASTIGADOS severamente por la ley aquellos que se atrevan a maltratarlos, en todo sentido, que NO queden IMPUNES aquellos DELITOS. \nPOR FAVOR, PIENSEN EN LOS NIÑOS QUE LOS NECESITAN CON REAL URGENCIA, NO LOS ABANDONEN. \nPiensen en REHACER este sistema. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Así mismo, no abandonen a nuestra población de adultos mayores, la cual va cada vez más en incremento. \nPiensen que merecen llegar al final de su vida de manera DIGNA, y no recibiendo, no tratando de sobrevivir con una pensión tan INDIGNA como la que llevan recibiendo hace tantos años. \nIntenten REAJUSTAR aquellos montos por uno que sea realmente favorable a sus necesidades. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'pablorovetto',
              type: 'Reforma/ca',
              body: 'Actualizar nuestro código penal, penas más duras a las situaciones que verdaderamente nos aquejan, para los delitos de cuello y corbata no pueden pasar a ser un costo hundido delinquir.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'pablorovetto',
              type: 'Reforma/ca',
              body: 'Estatizar la producción y distribución eléctrica, financiar la inversión estructural con dineros previsionales.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'pablorovetto',
              type: 'Reforma/ca',
              body: 'Estatizar la producción y distribución eléctrica, financiar la inversión estructural con dineros previsionales.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'pablorovetto',
              type: 'Reforma/ca',
              body: 'Todos los nuevos proyectos de infraestructura (puentes, caminos, carreteras, puertos, aeropuertos, túneles, etc) financiarlos un cuarto el estado, dos cuartos privados y un cuarto AFPs (en representación de nosotros para aumentar nuestra futura pensión)',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'Ngiturrate ',
              type: 'Proyecto d',
              body: 'Sistema de pago en supermercados por bandas. Todo aquel que tenga un ingreso menor a $400.000 pague la mitad del total de la boleta. De esta forma, si las marcas suben sus precios para aumentar utilidades, los ricos se ven afectados a mayor escala.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'ripacn2@gmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Básicamente que los funcionarios públicos, en especial de alto mando (presidente, ministros, etc), solo puedan ocupar los servicios que ofrece estado, tipo: sistema de salud, educación (para sus hijos), pensiones, etc. Así podrán encontrar fallas y soluciones de forma más eficiente ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Enfermedades de salud mental cubiertas por el plan Auge ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Analizar bien los huella de carbono e hídrica de diversos productos y generar un impuesto verde para poder recaudar más dinero para combatir la desigualdad y al mismo tiempo, desincentivar el consumo de productos poco amigables con el medio ambiente. Por ej: la carne',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Mejor calidad de profesores',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'Alonc.w',
              type: 'Reforma/ca',
              body: 'Disminuir la segregación a base de un impusto sectorizado. La idea es que favoresca a las empresas que opten por ponerse en sectores con menos recursos.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'famascaro@uc.cl',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'El salario de los cargos públicos dependerá de la asistencia y cumplimiento de sus labores (ej. Diputado que no va a una sesión tiene un descuento en su remuneración mensual, como en cualquier trabajo), en conjunto, con la reducción de viaticos, entre otros y fuertes sanciones a las malas prácticas en los cargos, como "apitutamiento", abuso de poder o de sus facultades, uso personal de las asignaciones mensuales parlamentarias y otros beneficios que corresponda según cargo',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: '1) Bajar dieta parlamentaria en un 50% (sigue siendo un sueldo de lujo igual)\n2) Que eliminen el sueldo vitalicio a los ex presidentes (En qué empresa que dejas de trabajar te siguen pagando de por vida un sueldo y millonario más encima) \n3) Redistribución de los bienes y ganancias del estado (sobre todo enfocado a todo lo que se va destinado en vivienda, educación y salud para las FFAA, yo lo encuentro innecesario, si fuera más justo hacia la población, ayudaría mucho) \n4) Cambiar la constitución (sé que se demorarían mucho mucho tiempo pero siento que es algo necesario para así solucionar los problemas de base, aparte no nos podemos regir por una constitución que se hizo en dictadura)\n5) Terminar con la colusion de las farmacias, ya que los medicamentos no cuestan esa millonada que te imponen las farmacias privadas, con ese cambio muchas personas podrían disfrutar más de un sueldo mínimo, ya que la mayoría de las personas en chile sufren gastos en medicamentos\n',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Aliagamv@gmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Respetar y fortalecer la familia,devolviendole la autoridad y responsabilidad a los padres',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'famascaro@uc.cl',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Elaborar planes de reinserción social para disminuir el ciclo delictivo al salir de la carcel, enfocandose en el problema personal que llevo a esa persona a delinquir (entorno social, alcoholismo, adicción, problemas económicos, etc), apoyado de una evaluación psicológica.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Jaime-bravo@live.cl ',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Resignación de presupuestos y mayor aporte de municipalidades más ricas a más pobres ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que a cada auto al momento de la revisión técnica se le asigné un número, proporcional a cuánto contamina y en base a eso hayan restricciones en días que sea necesario, el sistema actual se basa en el falso supuesto de que mientras más viejo el auto más contamina, ignorando que por ejemplo el tamaño de motor y la cantidad de cilindros, etc. Influye más. Que un city car de hace 10 años tenga más restricciones que un 4x4 nuevo, es un error que debemos corregir, además de que así sacamos el incentivo a cambiar el auto cada pocos años.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'famascaro@uc.cl ',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Poner en urgencia la corrección del artículo 8 de la ley 20780, donde establece que el costo por pago del impuesto a las emisiones de CO2 lo deben pagar todas las empresas eléctricas que efectùen retiros de energía del sistema, lo que implica que empresas de generación eléctrica con energías renovables también paguen un impuesto por un contaminante que no emiten en su operación. Es por esto que debe ser corregido, haciendo que las empresas de generación electrica en base a energías renovables (como solar o eólica entre otras) no deban pagar este impuesto',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'IVA diferenciado según tipo de bienes: \nCanasta familiar básica (iva 10 %)\nBienes de lujo, cigarrillos, alcohol y autos sobre un cierto valor (iva 30%)\nResto de los bienes (iva 20 %)',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Valentinakobus@gmail.com',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Someter a consulta ciudadana formal (plebiscito) la aprobación del TPP-11. Es una decisión que nos afectará a todos; tanto en el ámbito de salud, económico, agricultura como medioambiental. Nadie ha informado de manera transparente sobre las consecuencias a largo plazo que tendría este tratado y es importante que la ciudadanía tome conocimiento y se manifieste a favor o en contra del tratado. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Reducir cantidad de apitutados políticos en municipalidades, gobernaciones, etc.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Eliminar el hecho de que los empleados públicos no puedan ser echados ni evaluados por desempeño',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'lfgarridom@gmail.com',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Castigos ejemplares para actos de colusión y de corrupción. Que sea mayor la penalización que lo incurrido en daños (por ejemplo 50% más).',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Aumentar los cupos en la carrera medicina y otras carreras de la Salud. Hay tantos estudiantes hiper inteligentes y talentosos (que incluso ponderando sobre 750 en la psu) no logran entrar a medicina en las mejores universidades.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'Jt.loayza',
              type: 'Reforma/ca',
              body: 'Asamblea constituyente y cambios estructurales ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'famascaro@uc.cl',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Establecer un monto máximo que pueden recibir los cargos de las empresas asociadas al estado y licitaciones estatales como CODELCO, metro, transantiago, entre otras.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Otorgar al Sernac de capacidad fiscalizadora  real,  que le  duela a quien trate de coludirse , falsear precios  o engañar de cualquier forma a los consumidores.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Educación es el punto de inflexión de un país. No debiera ser manipulada por el gobierno u otro poder económico de turno, no debe ser comercializada como es hoy día.  La educación es el gran poder de un país para salir de la pobreza, desigualdades, etc.  Propongo crear un nuevo poder del estado: educación,  independiente del legislativo, ejecutivo y judicial,  con sus propias autoridades y presupuestos.  Creo que eso haría un cambio real en Chile.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Mrgonzalez@uc.cl ',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Crear más espacios abiertos de divulgación científica. Propongo que la ciencia y la tecnología se tomen el espacio público con diversas intervenciones que llamen a niños y adultos a informarse y aprender. Podemos generar tecnológicas interactivas que nos permitan entregar a la gente de forma amena el conocimiento que se produce en la academia. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Comisión del ministerio de hacienda que busque identificar y sancionar CONSIDERABLEMENTE a los evasores de impuestos y responsables de coludiones y estafas millonarias.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'desprivatizar el agua',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Propuesta para mejorar la eduación básica y media en Chile que persiste aúm hasta el actual año 2019:\n\nCrear un proyecto de ley que establezca una educación igualitaria en base a una base de ingresos financiada de 2 formas: 1) por el estado y sus recursos en el caso de ser un establecimiento público; 2) y por el establecimiento de carácter privado o subvencionado financiado con un prcentaje directamemte proporcional a los ingresos de los avales que financian la educación de sus representados, en suma por el estado como financiación complementaria si esque dichas financiaciones de avales no alcanzan a cubrir los gastos necesarios. Sobre este punto el porcentaje de financiación de los avales de los establecimientos subvencionados es menor al de los privados.\nDe esta forma con esta nueva ley se crea una base para proporcionar mejoras en la docencia y materiales pedagógicos, ademas de la posiblidad de mejorar dicha ley con mejoras legislativas de modificación de aquella con medidas que busquen y amparen la mejora de la.educación según los contextos socio-económicos y políticos en los que esta sumergida la educación actual en nuestro país Chile.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'Fenatellez',
              type: 'Reforma/ca',
              body: '1) Educar a las personas respecto al funcionamiento de las AFP (Top 10 sistema de pensión a NIVEL MUNDIAL)  2) Hacer que las AFP cobren comisiones más bajas, y de manera progresiva (dado cierto rango de salario cobrar x monto y luego ir subiendo)  3) Fortalecer un pilar solidario para las personas que poseen menores ingresos en su jubilación. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Bajar el IVA, que actualmente es de un 19% a un 4% para los productos de primera necesidad tales como: agua, artículos de aseo personal, pan, leche, etc.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Prohibir y regular ciertos proyectos inmobiliarios tales como guetos verticales y “nanodepartamentos”, establecer cantidades de m2 mínimos, y en caso de que se trate de departamentos pequeños establecer medidas compensatorias que mejoren la calidad de vida de las personas. Por ejemplo, si se van a construir departamentos con menos de 30m2, obligar por ley a la inmobiliaria a dejar un espacio para áreas verdes.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Creación de una app oficial, segura y gratuita a la que se cree una cuenta asociada a el rut y una contraseña, mediante la cual se puedan realizar sondeos y plebiscitos de manera efectiva para aumentar tanto la participación ciudadana como la democracia directa, al votar y elegir temas de contingencia nacional (se quita parte de la burocracia asociada al sufragio y permite que la ciudadanía elija sin representantes u intermediarios), en otras palabras, se le entrega más poder sobre sus propias decisiones. El congreso deberá acatar o tomar en cuenta los datos recopilados dado un quórum mínimo.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Eliminación de los conservadores de bienes raíces. En el sistema actual, son designados por el presidente de la república y obtienen sueldos injustificablemente altos (hasta 700 millones mensuales) que salen del bolsillo de los chilenos. Debido a la forma de asignar el cargo, se presta para nepotismo y favores políticos. En la práctica son reemplazables, puesto que existen soluciones tecnológicas capaces de realizar todas sus labores por un costo ínfimo en comparación.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Hacer una ley de donación con importantes beneficios tributarios para que las empresas puedan donar para la reconstrucción',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'j.catalanvillablanca@gmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Mejoras crédito CAE',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Aumentar de manera considerable el impuesto a las drogas legales, como el alcohol, el tabaco y los cigarros.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Seguro universal de salud, transformando a isapres a empresas de seguro complementario donde un porcentaje tenga que ir a sistema publico. Prestadores privados y públicos',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Cambio de modelo. Estado subsidiario. Redistribuir ganancias de bienes nacionales e impuestos, en un orden de prioridades según real necesidad del país. Limitar y excluir al privado de acciones que le corresponderían al estado: educación, salud, energía, bienes nacionales, etc. Gasto en las personas. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'La anulación del TPP-11 ya que se aprovo durante el movimiento social y su alto costo a la calidad de vida de los chilenos y chilenas',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Josefa.vasquez@usach.cl',
              instagram: 'Josefaypunto',
              type: 'Proyecto c',
              body: 'Mejorar la salud mental calando en los determinantes sociales ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Por que ir en contra de la naturaleza? La desigualdad existe y seguirá existiendo. Si uno quiere imponerse ante la adversidad, no queda más  remedio que dar todo de uno mismo a por ello. Repito de UNO MISMO. No esperemos que nos premien por el solo hecho de ser hombre.\nNo nos olvidemos que lo que son derechos para algunos, son obligaciones para otros. \nMerecemos el fruto de nuestro esfuerzo y no más.\nNo intenten con sudor y lagrimas encajar. Vivan su propia realidad. Encuentren sus pasiones. \nSolo así lograremos ser hombres. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'soficlement',
              type: 'Proyecto c',
              body: 'buses con bicileteros y mejorar la conectividad de las ciclovías en Santiago. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'vmonttb@yahoo.es',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Crear leyes duras en cuanto a la seguridad. Si te asaltan que cumplan penas en la carcel, si es necesario construir mas carceles y que ellos mismos trabajen dentro de ella para alimentarse.\n',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'fran_4399@hotmail.com ',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Desde hace años que todos hemos escuchado el término educación de calidad, sin embargo, nunca hemos especificado a qué nos referimos con ello. Personalmente, creo que este término trasciende lo académico y, por tanto, la educación de calidad debería enfocarse a la formación de ciudadanos integrales que se preocupan de su ser emocional y que día a día buscan cultivar su espíritu y no su estatus; que establecen vínculos sociales sólidos y sanos, basados en empatía y amor. También, una educación que nos conduce a cuidar nuestro planeta, dado que gracias a él podemos seguir existiendo, junto con una formación que nos conduzca también a establecer vínculos con todos los seres que habitan el planeta, dado que todos somos necesarios🌟. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'fran_4399@hotmail.com ',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Sin duda, los vínculos sociales son esenciales para la vida de cada ciudadano, por lo que la calidad de vida cambiaría si cada uno de nosotros trabajara en la misma comuna que habita y si los estudiantes asistieran a un colegio de la misma comuna. Así, pasaríamos más tiempo con nuestras familias, ahorraríamos dinero en transporte, reduciríamos la huella de carbono, existiría una mejor formación, entre muchas otras cosas más. Pero para ello, debe existir una reforma por parte de las municipalidades para que así tenga como prioridad a los vecinos de la comuna al momento de contratar y, a su vez, debe fortalecer sus escuelas, con el fin de que cada una de ellas sea la mejor opción para sus ciudadanos, al igual que en Finlandia (aunque parezca utópico, es posible). ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Fondos para hacer de chile un país turistico',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'pablorovetto',
              type: 'Reforma/ca',
              body: 'Que se nos calcule y pagué a todos pensiones como si viviéramos hasta los 83 y 88 años (hombres y mujeres), los que viven más, que lo cubra un seguro de longevidad pagado por el estado.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Crear una tarifa mensual en el sistema de transporte publico que este unida al rut de cada persona, no como la actual tarjeta BIP. Con esto se podría dirigir de mejor manera una tarifa diferenciada según el nivel de ingreso por ejemplo. Si una persona tiene un ingreso bajo o por ejemplo esta cesante, automáticamente su tarifa se modifica. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Lucas.cortes@mail.udp.cl ',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Somos de los países con mayores impuestos de la ocde. Ya sabemos que el estado no administra bien los recursos, y Piñera anunció que va a crear un impuesto de 40% a las rentas superiores a 8 millones. O sea, cualquier persona con una mediana empresa tendría que contribuir 40% de sus ingresos sólo a impuestos (sin mencionar el montón de trabas burocráticas para crear una empresa). Estas medidas lo único que hacen es desplazar la inversión a otro lado, y con eso también se pierden puestos de trabajo. Podemos mirar a España que tiene una política parecida y están en una profunda crisis y un paro enorme. Yo propongo mantener el mismo impuesto para todos (20%) y les aseguro que incluso se recaudará más. Donald Trump bajo',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Libros sin IVA',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Fijar los sueldos en unidades de fomento (UF), y así evitar la pérdida de poder adquisitivo de los trabajadores, ya que, se iría reajustando y se terminaría con la problemática año a año.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Asamblea constituyente, es clave!!',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que los politicos tengan que demostrar que estan capacitados para ejercer su cargo (titulo de autoridad en su area), asi se evitan cargos por pituto.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'L@s estudiantes de Medicina, una vez terminada la carrera, deberían realizar una práctica obligatoria por una cierta cantidad de meses en hospitales públicos (similar al caso de los abogados) para que en el ámbito de la Salud de Chile, existan más profesionales que puedan colaborar para que el sistema no sea desigual y no sea poco digno. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Sueldo mensual que puede ser equivalente a lo que ganan los militares o carabineros para cada deportista seleccionado nacional para que se financie la carrera y el país logre mas clasificaciones olímpicas ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Recorte de gastos innecesarios como asistentes políticos y trabajadores gubernamentales innecesarios, y igualar la proporción de impuestos a empresas grandes con pymes',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Eliminar la reforma a afps realizada por Lagos. Esto significa que afiliados dejen de asumir las perdidas de las afps. No tiene sentido que nuestra prevision se vea afectada por culpa de un mal negocio.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'grcastro@uc.cl',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Que las empresas les paguen, al mes de Octubre los bonos por ventas a los trabajadores',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Hagamos que los sueldos de cargos públicos no sean fijos, sino que se limiten a mantener la vida de los funcionarios. En otras palabras, que en vez de pagar un sueldo fijo todos los meses, sean los mismos trabajadores que realicen un balance de cuentas de sus gastos (como trabajadores, no como particulares) y que estos sean cubiertos por el gobierno, dejando al mínimo el margen de ganancia. Con esto, se devolvería el sentido a la política y los cargos públicos: el servicio y preocupación por los demás, no el lucro personal. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Jocelyn.kdh@gmail.com ',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Cambiar a los administradores de los centros de salud, en todos sus niveles, los médicos deben salvar vidas, atender a las personas, no administrar los escasos recursos de la salud pública.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'jocelyn.kdh@gmail.com ',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Evaluar la calidad del apoyo tecnológico que tienen los centros de salud, desde su infraestructura tecnológica, hasta las diversas plataformas donde deben ingresar la información de los usuarios, generando una gran pérdida de tiempo e ineficiencia en la información, lo que genera una cultura pública resistente a los cambios. La tecnología y las buenas plataformas pueden ayudar a generar una mejora sustancial en el uso de los recursos e impacto a la calidad de vida de las personas.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'flodonoso4',
              type: 'Reforma/ca',
              body: 'Fijación de precios para consultas médicas, operaciones, intervenciones médicas y dentales.\nHoy en día se lucra mucho con esto, siendo uno de los mayores gastos dentro de una familia chilena, donde la salud debe ser un derecho de todos y al que muchos no pueden acceder por los altos precios o las largas filas de espera. \nMuchos médicos se están haciendo millonarios a costa del endeudamiento de los chilenos y eso no puede ser. Y las isapres poco y nada ayudan para palear estos gastos. \nPor eso propongo que se fijen precios máximos, para que clínicas y médicos no se aprovechen y así todos tengamos la misma oportunidad de acceso a salud de calidad, ya sea en clínicas u hospitales. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'jocelyn.kdh@gmail.com ',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Con la eficiencia que tiene Metro en el uso de los recursos, la experiencia en en transporte público y la cantidad de dinero que se inyecta anualmente a las empresas del TranSantiago, no es posible que este en manos del sector privado. El transporte público debe ser administrador por el Estado. Ya no hay forma de volver a recuperar la confianza de la población sin cambios sustanciales. Metro o alguna organización con este nivel de eficiencia debe hacerse cargo del transporte y administrarlo eficientemente, incluso podrían obtener recursos por publicidad en las micros, apoyo de marcas para wifi, etc. Una serie de estrategias y negociaciones que el Estado podría generar para rentabilizar el sistema de transporte que por años no ha mejorado sustancialmente.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'mrafols@uc.cl',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: '[Ahorro Solidario Intrageneracional] Que el sistema solidario de pensiones sea por un ahorro entre los miembros de una generación y no (solo) un ahorro individual, de tal manera que sin terminar con las AFPs (que es casi imposible) se logre una buena distribución del ingreso. Y así evitamos el problema del envejecimiento de la población.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'josecarvalloi',
              type: 'Reforma/ca',
              body: 'El PIE (proyecto de inclusión escolar) debería ser implementado en todos los colegios sin excepción asegurándose de adaptar las infraestructuras de todos los colegios y contar con profesionales que potencien el desarrollo de esos niños, como funciona en otros países. Se debería sancionar a los colegios que discriminan a personas con discapacidad y no les permiten su ingreso. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Bajar el impuesto a la comida ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Establecer una carta de deberes civiles para la ciudadanía para que ellos tengan la responsabilidad de velar y mantener tanto los bienes públicos como privados durante las marchas y entregar a las autoridades correspondientes a las personas que causen desmanes. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'josecarvalloi',
              type: 'Reforma/ca',
              body: 'Eliminar las restricciones anuales de atenciones de profesionales de  rehabilitación en el sistema FONASA para las personas con situación de discapacidad. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'josecarvalloi',
              type: 'Reforma/ca',
              body: 'Que los doctores tengan la obligación de trabajar en el servicio público (hospitales, APS)  al menos un 20% de su jornada.  ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'josecarvalloi',
              type: 'Reforma/ca',
              body: 'Reforzar los centros de Atención Primaria en Salud con mayor cantidad y variedad de profesionales de la salud. Fomentando actividades multidisciplinarias de prevención y diagnóstico oportuno de distintas condiciones de salud que puedan afectar a la población.  Así mejorará el acceso a la salud de las personas, disminuirán las listas de espera dentro de los mismos consultorios, disminuirán las aglomeraciones en los hospitales y por esa misma razón disminuirán los grandes gastos que se generan en los centros de atención secundaria y terciaria.  ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Que la clase politica DEBA ser ejemplo en el cumplimiento de la ley. Así, que si un político incumple con la ley tenga mayores consecuencias que lo normal (p.e suspencion mensual de sueldo; maximo de 3 faltas, si no, destitucion; entre otras opciones) tal como tengo entendido que pasa con los abogados. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'drvalle@gmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Que las dietas parlamentarias sean proporcionales al Sueldo Mínimo y que a los diputados y senadores se les pague de acuerdo a su asistencia',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'drvalle@gmail.com',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Que las empresas cambien sus casas matrices a las regiones donde tienen su operación. Que paguen sus impuestos y patentes en las regiones.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Ya hemos hecho un gran trabajo etiquetando todos los alimentos altos en calorías, grasas y azúcares que sin duda perjudican nuestra salud. Dentro de la propuesta de un IVA diferenciado, podríamos recolectar más IVA en los productos que son nocivos para la salud. De esta forma, podemos recolectar más dinero para financiar otras iniciativas y de paso promover la vida sana.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'El impuesto específico existente a la bencina se aplicó para restaurar carreteras destruidas el año 1985, y aún sigue vigente. Dado que el impuesto sirve para recaudar fondos, la propuesta es eliminarlo para  aquellos que lo usan de manera particular (público y residencial), dado que representa un gasto tremendo para el público general, mientras que las empresas pueden manejarlo como costo dentro de los valores que tienen de precios. \n',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Drvalle@gmail.com',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Transformar nuestro Sistema de Salud Curativo a uno Preventivo. Debiésemos enfocarnos en evitar las enfermedades desde un punto de vista holistico en vez de enfocarnos en curar las enfermedades. Y para aquellas enfermedades catastróficas, cubrirlas en su totalidad y acompañarlas de uso compasivo. Creo que es momento de mirar la vida con otra perspectiva. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'ptmedina@uc.cl',
              instagram: 'Pablomedina980',
              type: 'Reforma/ca',
              body: 'Que al momento de comprar cualquier cosa en la boleta aparezca el monto exacto de la parte del precio que corresponde al IVA u otro impuesto. Ejemplo de esto es EEUU. Así la gente sabría la cantidad de dinero que realmente paga en impuestos y estaría más preocupada de lo que hacen los políticos con  este.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Eliminar el impuesto específico ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Gaboxix@gmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Bueno hola parto con saludar, ya que encuentro bacan que estén dando estas instancias a la gente para poder expresar su opinión de la manera que estimen conveniente. Me encantaría saber que eso no se va a quedar en nada como la mayoría de las cosas que son pura palabrería y bonita a demás, por lo que esperaría que se hicieran públicas las propuestas para dar a conocer las ideas de la gente.\n\n\nAhora si mi propuesta tiene que ver con una redistribución de los impuestos y de las ganancias de algunas de las empresas más grandes en chile.\nPrimer punto tiene que ver con bajar la Plata que está destinada a las fuerzas armadas, ya que no estamos en una guerra y el mundo está en tendencia a no entrar en guerra, por lo que la gran cantidad de impuestos e ingresos generados por otros medios que vana a parar hacia los militares se podría reducir de manera drástica y ojalá llegar a seguir el ejemplo de Costa Rica algún día y abolir el ejército.\nLa Plata que está destinada de parte de cordel o hacia el ejército, ese han hablado 10% que no necesita ser evaluado ni comentado a nadie debería dejar de existir y destinarse a otras cosas como educación.\n\nPor qué lo más importante en todo esto es la educación, una persona educada va a tener un mejor trabajo, por lo que impone más y finalmente tendría una buena educación. Sabría las cosas que firma y en las cosas que se está metiendo de manera legal y finalmente serían más felices.\n\nPor otra parte hacer que el agua se vuelva un recurso natural de parte del estado y de todas y todos los chilenos, para así poder ser subsidiada y pagar menos o de lleno no pagarla.\n\nQue las concesiones de las carreteras sean públicas es un bien del cual el país se podría hacer de lo mejor y si no es posible destinar el ingreso de estos de manera más equitativa con los probados que las manejan.\n\nLa verdad para mi lo ideal sería un gobierno que fuera mixto, un estado mixto con políticas económicas de libre mercado y políticas sociales que resguarden a sus ciudadanos.  ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Aumentar el sueldo de los profesores. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'Stephitrautmann',
              type: 'Reforma/ca',
              body: 'Para mejorar la educación, la carrera de pedagogía debería estar al mismo nivel que la carrera de medicina en términos de exigencia para el ingreso a estudiarla, y los sueldos deberían estar a la misma altura también, para que sea atractiva para los más capaces de Chile. Aparte de que debería ser gratis...',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Aborto libre y seguro ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Mayor acceso a la cultura para todos los niveles socioeconómicos',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Se necesita invertir en el servicio de inteligencia.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'En E.E.U.U. existe el “earned income tax credit” donde a las personas más vulnerables se les devuelve parte del pago de impuestos, sujeto a que tengan que trabajar (alinea incentivos). Es una excelente medida para fomentar que la gente se emplee, que además aumenta el ingreso disponible de las familias. \n*explicado de manera muy general',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'elisarriagada97@gmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Se debiera hacer una “canasta básica de alimentos” que contenga todos los alimentos básicos y necesarios para una dieta saludable (siguiendo las recomendaciones del MINSAL): legumbres, carnes bajas en grasa, pescado, arroz, cereales, lácteos, papas, verduras, carbohidratos, frutas... y que estos alimentos tengan un impuesto mínimo. De esta forma, permitiría que todos los chilenos tengan acceso a una buena alimentación a un precio razonable. Para compensar la disminución de estos impuestos, se le suben los impuestos a todos aquellos alimentos que no forman parte de lo necesario en la dieta o son perjuiciosos para la salud: bebidas, helados, comida chatarra, alcohol, galletas, embutidos, pastelería... De esta manera no sólo todos los chilenos tendrían  acceso a comida de calidad a un precio asequible, sino también sería beneficioso para la salud, permitiéndonos reducir el sobrepeso que tiene la mayoría de la población, incluyendo niños, que llevan a difíciles enfermedades como hipertensión arterial, diabetes, cáncer... Prevenir estas enfermedades a través de una correcta alimentación seria un gran ahorro para el ministerio de Salud, permitiendo invertir en otras enfermedades.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'No se debería cobrar IVA a los productos de primera necesidad. Esto incluye medicamentos, pañales, confort, productos de higiene femenina...\nY en particular, cuestionarse la magnitud del impuesto específico a los combustibles (cercano al 40%).',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'elisarriagada97@gmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Continuando con mi propuesta anterior, se debería hacer una “canasta básica de medicamentos y productos farmacéuticos básicos”, que incluyan los medicamentos más utilizados y los dirigidos a las enfermedades más prevalentes de la población chilena. Estos medicamentos y productos tendrían un impuesto mínimo, y para contrarrestar la bajada de impuestos, se le suben los impuestos a alcohol, tabaco y actividades que fomenten el sedentarismo como el Play Station. También, que haya un impuesto diferencial entre los medicamentos propiamente tal y otros productos de farmacia que no son de uso básico como: aceite para el pelo, maquillaje, accesorios para el pelo...De esta manera, los medicamentos podrían ser un poco más alcanzables para la población. En cuanto a “productos básicos de farmacia”  incluyo cosas de necesidad básica que toda población debe usar: factor solar (que tenga impuesto mínimo y que el factor 50 sea el más barato de todos los factores, dado que todo el mundo se deberia poner), toallitas higenicas, desodorante, implementos de higiente oral y dental, pañales, alimentación de guaguas... Por supuesto considerando los productos básicos y que pueden ser utilizados por todo el mundo. Por ejemplo: incluir pasta de dientes de 1450 ppm de fluor, pero la pasta blanqueadora mega white extreme no incluirla porque eso ya va más allá de la higiene.)',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'Mabelperez31@gmail.com',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'En salud cambiar al ministro, sanciones más drásticas a la colisión, aumentar el recurso destinado a este item... Mejorando la atención... Quitando recursos a la salud privada',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'Karinmas',
              type: 'Reforma/ca',
              body: 'Que la educacion no sea un negocio, debe ser entregada por el Estado y que funcione, deberian cobrar impuestos (proporcionales a los ingresos de cada uno) solo dirigidos a la educacion. Los profesores deberian ganar mas sueldo, deberian tener mas beneficios. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'En relacion a la propuesta que dice fijar precios maximos a horas de medicos, eso dificilmente es realizable. Sin embargo, actualmente muy pocos medicos estan atienden pacientes fonasa en sus consultas. La propuesta sería fijar por ley que todo medico debe atender a una cierta cantidad minima de  pacientes fonasa. Esta cantidad deberá depender de factores tales como habitantes de la comuna, disponibilidad de especialistas en su area, etc',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'La gran mayoría de los problemas de la salid pública en Chile, se deben al mal manejo de los recursos entregados. Por lo tanto, debiera existir un cuerpo independiente de los centros y hospitales que se encargue de la administración (según las necesidades de cada centro). Así no solo se logra supervisar de mejor manera los gastos, sino también lograr una mayor eficiencia. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Exigir en cada carrera que sus alumnos participen en algún proyecto social. Desde una fundación, hasta incluso una práctica social. Así se logra concientizar a sus alumnos en poner su profesión al servicio de Chile.  ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Ya que es dificil implementar cambios bruscos al sistema de AFPs, se podría implementar YA! que todos los pensionados reciban al menos el sueldo mínimo usando sus fondos, más adelante cuando se acaben el gobierno automáticamente los proveerá con la pensión básica solidaria, la cual debe ser al mismo tiempo gradualmente aumentada para que llegue al sueldo mínimo en una fecha fija.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto c',
              body: 'Proyecto a clases sociales que no tienen acceso a cultura y educación de calidad a través de workshops para enseñarles de educación civil y las políticas públicas a las que esta asociado nuestro país y cómo funcionan. Esto a través de la colaboración de diferentes áreas la cual cada una aportará con su desempeño ej : comerciales, sociologo, abogado, diseñador...',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'nan',
              instagram: 'arichuaqui',
              type: 'Reforma/ca',
              body: 'Volver al voto obligatorio y mantener la inscripción automática. Estos últimos días se ha hablado mucho sobre lo corrompida que esta toda la clase política, pero se nos olvida que la participación electoral fue menor que 50% para las elecciones presidenciales pasadas, y menor que 40% para elecciones de alcaldes y consejales. Piñera fue legítimamente electo por sólo el 26,4% (3,7 millones de votos) del padrón electoral. Esta despolitización (o indiferencia) daña la salud de nuestra democracia. Necesitamos que la política vuelva a ser responsabilidad de todos. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Reducir el número de congresistas a 120 diputados y 40 senadores, manteniendo sistema proporcional y distritaje (más de 2 congresistas por distrito/ circunscripción) evitando volver al sistema electoral binominal.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Proyecto d',
              body: 'Qué pasa con :\n- Grandes Grupos económicos chilenos que han obtenido sus increíbles ganancias y no las invierten en Chile, sino en el extranjero. Ejemplos hay muchos: Paulman, Grupo Falabella. BCI, etc. \n¿Que impuestos pagan pagan por sacar el dinero del país?. ¿Que impuestos pagan las remesas de dólares a paraísos fiscales?\n- Empresa Chilenas exportan a Empresas de su Propiedad en el Extranjero. A precios bajo los de Mercado. Entonces esa empresa “chilena” en el exterior vende los productos a valores de mercado y no paga los impuestos en Chile. Ej clásico es Soquimich',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: false,
              email: 'mjdiestre@uc.cl ',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: ' Para bajar los precios del metro para los primeros quintiles (personas con menor ingreso), podrían eliminar la universalidad de la TNE y que no cubra a los estudiantes de los quintil más altos, porque ellos pueden pagar el precio normal del transporte. Que esa plata se utilice para cubrir el transporte de las personas del quintil más bajo y que tengan como una tarjeta especial que les cobren la mitad de precio normal del transporte.',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Propongo enseñar educación socioemocional a las chilenas y chilenos desde la primera niñez y a lo largo de toda la educación prescolar, escolar y superior. Que esto se incluya en las leyes que rigen  la educación es vital, pues se nos enseñan muchos contenidos, pero no se nos enseña a desenvolvernos en una sociedad junto a otros y de manera emocional. ',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      {
          privacy: true,
              email: 'nan',
              instagram: 'nan',
              type: 'Reforma/ca',
              body: 'Becas 100% Universidad Del Pacifico',
              createdAt: new Date(),
              updatedAt: new Date(),
      },
      
      ];
    /*

      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('posts', postData);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('posts', null, {});

  }
};
