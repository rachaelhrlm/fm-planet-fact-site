module.exports = {
    content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'starry-pattern': "url('../assets/background-stars.svg')",
            },
            colors: {
                black: {
                    500: '#070724',
                },
                earth: {
                    500: '#6F2ED6',
                    600: '#545BFE',
                },
                grey: {
                    500: '#838391',
                    600: '#38384F',
                },
                jupiter: {
                    500: '#CD5120',
                    600: '#ECAD7A',
                },
                mars: {
                    500: '#D83A34',
                    600: '#FF6A45',
                },
                mercury: {
                    500: '#419EBB',
                    600: '#DEF4FC',
                },
                neptune: {
                    500: '#2D68F0',
                    600: '#497EFA',
                },
                saturn: {
                    500: '#FCCB6B',
                    600: '#FCCB6B',
                },
                uranus: {
                    500: '#1EC2A4',
                    600: '#65F0D5',
                },
                venus: {
                    500: '#EDA249',
                    600: '#F7CC7F',
                },
            },
            fontFamily: {
                title: ['Antonio', 'sans-serif'],
                sans: ['Spartan', 'sans-serif'],
            },
            fontSize: {
                '2xs': '.6rem',
                xs: '.7rem',
            },
            height: {
                width: '100vw',
            },
            letterSpacing: {
                wider: '.05em',
                widest: '.25em',
            },
        },
    },
    plugins: [],
};
