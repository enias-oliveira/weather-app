export const capitals = [
    'Rio Branco',
    'Maceió',
    'Macapá',
    'Manaus',
    'Salvador',
    'Fortaleza',
    'Brasília',
    'Vitória',
    'Goiânia',
    'São Luís',
    'Cuiabá',
    'Campo Grande',
    'Belo Horizonte',
    'Belém',
    'João Pessoa',
    'Curitiba',
    'Recife',
    'Teresina',
    'Rio de Janeiro',
    'Natal',
    'Porto Alegre',
    'Porto Velho',
    'Boa Vista',
    'Florianópolis',
    'São Paulo',
    'Aracaju',
    'Palmas',
] as const

export type Capital = (typeof capitals)[number]

export const WEATHER_API_BASE_URL = import.meta.env.VITE_WEATHER_API_BASE_URL
export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY
