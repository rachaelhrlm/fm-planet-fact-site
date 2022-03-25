module.exports = {
    content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                black: {
                    500: '#070724',
                },
                earth: {
                    500: '#D14C32',
                },
                grey: {
                    500: '#838391',
                    600: '#38384F',
                },
                jupiter: {
                    500: '#CD5120',
                },
                mars: {
                    500: '#D83A34',
                },
                mercury: {
                    500: '#419EBB',
                },
                neptune: {
                    500: '#2D68F0',
                },
                uranus: {
                    500: '#1EC2A4',
                },
                venus: {
                    500: '#EDA249',
                },
            },
            fontFamily: {
                heading: ['Antonio', 'sans-serif'],
                sans: ['Spartan', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
