const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    experimental: {
        applyComplexClasses: true,
    },
    purge: ['./**/*.html'],
    theme: {
        screens: {
            xs: '360px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        container: {
            center: true,
            padding: '2rem'
        },
        extend: {
            fontFamily: {
                manrope: ['Manrope', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                'dark-gray-blue': 'hsl(217, 19%, 35%)',
                'desa-dark-blue': 'hsl(214, 17%, 51%)',
                'gray-blue': 'hsl(212, 23%, 69%)',
                'light-gray-blue': 'hsl(210, 46%, 95%)',

                'erian-color': '#02AAB0',
                'erian-hover': '#00CDAC'
            },
            borderRadius: {
                xl: '1rem',
            }
        },
    },
    variants: {},
    plugins: []
}
