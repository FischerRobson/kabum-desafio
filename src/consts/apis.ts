const api_url = "http://192.168.0.120/api/";
//const api_url = "http://localhost/api/";

export const api_listar_clientes = `${api_url}listar-clientes.php`;
export const api_cadastar_cliente = `${api_url}cadastrar-cliente.php`;
export const api_update_cliente = `${api_url}editar-cliente.php`;
export const api_get_cliente = `${api_url}get-cliente.php`;
export const api_delete_cliente = `${api_url}delete-cliente.php`;

export const api_listar_users = `${api_url}listar-usuarios.php`;
export const api_cadastrar_user = `${api_url}cadastrar-usuario.php`;
export const api_update_user = `${api_url}editar-usuario.php`;
export const api_get_user = `${api_url}get-usuario.php`;

export const api_cadastar_endereco = `${api_url}cadastrar-endereco.php`;
export const api_update_endereco = `${api_url}editar-endereco.php`;
export const api_delete_endereco = `${api_url}delete-endereco.php`;

export const api_login = `${api_url}login.php`;

export const api_cep = (cep: string) => { return `http://viacep.com.br/ws/${cep}/json` };
export const api_ufs = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
export const api_cidades = (uf: string) => { return `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios` };
