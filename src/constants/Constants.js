/**
 * Configuração development e production
 */
let URL_API = 'https://viacep.com.br/ws/'
let URL_RESTRITO = ''
if (process.env.NODE_ENV === 'production') {
  URL_API = 'https://viacep.com.br/ws/'
} else {
  URL_API = 'https://viacep.com.br/ws/'
}

export const BASE_URL_API = URL_API
export const BASE_URL_RESTRITO = URL_RESTRITO
