import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                gray: {
                    50: '#ebebfa',
                    100: '#d7d7f4',
                    200: '#afafe9',
                    300: '#8787de',
                    400: '#5f5fd3',
                    500: '#3737c8',
                    600: '#2c2ca0',
                    700: '#212178',
                    800: '#161650',
                    900: '#0b0b28',
                    950: '#050514',
                },
                blue: {
                    50: '#ebecf9',
                    100: '#d8d9f3',
                    200: '#b1b3e7',
                    300: '#8a8ddb',
                    400: '#6367cf',
                    500: '#3c40c3',
                    600: '#30349c',
                    700: '#242775',
                    800: '#181a4e',
                    900: '#0c0d27',
                    950: '#060614',
                },
                green: {
                    50: '#EFFDF5',
                    100: '#D9FBE8',
                    200: '#B3F5D1',
                    300: '#75EDAE',
                    400: '#00DC82',
                    500: '#00C16A',
                    600: '#00A155',
                    700: '#007F45',
                    800: '#016538',
                    900: '#0A5331',
                    950: '#052e16'
                }
            }
        }
    }
}
