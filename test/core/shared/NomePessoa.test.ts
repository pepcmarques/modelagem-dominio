import Erros from "@/core/constants/Erros";
import NomePessoa from "@/core/shared/NomePessoa";

test("Deve lançar erro ao tentar criar nome vazio", () => {
  expect(() => new NomePessoa("")).toThrow(Erros.NOME_VAZIO);
});

test("Deve lançar erro ao tentar criar nome com menos de 4 caracteres", () => {
  expect(() => new NomePessoa("Ana")).toThrow(Erros.NOME_PEQUENO);
});

test("Deve lançar erro ao tentar criar nome com mais de 120 caracteres", () => {
  const nomeGigante = "Pedro de Alcântara Francisco António João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim";
  expect(() => new NomePessoa(nomeGigante)).toThrow(Erros.NOME_GRANDE);
});

test("Deve lançar erro ao tentar criar nome sem sobrenome", () => {
  expect(() => new NomePessoa("Rodrigo")).toThrow(Erros.NOME_SEM_SOBRENOME);
});

test('deve lançar erro ao tentar criar nome com caracteres especiais', () => {
  expect(() => new NomePessoa("Ana Silva!")).toThrow(Erros.NOME_CARACTERES_ESPECIAIS);
});

test("Deve criar nome com sucesso", () => {
  const nome = new NomePessoa("Ana Silva");
  expect(nome.nome).toBe("Ana Silva");
});

test("Deve retornar nome completo", () => {
  const nome = new NomePessoa("Ana Magalhaes Silva");
  expect(nome.completo).toBe("Ana Magalhaes Silva");
});

test("Deve retornar primeiro nome", () => {
  const nome = new NomePessoa("Ana Magalhaes Silva");
  expect(nome.primeiroNome).toBe("Ana");
});

test("Deve retornar sobrenomes como lista", () => {
  const nome = new NomePessoa("Ana Magalhaes Silva");
  expect(nome.sobrenomesAsList).toEqual(["Magalhaes", "Silva"]);
});

test("Deve retornar sobrenomes como string", () => {
  const nome = new NomePessoa("Ana Magalhaes Silva");
  expect(nome.sobrenomes).toBe("Magalhaes Silva");
});

test("Deve retornar último sobrenome", () => {
  const nome = new NomePessoa("Ana Magalhaes Silva");
  expect(nome.ultimoSobrenome).toBe("Silva");
});

