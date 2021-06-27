//const api_url = "http://192.168.0.120/api/";
//const api_url = "http://localhost/kabum-api/";
const api_url = "http://localhost/api2.0/"; //teste

export const api_listar_clientes = `${api_url}clientes/list`;
export const api_cadastar_cliente = `${api_url}clientes/insert`;
export const api_update_cliente = `${api_url}clientes/update`;
export const api_get_cliente = `${api_url}clientes/get`;
export const api_delete_cliente = `${api_url}clientes/delete`;

export const api_listar_users = `${api_url}usuarios/list`;
export const api_cadastrar_user = `${api_url}usuarios/insert`;
export const api_update_user = `${api_url}usuarios/update`;
export const api_get_user = `${api_url}usuarios/get`;
export const api_delete_user = `${api_url}usuarios/delete`;

export const api_cadastar_endereco = `${api_url}enderecos/insert`;
export const api_update_endereco = `${api_url}enderecos/update`;
export const api_delete_endereco = `${api_url}enderecos/delete`;

export const api_login = `${api_url}login`;

export const api_cep = (cep: string) => { return `http://viacep.com.br/ws/${cep}/json` };
export const api_ufs = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
export const api_cidades = (uf: string) => { return `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios` };
