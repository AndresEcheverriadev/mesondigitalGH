function rutValidador(rutCompleto) {
  rutCompleto = rutCompleto.replace("‐", "-");
  if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
  let tmp = rutCompleto.split("-");
  let digv = tmp[1];
  let rut = tmp[0];
  if (digv == "K") digv = "k";

  return rutVerificador(rut) == digv;
}

rutValidador(16238882 - 7);
