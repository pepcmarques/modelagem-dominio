import Erros from "@/core/constants/Erros";
import Id from "@/core/shared/Id";

test("Deve criar um novo Id válido", () => {
  const id = Id.novo;
  expect(id.valor).toBeTruthy();
  expect(id.valor).toHaveLength(36);
  expect(id.novo).toBe(true);
});

test("Deve lançar erro ao tentar criar um Id inválido", () => {
  expect(() => new Id("123")).toThrow(Erros.ID_INVALIDO);
});

test("Deve criar um novo id válido a partir de um id existente", () => {
  const valor = Id.novo.valor;
  const id = new Id(valor);
  expect(id.valor).toBe(valor);
  expect(id.novo).toBeFalsy();
});

test("Deve comparar dois IDs como iguais", () => {
  const id1 = new Id()
  const id2 = new Id(id1.valor)
  expect(id1.igual(id2)).toBeTruthy()
  expect(id1.diferente(id2)).toBeFalsy()
})

test("Deve comparar dois IDs como diferentes", () => {
  const id1 = new Id()
  const id2 = new Id()
  expect(id1.diferente(id2)).toBeTruthy()
  expect(id1.igual(id2)).toBeFalsy()
})


test("Deve comparar dois IDs como diferentes passando undefined", () => {
  const id1 = new Id()
  expect(id1.diferente(undefined as any)).toBeTruthy()
  expect(id1.igual(undefined as any)).toBeFalsy()
})
