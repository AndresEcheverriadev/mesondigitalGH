const legalInput = "{input}";

const documentosPlantilla = [
  {
    title: "Declaración Jurada de Mudanza (Salvoconducto)",
    subTitle: "Arrendatario",
    id: "mudanza01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Hogar", "Casa/Departamento", "Declaración jurada"],
    observaciones: "Vigencia de 5 días desde la firma del notario",
    requerimientos: [
      {
        tipo: "Documento",
        reqText:
          "Poder Simple del propietario del inmueble que se deja autorizando la mudanza. Si el contrato de arriendo no está ante notario, este poder debe ser ante notario",
      },
      {
        tipo: "Documento",
        reqText:
          "Contrato en original de arriendo (o copia autorizada) del inmueble que se deja.",
      },
      {
        tipo: "Comparencia",
        reqText:
          "Comparecencia personal del arrendatario que firmó en el contrato",
      },
      {
        tipo: "Documento",
        reqText: "Cédula de identidad vigente del arrendatario",
      },
      {
        tipo: "Documento",
        reqText:
          "Fotocopia de la cédula del propietario del inmueble que se deja. Debe ser la misma persona que firmó en el contrato de arriendo (si son varios, basta uno).",
      },
      {
        tipo: "Documento",
        reqText:
          "Comprobante del pago del último arriendo del inmueble que se deja",
      },
      {
        tipo: "Documento",
        reqText:
          "Comprobantes de Gasto Comunes, agua y luz al día del inmueble que se deja.",
      },
    ],
  },
  {
    title: "Declaración Jurada de Mudanza (Salvoconducto)",
    subTitle: "Propietario",
    id: "mudanza02",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Hogar", "Casa/Departamento", "Declaración jurada"],
    observaciones: "Vigencia de 5 días desde la firma del notario",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de al menos uno de los propietarios",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del propietario que comparece",
      },
      {
        tipo: "Documento",
        reqText:
          "Acreditar propiedad del inmueble (Escritura o título de dominio vigentes, que se obtienen en Conservador de Bienes Raíces respectivo).",
      },
    ],
  },
  {
    title: "Certificado de Residencia",
    subTitle: "Declaración Jurada de Residencia",
    id: "residencia01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Viaje", "Certificados", "Declaración jurada"],
    observaciones: "",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del declarante.",
      },
      {
        tipo: "Documento",
        reqText: "Cédula de Identidad vigente del declarante",
      },
    ],
  },
  {
    title: "Carta Invitacion Extranjero",
    subTitle: "",
    id: "cartaExtranjero01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: true,
    directly: true,
    custody: false,
    print: false,
    tags: ["Viaje"],
    observaciones: "",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del declarante.",
      },
      {
        tipo: "Documento",
        reqText: "Cédula de identidad vigente del declarante.",
      },
      {
        tipo: "Condiciones",
        reqText:
          "Si la cédula de identidad del declarante se encuentra expirada, se debe exhibir comprobante de renovación de visa.",
      },
      {
        tipo: "Documento",
        reqText:
          "Comparecencia personal del declarante con pasaporte extranjero vigente.",
      },
    ],
    legalText: [
      [
        `Por la presente yo ${legalInput}.`,
        `Con domicilio en ${legalInput}.`,
        `Cédula de Identidad nº ${legalInput}.`,
      ],
      [
        `Vengo a exponer lo siguiente:`,
        `Que, por a través de este acto vengo a extender carta de invitación a Don/Doña ${legalInput},`,
        `pasaporte nº ${legalInput},`,
        `para que visite Chile, a contar del ${legalInput} de ${legalInput} del ${legalInput}, por un periodo máximo de aproximadamente 90 días.`,
        `Durante su estadia en chile me haré cargo y además responsable de todos sus gastos en este país, esto es, su alimentación, vivienda, pasaje, seguro médico y otros gastos.`,
        `Don/doña ${legalInput}, pasaporte nº ${legalInput},`,
        `pernoctará en la propiedad ubicada en: ${legalInput}, comuna de ${legalInput}, inmueble que es mi lugar de residencia y domicilio.`,
        `Esta invitación se realiza, porque don/doña viene a: ${legalInput}. 
    `,
      ],
    ],
  },
  {
    title: "Autorización Salida Vehículo",
    subTitle: "Persona Natural",
    id: "salidaVehiculo01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: true,
    tags: ["Automóvil", "Autorizaciones"],
    observaciones: "",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del dueño del vehiculo.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del dueño.",
      },
      {
        tipo: "Documento",
        reqText:
          "Certificado de anotaciones vigentes del vehículo, del día que se firmará la autorización.Vehículo NO debe estar con prenda ni prohibiciones.",
      },
    ],
  },
  {
    title: "Autorización Salida Vehículo",
    subTitle: "Persona Jurídica",
    id: "salidaVehiculo02",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: true,
    tags: ["Automóvil", "Autorizaciones"],
    observaciones: "",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText:
          "Comparecencia personal del Representante Legal (propiertario del vehículo).",
      },
      {
        tipo: "Documento",
        reqText: "Cédula de identidad vigente del propietario del vehículo.",
      },
      {
        tipo: "Documento",
        reqText:
          "Certificado de anotaciones vigentes del vehículo, del día que se firmará la autorización.Vehículo NO debe estar con prenda ni prohibiciones.",
      },
      {
        tipo: "Documento",
        reqText:
          "Escritura de constitución con vigencia, para validar al Representante Legal Vigencia de poder (si escritura es de mas de un año).",
      },
    ],
  },
  {
    title: "Permiso menor para salir del País",
    subTitle: "Un Padre o Madre -Documento Privado",
    id: "permisoMenor01",
    precio: 9500,
    rating: 3,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: true,
    tags: ["Viaje", "Autorizaciones", "Familia"],
    observaciones:
      "La Autorización de Viaje para menor de edad por Documento privado tiene una duración máxima de 90 días sin posibilidad de renovación y con sólo un país de destino, mientras que la Escritura Pública tiene vigencia indefinida y no requiere especificación del país de destino. Para la autorizacion por escritura publica  por favor gestionar el trámite en este nro de whatsapp XXXXXXXXXX",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecer ambos padres.",
      },
      {
        tipo: "Documento",
        reqText: "Cédula de identidad vigente de ambos padres.",
      },
      {
        tipo: "Documento",
        reqText: "Certificado de nacimiento del menor para todo trámite",
      },
      {
        tipo: "Documento",
        reqText:
          "Menores de edad extranjeros, se requiere la partida de nacimiento apostillada.",
      },
    ],
  },
  {
    title: "Permiso menor para salir del País",
    subTitle: "Ambos Padres -Documento Privado",
    id: "permisoMenor02",
    precio: 9500,
    rating: 3,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: true,
    tags: ["Viaje", "Autorizaciones", "Familia"],
    observaciones:
      "La Autorización de Viaje para menor de edad por Documento privado tiene una duración máxima de 90 días sin posibilidad de renovación y con sólo un país de destino, mientras que la Escritura Pública tiene vigencia indefinida y no requiere especificación del país de destino. Para la autorizacion por escritura publica  por favor gestionar el trámite en este nro de whatsapp XXXXXXXXXX",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText:
          "Si el permiso lo entregan ambos padres, ambos deben comparecer en la notaría.",
      },
      {
        tipo: "Documento",
        reqText: "Cédula de identidad vigente de ambos padres.",
      },
      {
        tipo: "Condiciones",
        reqText:
          "Si el permiso lo entrega uno al otro, solo debe comparecer el progenitor que extiende el permiso con cédula de identidad vigente.",
      },
      {
        tipo: "Documento",
        reqText: "Certificado de nacimiento del menor para todo trámite.",
      },
      {
        tipo: "Documento",
        reqText:
          " Menores de edad extranjeros, se requiere la partida de nacimiento apostillada.",
      },
    ],
  },
  {
    title: "Permiso menor para salir del País",
    subTitle: "Escritura Pública",
    id: "permisoMenor03",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: true,
    tags: ["Viaje", "Autorizaciones", "Familia"],
    observaciones:
      "La Autorización de Viaje para menor de edad por Documento privado tiene una duración máxima de 90 días sin posibilidad de renovación y con sólo un país de destino, mientras que la Escritura Pública tiene vigencia indefinida y no requiere especificación del país de destino. Para la autorizacion por escritura publica  por favor gestionar el trámite en este nro de whatsapp XXXXXXXXXX",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText:
          "Si el permiso lo entregan ambos padres, ambos deben comparecer en la notaria con cédula de identidad vigente.",
      },
      {
        tipo: "Comparencia",
        reqText:
          "Si el permiso lo entrega uno al otro, solo debe comparecer el progenitor que extiende el permiso con Cédula de identidad vigente.",
      },
      {
        tipo: "Documento",
        reqText:
          "Certificado de Nacimiento del menor de edad, que será protocolarizado junto con la escritura.",
      },
      {
        tipo: "Condiciones",
        reqText:
          "El permiso se otorga para viajar a cualquier parte del mundo, pero puede ser limitado.",
      },
      {
        tipo: "Documento",
        reqText:
          "Se debe adjuntar el certificado de nacimiento del menor el que se protocoliza junto con la escritura.",
      },
      {
        tipo: "Condiciones",
        reqText:
          "Si el declarante tiene o es mayor de 75 años, se debe exhibir un certificado médico que indique lo siguiente: “se encuentra apto para trámites notariales, se encuentra en su sano y entero juicio pudiendo ejecutar actos jurídicos válidos”. Dicho certificado debe ser emitido por un médico especialista de alguna de las siguientes especialidades: psiquiatría, neurología o geriatría.",
      },
    ],
  },
  {
    title: "Termino de Contrato de Arriendo",
    subTitle: "",
    id: "terminoArriendo01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: true,
    print: false,
    tags: ["Hogar", "Arriendo", "Casa/Departamento"],
    observaciones: "",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del arrendador.",
      },
      {
        tipo: "Documento",
        reqText: "Cédula de identidad vigente del arrendador.",
      },
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del arrendatario.",
      },
      {
        tipo: "Documento",
        reqText: "Cédula de identidad vigente del arrendatario.",
      },
    ],
  },
  {
    title: "Contrato Arriendo Vehículos",
    subTitle: "",
    id: "arriendoVehiculo01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: true,
    print: true,
    tags: ["Automóvil", "Contratos"],
    observaciones:
      "Si no tiene el contrato redactado y requiere que se lo redacten, por favor escriba al nro de whatsapp XXXXXXXXXX y podra gestionar sun tramite y coordinar su firma a comodidad de su agenda.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del dueño del vehículo.",
      },
      {
        tipo: "Documento",
        reqText: "Cédula de identidad vigente del dueño del vehículo.",
      },
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del arrendatario.",
      },
      {
        tipo: "Documento",
        reqText: "Cédula de identidad vigente del arrendatario del vehículo.",
      },
      {
        tipo: "Documento",
        reqText: "Permiso de circulación vigente.",
      },
      {
        tipo: "Documento",
        reqText: "Certificado de anotaciones vigente de día.",
      },
      {
        tipo: "Condiciones",
        reqText: "Vehículo no debe estar con prenda ni prohibición de actos.",
      },
    ],
  },
  {
    title: "Declaracion Jurada Simple/Libre",
    subTitle: "",
    id: "declaracionSimple01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Declaración jurada"],
    observaciones:
      "Documento que sirve para formalizar una declaración. Se puede ocupar para múltiples fines.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del declarante.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del declarante.",
      },
    ],
  },
  {
    title: "Declaración Jurada Solteria",
    subTitle: "Sin testigos",
    id: "declaracionSolteria01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Declaración jurada"],
    observaciones:
      "Esta declaracion aplica para muchos temas, como desafiliacion partido politico, dias sin goce de sueldo, desistir de ser donante, ingreso per capita, etc",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del declarante.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del declarante.",
      },
    ],
  },
  {
    title: "Declaración Jurada Solteria",
    subTitle: "Con testigos",
    id: "declaracionSolteria02",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: true,
    print: false,
    tags: ["Declaración jurada"],
    observaciones:
      "El solicitante no firma el documento, los testigos declaran bajo juramento el estado civil del tercero, por ende no es necesaria su comparecencia.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText:
          "Comparecencia personal del Testigo 1 (no puede ser pariente del declarante).",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del testigo 1.",
      },
      {
        tipo: "Comparencia",
        reqText:
          "Comparecencia personal del Testigo 2 (no puede ser pariente del declarante).",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del testigo 2.",
      },
    ],
  },
  {
    title: "Declaración Jurada Alcoholes",
    subTitle: "",
    id: "declaracionAlcoholes01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Declaración jurada", "Comerciales"],
    observaciones:
      "La declaración jurada de alcoholes debe realizarse para la venta, comercialización, renovación de patentes y otros de bebidas alcohólicas, algunas instituciones solicitan este documento donde se indica que dicha persona no se encuentra afecto ni ha actuado en contravención de las causales de inhabilidad establecidas en el Artículo 4º de la Ley 19.925, sobre Expendio y Consumo de Bebidas Alcohólicas.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien declara.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien declara.",
      },
    ],
  },
  {
    title: "Declaracion Jurada Cesantía",
    subTitle: "",
    id: "declaracionCesantia01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Declaración jurada", "Laborales"],
    observaciones:
      "La declaración jurada de cesantía es requerida por diferentes instituciones para el cobro de seguros, subvenciones y también para suspensiones de pago de créditos, entre otros.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien declara.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien declara.",
      },
    ],
  },
  {
    title: "Declaracion Jurada Ingresos",
    subTitle: "",
    id: "declaracionIngresos01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Declaración jurada", "Laborales"],
    observaciones:
      "La declaración jurada de ingresos permite a las personas dejar constancia de los ingresos brutos y en la labor desempeñada (puesto de trabajo). Del mismo modo es obligatorio que la Declaración Jurada de Ingresos sea firmada ante Notario, y entregada ante las autoridades del país, y dentro del plazo indicado, lo que permitirá, con anticipación, conocer el valor de la cuota del año a cancelar.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien declara.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien declara.",
      },
      {
        tipo: "Condiciones",
        reqText:
          "Este documento es solo para personas SIN contrato de trabajo. Para aquellos con contrato, solicitar certificado de antigüedad laboral.",
      },
    ],
  },
  {
    title: "Declaración Jurada Perdida Licencia Conducir",
    subTitle: "",
    id: "declaracionPerdidaLicencia01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Declaración jurada", "Automóvil"],
    observaciones:
      "La declaración jurada de extravío de licencia de conducir sirve para dar aviso de que este documento fue robado o está perdido. De este modo, el titular de la licencia no será responsable en caso de que un tercero haga mal uso de ella. Juzgados de policía local y municipalidades, solicitan frecuentemente que se declare bajo juramento la pérdida de una licencia de conducir o carnet de conducir para la reposición de la misma o bien para otros.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien declara.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien declara.",
      },
    ],
  },
  {
    title: "Declaración de Expensas",
    subTitle: "",
    id: "declaracionExpensas01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Declaración jurada", "Familia"],
    observaciones:
      "La declaración jurada de expensas es un documento que debe ser solicitado ante notario público y que acredita que una persona asumirá los costos de mantención en Chile de otra persona. Generalmente se utiliza por los solicitantes de residencia que son titulares, respecto de su grupo familiar, o por chilenos que tienen familiares extranjeros a los que se compromete a mantener económicamente.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien declara.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien declara.",
      },
    ],
  },
  {
    title: "Declaración Jurada por pérdida de algo",
    subTitle: "",
    id: "declaracionPerdida01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Declaración jurada", "Hogar"],
    observaciones:
      "Declaración para acreditar pérdida de elementos tales como Llaves, licencia, documento, etc",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien declara.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien declara.",
      },
    ],
  },
  {
    title: "Declaración Jurada para Personal de la Administración Pública",
    subTitle: "",
    id: "declaracionAdministracionPublica01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Declaración jurada", "Laborales"],
    observaciones:
      "Es la declaración jurada de un interesado en ingresar a la administración pública, en calidad de planta o contrata, que exige la ley, expresando no tener incompatibilidades para hacerlo, no haber cesado en un cargo público como consecuencia de haber obtenido una calificación deficiente, o por medida disciplinaria, en los últimos cinco años (Artículo 12 letra e del Estatuto Administrativo), no estar inhabilitado para el ejercicio de funciones o cargos públicos, no hallarse condenado por crimen o simple delito (Artículo 12 letra f del Estatuto Administrativo) y no estar afecto a las inhabilidades señaladas en el artículo de la Ley N° 18.575, Orgánica Constitucional de Bases Generales de la Administración del Estado. Es usual que lo servicios públicos dispongan de formularios para hacer esta declaración.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien declara.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien declara.",
      },
    ],
  },
  {
    title:
      "Certificado de vigencia del contrato de trabajo (Antigüedad laboral)",
    subTitle: "Persona Natural",
    id: "vigenciaContratoLaboral01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Laborales", "Certificados", "Declaración Jurada"],
    observaciones:
      "Con este documento, el empleador podrá generar una declaración jurada que certifica la antigüedad laboral del dependiente, su puesto de trabajo y su renta.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien declara.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien declara.",
      },
    ],
  },
  {
    title:
      "Certificado de vigencia del contrato de trabajo (Antigüedad laboral)",
    subTitle: "Persona Jurídica",
    id: "vigenciaContratoLaboral02",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Laborales", "Certificados", "Declaración Jurada"],
    observaciones:
      "Con este documento, el empleador podrá generar una declaración jurada que certifica la antigüedad laboral del dependiente, su puesto de trabajo y su renta.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien declara.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien declara.",
      },
      {
        tipo: "Documento",
        reqText:
          "Escritura de constitución con vigencia, para validar al Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText: "Vigencia de poder (si escritura es de más de un año).",
      },
    ],
  },
  {
    title: "Renuncia Voluntaria",
    subTitle: "",
    id: "renunciaVoluntaria01",
    precio: 9500,
    rating: 3,
    template: true,
    upload: false,
    directly: true,
    custody: false,
    print: false,
    tags: ["Laborales", "Declaración jurada"],
    observaciones:
      "La renuncia voluntaria es uno de los documentos que permite dar término a un contrato de trabajo. Este debe ser presentada al empleador con las formalidades que se establece en el N° 2 del artículo 159 del Código del Trabajo. En efecto, debe ser entregadas al empleador con, a lo menos, 30 días de anticipación por escrito, firmada por el dependiente y ratificada por un ministro de fe que puede ser, entre otros, un notario público.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien renuncia.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien renuncia.",
      },
    ],
  },
  {
    title: "Poder Simple",
    subTitle: "Persona Natural",
    id: "poderSimple01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: true,
    print: false,
    tags: ["Poder simple"],
    observaciones:
      "Una carta de poder simple permite que pueda representar a otra en una institución dada con un fin específico, con el fin de realizar algún trámite particular. Ejemplo - Celular, AFP, etc",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien otorga el poder.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien otorga el poder.",
      },
      {
        tipo: "Condiciones",
        reqText:
          "Si el declarante tiene o es mayor de 75 años, se debe exhibir un certificado médico que indique lo siguiente: “se encuentra apto para trámites notariales, se encuentra en su sano y entero juicio pudiendo ejecutar actos jurídicos válidos”. Dicho certificado debe ser emitido por un médico especialista de alguna de las siguientes especialidades: psiquiatría, neurología o geriatría.",
      },

      ,
    ],
  },
  {
    title: "Poder Simple",
    subTitle: "Persona Jurídica",
    id: "poderSimple02",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: true,
    print: false,
    tags: ["Poder simple"],
    observaciones:
      "Una carta de poder simple permite que pueda representar a otra en una institución dada con un fin específico, con el fin de realizar algún trámite particular. Ejemplo - Celular, AFP, etc",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: " Comparecencia personal del Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText: "Vigencia de poder (si escritura es de mas de un año).",
      },
      {
        tipo: "Documento",
        reqText: "Traer una copia del poder impreso.",
      },
      {
        tipo: "Condiciones",
        reqText:
          "Si el declarante tiene o es mayor de 75 años, se debe exhibir un certificado médico que indique lo siguiente: “se encuentra apto para trámites notariales, se encuentra en su sano y entero juicio pudiendo ejecutar actos jurídicos válidos”. Dicho certificado debe ser emitido por un médico especialista de alguna de las siguientes especialidades: psiquiatría, neurología o geriatría.",
      },
    ],
  },
  {
    title: "Poder Bancario Simple",
    subTitle: "Persona Natural",
    id: "poderBancario01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: true,
    print: false,
    tags: ["Poder simple", "Bancarios"],
    observaciones:
      "El poder bancario simple para persona natural, permite que una persona natural entregue poder a un tercero, que también debe ser una persona natural, para que opere con poder en representación de ella ante una determinada entidad bancaria. Para administración con poderes amplios, este poder simple no es suficiente, sino que es requerido un poder bancario por escritura pública. Para gestionar ese tipo de documentos por favor escribir al siguiente nro de whatapp XXXXXXXXXX",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien otorga el poder.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien otorga el poder.",
      },
    ],
  },
  {
    title: "Poder Bancario Simple",
    subTitle: "Persona Jurídica",
    id: "poderBancario02",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: true,
    print: false,
    tags: ["Poder simple", "Bancarios"],
    observaciones: "",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText:
          "Escritura de constitución con vigencia, para validar al Representante Legal Vigencia de poder (si escritura es de mas de un año).",
      },
    ],
  },
  {
    title: "Poder Administracion Inmueble",
    subTitle: "",
    id: "poderInmueble01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: true,
    print: false,
    tags: ["Casa/Departamento", "Arriendo"],
    observaciones:
      "Aquellas personas que desean arrendar un bien inmueble (casa, departamento u otro), pueden delegar la administración del mismo en un tercero con el objeto de que gestionen arrendatarios, pagos, cuentas, celebrar documentos y todo relacionado con el mismo para dar cumplimiento al mandato del arrendamiento.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText:
          "Comparecencia personal de al menos uno de los propietarios (persona natural) que otorga el poder.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText:
          "Copia de inscripción de la propiedad con vigencia (se obtiene en el Conservador de Bienes Raíces).",
      },
    ],
    legalText: [
      [
        `Por la presente yo ${legalInput}.`,
        `cédula de Identidad nº ${legalInput}.`,
        `con domicilio en ${legalInput}.`,
        `confiero poder a ${legalInput}.`,
        `cédula de Identidad nº ${legalInput}.`,
      ],
      [
        `Para que:`,
        `En mi nombre y representacion administre el inmueble ubicado en ${legalInput}, comuna de ${legalInput}, quedando facultado para ejecutar todos los actos tendientes a la administración, conservación y reparación del inmueble indicado, con todas las facultades del articulo 2.132 del código civil.`,
        `Podrá celebrar y poner termino a contratos de arriendo y comodato; comprar toda clase de bienes necesarios para su administración y conservación; representar al mandante ante toda clase de organismos públicos o privados, asamblea de copropietarios, municipalidades, s.i.i, tesorerías, compañías proveedoras de servicios domiciliarios; recibir correspondencia certificada, giros y encomiendas; cobrar y percibir  lo que al mandante se le adeude, y otorgar recibos y cancelaciones; cobrar y depositar cheques nominativos, y celebrar todo acto o contrato que diga relación con lo anterior, pudiendo firmar todos los documentos que sean necesarios para el cabal cumplimiento de este mandato.`,
      ],
    ],
  },
  {
    title: "Poder para retirar vehiculo",
    subTitle: "",
    id: "poderRetirarVehiculo01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: true,
    print: true,
    tags: ["Poder simple", "Automóvil"],
    observaciones:
      "El poder para retirar un vehículo entrega a un tercero, no dueño, la atribución para presentarse en corrales y/o custodia municipal para que pueda retirar dicho vehículo custodiado en dichas dependencias.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien otorga el poder.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien otorga el poder.",
      },
      {
        tipo: "Documento",
        reqText: "Certificado de anotaciones del vehículos del día.",
      },
      {
        tipo: "Consideraciones",
        reqText: "Vehículo no debe estar con prenda ni prohibición de actos.",
      },
    ],
  },
  {
    title: "Poder representacion para compra/venta vehículo",
    subTitle: "",
    id: "poderCompraVehiculo01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: true,
    print: true,
    tags: ["Automóvil", "Compra y Venta"],
    observaciones: "",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal de quien otorga el poder.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente de quien otorga el poder.",
      },
      {
        tipo: "Documento",
        reqText: "Certificado de anotaciones vigentes del vehículos del día.",
      },
    ],
    legalText: [
      [
        `Por la presente yo ${legalInput}.`,
        `cédula de Identidad nº ${legalInput}.`,
        `con domicilio en ${legalInput}.`,
        `confiero poder a ${legalInput}.`,
        `cédula de Identidad nº ${legalInput}.`,
      ],
      [
        `Para que:`,
        `En mi nombre y representación venda, ceda y transfiera en el precio y condiciones que estime convenientes, el siguiente vehículo de mi propiedad: ${legalInput}, marca ${legalInput}, modelo ${legalInput}, nº motor ${legalInput}, nº chasis ${legalInput}, color ${legalInput}, año ${legalInput}, placa única e inscripción ${legalInput}, pudiendo fijar y percibir el precio de venta, forma de pago y condiciones, y firmar el contrato de compraventa respectivo y hacer declara-ción sobre tributación.`,
        `Al efecto confiero al mandatario todas las facultades necesarias para el eficaz y correcto desempeño de su mandato, incluso las de firmar los documentos, recibos o resguardos que se le exijan y, en general, lo faculto para que proceda a efectuar to-dos los trámites que sean necesarios para dar cumplido éxito a su misión. El presen-te poder tendrá una vigencia de seis meses.`,
      ],
    ],
  },
  {
    title: "Transferencia Vehículo",
    subTitle: "Persona Natural",
    id: "transferenciaVehiculo01",
    precio: 9500,
    rating: 3,
    template: true,
    upload: true,
    directly: true,
    custody: false,
    print: true,
    tags: ["Automóvil", "Compra y Venta"],
    observaciones: "",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del comprador.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del comprador.",
      },
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del vendedor.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del vendedor.",
      },
      {
        tipo: "Documento",
        reqText: "Certificado de anotaciones vigentes del vehículos al día.",
      },
      {
        tipo: "Documento",
        reqText: "Certificado de multas al día.",
      },
      {
        tipo: "Documento",
        reqText: "Permiso de circulacion al día.",
      },
    ],
    legalText: [
      [
        `Entre don/doña ${legalInput}, domiciliado en ${legalInput}, comuna de ${legalInput}, Cédula de Identidad Nº ${legalInput} como vendedor, y don/doña ${legalInput}, domiciliado en ${legalInput}, comuna de ${legalInput}, Cédula de Identidad Nº ${legalInput} como comprador se ha convenido el siguiente contrato de compraventa:`,
      ],
      [
        `PRIMERO: Don/Doña ${legalInput} vende y transfiere a don/doña ${legalInput} quien compra y acepta para sí vehículo ${legalInput}, marca ${legalInput}, modelo ${legalInput}, motor Nº ${legalInput}, chasis  Nº ${legalInput},VIN o Nº de serie ${legalInput}, color ${legalInput}, año ${legalInput}, combustible ${legalInput}, PBV ${legalInput}, inscripción y placa única ${legalInput} en el estado en que se encuentra, que es conocido del comprador, quien declara haberse recibido materialmente de lo comprado a su entera satisfacción y sin derecho a ningún reclamo posterior.`,
      ],
      [
        `SEGUNDO: El precio de venta es la cantidad de $ ${legalInput} que el comprador paga al contado al vendedor y del cual éste se da por recibido a su entera satisfacción.`,
      ],
      [
        `TERCERO: Declara el vendedor que lo vendido no tiene deudas ni gravámenes de ninguna especie y que ha sido causal determinante de esta operación la precedente declaración. El impuesto que afecta a la presente venta será de cargo del comprador.`,
      ],
      [
        `CUARTO: El notario que suscribe deja constancia que para autorizar este contrato tuvo a la vista el permiso de circulación del vehículo y el certificado de la inscripción en el Registro de Vehículos Motorizados, ambos a nombre del vendedor.`,
      ],
      [
        `QUINTO: El vendedor declara bajo juramento que no tuvo derecho a crédito fiscal cuando adquirió el vehículo, por lo tanto, la presente compraventa no está afecta a IVA.`,
      ],
      [
        `Otorgado en Santiago de Chile, el ${legalInput}, ${legalInput} de ${legalInput} de ${legalInput}.`,
      ],
    ],
    customSign: [
      [`Comprador Rut ${legalInput}`, `Vendedor Rut ${legalInput}`],
      [
        `Firmaron ante mí don/doña ${legalInput}, cédula de identidad Nº ${legalInput} y don/doña ${legalInput}, cédula de identidad Nº ${legalInput}, quienes me acreditaron su identidad con las cédulas citadas. El impuesto municipal del 1,5%, asciende a la suma de $ ${legalInput} se pagó en BICE. Santiago, ${legalInput}, ${legalInput} de ${legalInput} de ${legalInput}.`,
      ],
      [`     Notario     `],
    ],
  },
  {
    title: "Transferencia Vehículo",
    subTitle: "Persona Jurídica",
    id: "transferenciaVehiculo02",
    precio: 9500,
    rating: 3,
    template: false,
    upload: false,
    directly: false,
    custody: false,
    print: true,
    tags: ["Automóvil", "Compra y Venta"],
    observaciones:
      "Si desea realizar este trámite, solo tiene que esscribirnos a nuesto whatsapp. Una ejecutiva gestionara su tramite y podra coordinar la firma y retiro a su comodidad.",
    requerimientosTramite: [
      {
        categoría: "",
        requerimientos: [],
      },
    ],
  },
  {
    title: "Transferencia Vehículo",
    subTitle: "Persona Natural o Jurídica con Poder",
    id: "transferenciaVehiculo03",
    precio: 9500,
    rating: 3,
    template: false,
    upload: false,
    directly: false,
    custody: false,
    print: false,
    tags: ["Automóvil", "Compra y Venta"],
    observaciones:
      "Si desea realizar este trámite, solo tiene que esscribirnos a nuesto whatsapp. Una ejecutiva gestionara su tramite y podra coordinar la firma y retiro a su comodidad.",
    requerimientos: [],
  },
  {
    title: "Autorización de uso Domicilio Comercial",
    subTitle: "",
    id: "usoDomicilioComercial01",
    precio: 9500,
    rating: 1,
    template: true,
    upload: false,
    directly: true,
    custody: true,
    print: false,
    tags: ["Autorizaciones", "Empresas"],
    observaciones:
      "La autorización de domicilio comercial son requisitos regulados por la ley, y cumplen la función de supervisar el buen funcionamiento de las empresas. De esta manera al obtener la autorización de tu empresa, te aseguras de estar cumpliendo con las condiciones estructurales, ambientales, sanitarias y municipales correspondientes.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del propietario.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del propietario.",
      },
      {
        tipo: "Documento",
        reqText:
          "Acreditar propiedad del inmueble (comprobante dominio vigente).",
      },
    ],
  },
  {
    title: "Finiquito",
    subTitle: "",
    id: "finiquito01",
    precio: 9500,
    rating: 3,
    template: false,
    upload: true,
    directly: true,
    custody: false,
    print: false,
    tags: ["Laborales"],
    observaciones: "",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del trabajador.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del propietario.",
      },
      {
        tipo: "Documento",
        reqText:
          "Llevar 3 copias impresas del finiquito con firma del empleador - Puede ser digital/escaneada.",
      },
      {
        tipo: "Documento",
        reqText: "Certificado de cotizaciones previsionales al día.",
      },
      {
        tipo: "Documento",
        reqText:
          "Ultimas 3 liquidaciones de sueldo para los artículos 160, 161 y 162.",
      },
    ],
  },
  {
    title: "Contrato de Arriendo",
    subTitle: "Persona Natural",
    id: "contratoArriendo01",
    precio: 9500,
    rating: 3,
    template: false,
    upload: true,
    directly: true,
    custody: true,
    print: false,
    tags: ["Casa/Departamento", "Contratos"],
    observaciones:
      "Si no tiene el contrato redactado y requiere que se lo redacten, por favor escriba al nro de whatsapp XXXXXXXXXX y podra gestionar sun tramite y coordinar su firma a comodidad de su agenda.. Para los contratos de arriendo con poder por favor gestionar contactar al mismo numero",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del arrendador.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del arrendador.",
      },
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del arrendatario.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del arrendatario.",
      },
      {
        tipo: "Documento",
        reqText: "Certificado de dominio vigente (Máximo 90 dias).",
      },
      {
        tipo: "Condiciones",
        reqText:
          "En caso de existir aval, este debe comparecer a la firma con cédula de identidad vigente.",
      },
    ],
  },
  {
    title: "Contrato de Arriendo",
    subTitle: "Persona Jurídica",
    id: "contratoArriendo02",
    precio: 9500,
    rating: 1,
    template: false,
    upload: true,
    directly: true,
    custody: true,
    print: false,
    tags: ["Hogar", "Contrato"],
    observaciones:
      "Si no tiene el contrato redactado y requiere que se lo redacten, por favor escriba al nro de whatsapp XXXXXXXXXX y podra gestionar sun tramite y coordinar su firma a comodidad de su agenda.. Para los contratos de arriendo con poder por favor gestionar contactar al mismo numero",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del Representante Legal (arrendador).",
      },
      {
        tipo: "Documento",
        reqText:
          "cédula de identidad vigente del Representante Legal (arrendador).",
      },
      {
        tipo: "Documento",
        reqText:
          "Escritura de constitución con vigencia, para validar al Representante Legal y/o vigencia de poder (si es que escritura es de más de un año).",
      },
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del arrendatario.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del arrendatario.",
      },
      {
        tipo: "Documento",
        reqText: "Certificado de dominio vigente (Máximo 90 dias).",
      },
      {
        tipo: "Documento",
        reqText: "Traer Dos (2) copias del contrato de arriendo.",
      },
    ],
  },
  {
    title: "Promesa de Compra Venta Propiedad",
    subTitle: "",
    id: "promesaPropiedad01",
    precio: 9500,
    rating: 3,
    template: false,
    upload: false,
    directly: true,
    custody: false,
    print: true,
    tags: ["Propiedades", "Hogar"],
    observaciones:
      "Si no tiene el contrato redactado y requiere que se lo redacten, por favor escriba al nro de whatsapp XXXXXXXXXX y podra gestionar sun tramite y coordinar su firma a comodidad de su agenda.. Para los contratos de arriendo con poder por favor gestionar contactar al mismo numero.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del propietario.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del propietario.",
      },
      {
        tipo: "Documento",
        reqText:
          "Acreditar propiedad del inmueble (comprobante dominio vigente).",
      },
    ],
  },
  {
    title: "Contrato de Trabajo - Persona Natural",
    subTitle: "Persona Natural",
    id: "contratoTrabajo01",
    precio: 9500,
    rating: 3,
    template: false,
    upload: true,
    directly: true,
    custody: true,
    print: false,
    tags: ["Contratos", "Laborales"],
    observaciones:
      "Si el empleado es extranjero debe presentar pasaporte valido desde el 2013, cedula de identidad vigente o renovacion de su tramite de inmigracion.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del empleado.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del empleado.",
      },
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText: "Traer tres (3) copias del contrato.",
      },
    ],
  },
  {
    title: "Contrato de Trabajo - Persona Jurídica",
    subTitle: "Persona Jurídica",
    id: "contratoTrabajo02",
    precio: 9500,
    rating: 2,
    template: false,
    upload: true,
    directly: true,
    custody: true,
    print: false,
    tags: ["Contratos", "Laborales"],
    observaciones:
      "Si el empleado es extranjero debe presentar pasaporte valido desde el 2013, cedula de identidad vigente o renovacion de su tramite de inmigracion.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del empleado.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del empleado.",
      },
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText:
          "Escritura de constitución con vigencia, para validar al Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText: "Vigencia de poder (si escritura es de más de un año).",
      },
      {
        tipo: "Documento",
        reqText: "Traer tres (3) copias del contrato.",
      },
    ],
  },
  {
    title: "Contrato de Trabajo",
    subTitle: "Puertas afuera",
    id: "contratoTrabajo03",
    precio: 9500,
    rating: 3,
    template: false,
    upload: true,
    directly: true,
    custody: true,
    print: false,
    tags: ["Contratos", "Laborales"],
    observaciones:
      "Si no tiene el contrato redactado y requiere que se lo redacten, por favor escriba al nro de whatsapp XXXXXXXXXX y podra gestionar sun tramite y coordinar su firma a comodidad de su agenda. Si el empleado es extranjero debe presentar pasaporte valido desde el 2013, cedula de identidad vigente o renovacion de su tramite de inmigracion.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del empleado.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del empleado.",
      },
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del Representante Legal.",
      },
    ],
  },
  {
    title: "Contrato de Trabajo",
    subTitle: "Puertas adentro",
    id: "contratoTrabajo04",
    precio: 9500,
    rating: 3,
    template: false,
    upload: true,
    directly: true,
    custody: true,
    print: false,
    tags: ["Contratos", "Laborales"],
    observaciones:
      "Si no tiene el contrato redactado y requiere que se lo redacten, por favor escriba al nro de whatsapp XXXXXXXXXX y podra gestionar sun tramite y coordinar su firma a comodidad de su agenda. Si el empleado es extranjero debe presentar pasaporte valido desde el 2013, cedula de identidad vigente o renovacion de su tramite de inmigracion.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del empleado.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del empleado.",
      },
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal del Representante Legal.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente del Representante Legal.",
      },
    ],
  },
  {
    title: "Pagaré",
    subTitle: "",
    id: "pagare01",
    precio: 9500,
    rating: 1,
    template: false,
    upload: true,
    directly: true,
    custody: true,
    print: false,
    tags: ["Contratos", "Laborales"],
    observaciones:
      "Un pagaré es el compromiso incondicional entre personas, naturales o jurídicas, de que el suscriptor pagará al beneficiario cierta cantidad de dinero en cierta cantidad de plazo.",
    requerimientos: [
      {
        tipo: "Comparencia",
        reqText: "Comparecencia personal.",
      },
      {
        tipo: "Documento",
        reqText: "cédula de identidad vigente.",
      },
      {
        tipo: "Documento",
        reqText:
          "Llevar copia impresa del pagaré (no se redactará en notaría).",
      },
    ],
  },
];

export default documentosPlantilla;
