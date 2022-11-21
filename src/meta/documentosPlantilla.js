const declaracionMudanza = {
  title: "Declaración Jurada de Mudanza (Salvoconducto)",
  id: "mudanza01",
  precio: 9500,
  tags: ["hogar"],
  observaciones: "Vigencia de 5 días desde la firma del notario",
  requerimientos: [
    {
      Arrendatario: [
        {
          tipo: "documento",
          reqText:
            "Poder Simple del propietario del inmueble que se deja autorizando la mudanza. Si el contrato de arriendo no está ante notario, este poder debe ser ante notario",
        },
        {
          tipo: "documento",
          reqText:
            "Contrato en original de arriendo (o copia autorizada) del inmueble que se deja.",
        },
        {
          tipo: "presencia persona",
          reqText:
            "Comparecencia personal del arrendatario que firmó en el contrato con cédula de identidad vigente",
        },
        {
          tipo: "documento",
          reqText:
            "Fotocopia de la cédula del propietario del inmueble que dejas. Debe ser la misma persona que firmó en el contrato de arriendo (si son varios, basta uno).",
        },
        {
          tipo: "documento",
          reqText:
            "Comprobante del pago del último arriendo del inmueble que se deja",
        },
        {
          tipo: "documento",
          reqText:
            "Comprobantes de Gasto Comunes, agua y luz al día del inmueble que se deja.",
        },
      ],
      Propietario: [
        {
          tipo: "presencia persona",
          reqText:
            "Comparecencia personal de al menos uno de los propietarios con cédula de identidad vigente",
        },
        {
          tipo: "documento",
          reqText:
            "Acreditar propiedad del inmueble (Escritura o título de dominio vigentes, que se obtienen en Conservador de Bienes Raíces respectivo).",
        },
      ],
    },
  ],
};
