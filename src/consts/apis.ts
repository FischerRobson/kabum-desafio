export const api_listar_clientes = "http://localhost/api/listar-clientes.php";
export const api_cadastar_cliente = "http://localhost/api/cadastrar-cliente.php";
export const api_update_cliente = "http://localhost/api/editar-cliente.php";
export const api_get_cliente = "http://localhost/api/get-cliente.php";
export const api_delete_cliente = "http://localhost/api/delete-cliente.php";

export const api_listar_users = "http://localhost/api/listar-usuarios.php";
export const api_cadastrar_user = "http://localhost/api/cadastrar-usuario.php";
export const api_update_user = "http://localhost/api/editar-usuario.php";
export const api_get_user = "http://localhost/api/get-usuario.php";

export const api_cadastar_endereco = "http://localhost/api/cadastrar-endereco.php";
export const api_update_endereco = "http://localhost/api/editar-endereco.php";
export const api_delete_endereco = "http://localhost/api/delete-endereco.php";

export const api_cep = (cep: string) => { return `http://viacep.com.br/ws/${cep}/json` };
