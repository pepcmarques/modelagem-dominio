import Usuario from "@/core/usuario/UsuarioAnemicoV2";

const usuarioValido = () => new Usuario(1, "Anemico", "anemico@zmail.com", "123456");

test("Deve permitir usuario sem nome", () => {
  const usuario: Usuario = usuarioValido();
  usuario.nome = "";
  expect(usuario.nome).toBe("");
});

test("Deve permitir usuario com id negativo", () => {
  const usuario: Usuario = usuarioValido();
  usuario.id = -1;
  expect(usuario.id).toBe(-1);
});

test("Deve permitir usuario com email invaligo", () => {
  const usuario: Usuario = usuarioValido();
  usuario.email = "email_invalido";
  expect(usuario.email).toBe("email_invalido");
});

test("Deve permitir usuario com senha com apenas um caracter", () => {
  const usuario: Usuario = usuarioValido();
  usuario.senha = "p";
  expect(usuario.senha).toBe("p");
});

test("Deve permitir usuario com nome undefined", () => {
  const usuario: Usuario = usuarioValido();
  usuario.nome = undefined as any;
  expect(usuario.nome).toBeUndefined();
});
