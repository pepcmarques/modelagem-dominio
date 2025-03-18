import Usuario from "@/core/usuario/UsuarioAnemicoV1";

const usuarioValido: Usuario = {
  id: 1,
  nome: "Anemico",
  email: "anemico@zmail.com",
  senha: "123456",
};

test("Deve permitir usuario sem nome", () => {
  const usuario: Usuario = {
    ...usuarioValido,
    nome: "",
  };
  expect(usuario.nome).toBe("");
});

test("Deve permitir usuario com id negativo", () => {
  const usuario: Usuario = {
    ...usuarioValido,
    id: -1,
  };
  expect(usuario.id).toBe(-1);
});


test("Deve permitir usuario com email invaligo", () => {
  const usuario: Usuario = {
    ...usuarioValido,
    email: "email_invalido",
  };
  expect(usuario.email).toBe('email_invalido');
});


test("Deve permitir usuario com senha com apenas um caracter", () => {
  const usuario: Usuario = {
    ...usuarioValido,
    senha: "p",
  };
  expect(usuario.senha).toBe('p');
});

