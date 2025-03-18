import Erros from "@/core/constants/Erros";
import Cpf from "@/core/shared/Cpf";
import RegiaoCpf from "@/core/shared/RegiaoCpf";

test("Deve retornar CPF inválido (false) para string vazia", () => {
  expect(Cpf.isValid("")).toBeFalsy();
});

test("Deve retornar CPF inválido (false) para string incompleta", () => {
  expect(Cpf.isValid("1234567")).toBeFalsy();
  expect(Cpf.isValid("12345678")).toBeFalsy();
  expect(Cpf.isValid("123456789")).toBeFalsy();
});

test("Deve retornar CPF inválido (false) para dv inválida", () => {
  expect(Cpf.isValid("123456789-00")).toBeFalsy();
  expect(Cpf.isValid("123.456.789-00")).toBeFalsy();
});

test("Deve retornar CPF válido (true) para dv válida", () => {
  expect(Cpf.isValid("280.012.389-38")).toBeTruthy();
});

test("Deve retornar os dígitos verificadores de um CPF válido", () => {
  const cpf = new Cpf("280.012.389-38");
  expect(cpf.digitoVerificador).toBe("38");
});

test("Deve retornar o CPF formatado", () => {
  const cpf = new Cpf("28001238938");
  expect(cpf.formatado).toBe("280.012.389-38");
});

test("Deve retornar CPF inválido para CPF vazio", () => {
  expect(() => new Cpf()).toThrow(Erros.CPF_INVALIDO);
});

test("Deve retornar o valor do CPF", () => {
  const cpf = new Cpf("280.012.389-38");
  expect(cpf.valor).toBe("28001238938");
});

test("Deve retornar a RegiaoCpf do CPF", () => {
  const cpf = new Cpf("280.012.389-38");
  expect(cpf.regiao.codigo).toBe(9);
  expect(cpf.regiao).toBe(RegiaoCpf.PR_SC)
  expect(cpf.regiao.estados[0]).toBe("PR");
  expect(cpf.regiao.estados[1]).toBe("SC");
});
