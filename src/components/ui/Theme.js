import { createMuiTheme } from '@material-ui/core/styles';

const flashBlack = '#232b2b';
const flashGrey = '#3b444b';

export default createMuiTheme ({
    palette: {
        common:{
            flashBlack: `${flashBlack}`,
            flashGrey: `${flashGrey}`
        },
        primary: {
            main: `${flashBlack}`
        }
    },

    typography: {
       
        h2: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: flashGrey,
            lineHeight: '1.5'
        }
    }
    
});