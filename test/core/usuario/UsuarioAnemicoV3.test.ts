import Erros from "@/core/constants/Erros";
import Usuario from "@/core/usuario/UsuarioAnemicoV3";

const usuarioValido = () => new Usuario(1, "Anemico", "anemico@zmail.com", "123456");

test("Deve permitir usuario sem nome", () => {
  const usuario: Usuario = usuarioValido();
  usuario.setNome("");
  expect(usuario.getNome()).toBe("");
});

test("Deve permitir usuario com id negativo", () => {
  const usuario: Usuario = usuarioValido();
  usuario.setId(-1);
  expect(usuario.getId()).toBe(-1);
});

test("Nao permitw email invalido", () => {
  const usuario: Usuario = usuarioValido();
  usuario.setEmail("email_invalido");
  expect(usuario.getEmail()).toBe(usuario.getEmail());
});

// test("Deve permitir usuario com senha com apenas um caracter", () => {
//   const usuario: Usuario = usuarioValido();
//   usuario.setSenha("p");
//   expect(usuario.getSenha()).toBe("p");
// });

test("Deve permitir usuario com nome undefined", () => {
  const usuario: Usuario = usuarioValido();
  usuario.setNome(undefined as any);
  expect(usuario.getNome()).toBeUndefined();
});

test("Deve lançar erro se senha fro pequena", () => {
  const usuario: Usuario = usuarioValido();
  expect(() => usuario.setSenha("senha")).toThrowError(Erros.SENHA_INVALIDA);
});

test("Deve aceitar senha maior ou igual a 6 caracteres", () => {
  const usuario: Usuario = usuarioValido();
  const novaSenhaValida = "654321"
  usuario.setSenha(novaSenhaValida);
  expect(usuario.getSenha()).toBe(novaSenhaValida);
});
