// src/theme/index.ts
import { extendTheme } from '@chakra-ui/react';
import '../assets/styles/base/base.scss';

const customTheme = extendTheme({
    colors: {
        white: '#FFFFFA',
        black: '#080705',
        grey: '#40434E',
        wine: '#702632',
        red: '#912F40',
    },
    fonts: {
        title: "'Bebas Neue', serif",
        body: '"Switzer-Regular", "Open Sans", sans-serif',
        heading: "'Besley', serif",
        mono: "'Special Elite', monospace",
    },
    fontWeights: {
        normal: 300,
    },
    lineHeight: {
        normal: 1.1
    },
    textStyles: {
        huge: { fontSize: '3.5rem' },
        big: { fontSize: '2.5rem' },
        medium: { fontSize: '2rem' },
    },
    breakpoints: {
        sm: '480px',
        md: '768px',
    },
    styles: {
        global: {
            "*": {
                margin: "0",
                padding: "0",
                boxSizing: "border-box"
            },
            "a": {
                textDecoration: "none",
                color: "black",
                _visited: { color: "black" },
                _hover: { color: "black" },
                _focus: { color: "black" },
            },
            '.flex-row': {
                display: 'flex',
                flexDirection: 'row'
            },
            '.flex-col': {
                display: 'flex',
                flexDirection: 'column',
            },
        }
    },
    components: {
        Heading: {
            baseStyle: {
                fontFamily: 'heading',
            },
        },
        Text: {
            baseStyle: {
                fontFamily: 'body',
            },
        },
        Title: {
            baseStyle: {
                fontFamily: 'title',
            }
        },
        Quote: {
            baseStyle: {
                fontFamily: 'quote',
            }
        }
    }

});

export default customTheme;