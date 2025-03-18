import Entidade, { EntidadeProps } from "@/core/shared/Entidade";
import Id from "@/core/shared/Id";

interface TesteProps extends EntidadeProps {
  nome?: string;
  idade?: number;
}

class Teste extends Entidade<Teste, TesteProps> {
  readonly nome: string
  readonly idade: number

  constructor(props: TesteProps) {
    super(props);
    this.nome = props.nome ?? ""
    this.idade = props.idade ?? 0
  }
}

test("Deve comparar duas entidades diferentes", () => {
  const e1 = new Teste({ nome: "Pedro", idade: 18 });
  const e2 = new Teste({ nome: "Pedro", idade: 18 });

  expect(e1.igual(e2)).toBe(false);
  expect(e1.diferente(e2)).toBe(true);
});

test("Deve comparar duas entidades com id igual", () => {
  const id = Id.novo.valor;
  const e1 = new Teste({ id, nome: "Pedro", idade: 18 });
  const e2 = new Teste({ id, nome: "Paulo", idade: 21 });

  expect(e1.igual(e2)).toBe(true);
  expect(e1.diferente(e2)).toBe(false);
});

test("Deve comparar duas entidades com id undefined ou nulo", () => {
  const e1 = new Teste({ nome: "Pedro", idade: 18 });

  expect(e1.igual(undefined as any)).toBe(false);
  expect(e1.igual(null as any)).toBe(false);
  expect(e1.diferente(undefined as any)).toBe(true);
  expect(e1.diferente(null as any)).toBe(true);
});

test("Deve clonar uma entidade com nome diferemte", () => {
  const e1 = new Teste({ nome: "Entidade", idade: 5 });
  const e2 = e1.clone({ nome: "Entidade da Silva" });

  expect(e1.id.valor).toBe(e2.id.valor)
  expect(e2.nome).toBe("Entidade da Silva");
  expect(e2.idade).toBe(e1.idade);
});


test("Deve clonar uma entidade com id diferemte", () => {
  const e1 = new Teste({ nome: "Entidade", idade: 5 });
  const id = Id.novo.valor
  const e2 = e1.clone({ id });

  expect(e2.id.diferente(e1.id)).toBe(true)
  expect(e2.nome).toBe(e1.nome);
  expect(e2.idade).toBe(e1.idade);
});
