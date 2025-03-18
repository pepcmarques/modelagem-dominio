import Erros from "@/core/constants/Erros";
import Usuario from "@/core/usuario/UsuarioAnemicoV4";

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

test("Nao permite email invalido", () => {
  const usuario: Usuario = usuarioValido();
  usuario.email = "email_invalido";
  expect(usuario.email).toBe(usuario.email);
});

test("Deve alterar para email valido", () => {
  const emailValido = "email@valido.com";
  const usuario: Usuario = usuarioValido();
  usuario.email = emailValido;
  expect(usuario.email).toBe(emailValido);
});

test("Deve permitir usuario com nome undefined", () => {
  const usuario: Usuario = usuarioValido();
  usuario.nome = undefined as any;
  expect(usuario.nome).toBeUndefined();
});

test("Deve lançar erro se senha fro pequena", () => {
  const usuario: Usuario = usuarioValido();
  expect(() => (usuario.senha = "senha")).toThrow(Erros.SENHA_INVALIDA);
});

test("Deve aceitar senha maior ou igual a 6 caracteres", () => {
  const usuario: Usuario = usuarioValido();
  const novaSenhaValida = "654321";
  usuario.senha = novaSenhaValida;
  expect(usuario.senha).toBe(novaSenhaValida);
});
