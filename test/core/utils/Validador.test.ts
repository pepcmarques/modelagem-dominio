import Validador from "@/core/utils/Validador";

test("Deve retornar null com texto nao nulo", () => {
  const erro = Validador.naoNulo("Bom dia", "Texto Invalido");
  expect(erro).toBeNull();
});

test("Deve retornar erro com texto nulo", () => {
  const msgErro = "Texto Invalido";
  const erro = Validador.naoNulo(undefined, msgErro);
  expect(erro).toBe(msgErro);
});

test("Deve retornar null com texto nao nulo", () => {
  const msgErro = "Texto Invalido";
  const erro = Validador.naoVazio("Mensagem Valida", msgErro);
  expect(erro).toBeNull();
});

test("Deve retornar erro com string vazia", () => {
  const msgErro = "String vazia";
  const erro = Validador.naoVazio("  ", msgErro);
  expect(erro).toBe(msgErro);
});

test("Deve retornar erro com string null", () => {
  const msgErro = "String vazia";
  const erro = Validador.naoVazio(null, msgErro);
  expect(erro).toBe(msgErro);
});

test("Deve retornar erro com string undefined", () => {
  const msgErro = "String vazia";
  const erro = Validador.naoVazio(undefined, msgErro);
  expect(erro).toBe(msgErro);
});

test("Deve retornar null com tamanho menor que", () => {
  const msgErro = "Tamanho maior que";
  const erro = Validador.tamanhoMenorQue("123", 4, msgErro);
  expect(erro).toBeNull();
});

test("Deve retornar erro se tamanho do valor maior que", () => {
  const msgErro = "Tamanho maior que";
  const erro = Validador.tamanhoMenorQue("Texto grande", 4, msgErro);
  expect(erro).toBe(msgErro);
});

test("Deve retornar erro se tamanho do valor maior que", () => {
  const msgErro = "Tamanho maior que";
  const erro = Validador.tamanhoMenorQue("Text", 5, msgErro);
  expect(erro).toBeNull();
});

test("Deve combinar os erros e retornar array de string", () => {
  const errors = Validador.combinar(
    Validador.naoVazio("", "erro1"),
    Validador.naoVazio("Legal", "não erro2"),
    Validador.naoVazio("", "erro3")
  );

  expect(errors?.join(",")).toBe("erro1,erro3");
});

test("Deve combinar os erros e retornar nulo", () => {
  const errors = Validador.combinar(
    Validador.naoVazio("Isso", "não erro1"),
    Validador.naoVazio("é", "não erro2"),
    Validador.naoVazio("legal", "não erro3")
  );

  expect(errors).toBeNull();
});
