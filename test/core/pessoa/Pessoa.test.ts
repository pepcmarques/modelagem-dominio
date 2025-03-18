import Erros from "@/core/constants/Erros";
import Pessoa from "@/core/Pessoa/Pessoa";
import Id from "@/core/shared/Id";
import PessoaBuilder from "@/test/data/PessoaBuilder";
import { fakerBr } from "@js-brasil/fakerbr";

test("Deve lançar erro ao tentar criar uma Pessoa com nome vazio", () => {
  expect(() => new Pessoa({ nome: "", cpf: "" })).toThrow(Erros.NOME_VAZIO);
});

test("Deve criar pessoa válida com nome", () => {
  const pessoa = PessoaBuilder.criar().semId().comNome("João Pessoa").agora();
  expect(pessoa.nome.primeiroNome).toBe("João");
  expect(pessoa.id.novo).toBeTruthy()
});


test("Deve criar pessoa válida com id", () => {
  const id = Id.novo.valor
  const pessoa = PessoaBuilder.criar().comId(id).comNome("João Pessoa").agora();
  expect(pessoa.nome.primeiroNome).toBe("João");
  expect(pessoa.id.valor).toBe(id);
  expect(pessoa.id.novo).toBeFalsy()
});


test("Deve criar pessoa válida com cpf", () => {
  const cpf = fakerBr.cpf()
  const pessoa = PessoaBuilder.criar().comCpf(cpf).agora();
  expect(pessoa.cpf.formatado).toBe(cpf);
});

test("Deve lançar erro para pessoa sem CPF", () => {
  expect(() => PessoaBuilder.criar().semCpf().agora()).toThrow(Erros.CPF_INVALIDO)
});


test("Deve lançar erro com pessoa sem nome", () => {
  expect(() => PessoaBuilder.criar().semNome().agora()).toThrow(Erros.NOME_VAZIO);
});

test("Deve clonar objeto com nome alterado", () => {
  const pessoa = new Pessoa({ nome: "João Silva", cpf: "280.012.389-38" });
  const newPessoa = pessoa.clone({ nome: "João Avlis" });
  expect(newPessoa.nome.completo).toBe("João Avlis");
  expect(newPessoa.cpf.valor).toBe(pessoa.cpf.valor);
  expect(newPessoa.id.valor).toBe(pessoa.id.valor);
});

test("Deve clonar objeto com id alterado", () => {
  const pessoa = new Pessoa({ nome: "João Silva", cpf: "280.012.389-38" });
  const novoId = Id.novo.valor;
  const newPessoa = pessoa.clone({ id: novoId });
  expect(newPessoa.nome.completo).toBe(pessoa.nome.completo);
  expect(newPessoa.cpf.valor).toBe(pessoa.cpf.valor);
  expect(newPessoa.id.valor).toBe(novoId);
});
