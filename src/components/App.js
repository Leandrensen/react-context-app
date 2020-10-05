import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import ReactCountryFlag from 'react-country-flag';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const App = (props) => {
    const [language, setLanguage] = useState('english');

    const onLanguageChange = (language) => {
        setLanguage(language);
    };

    return (
        <Box>
            <Box>
                <span
                    style={{
                        paddingRight: '2px',
                    }}>
                    Select a language:
                </span>
                <ReactCountryFlag
                    countryCode='US'
                    svg
                    style={{
                        width: '1.2em',
                        height: '1.2em',
                        paddingRight: '2px',
                    }}
                    title='US'
                    onClick={() => onLanguageChange('english')}
                />
                <ReactCountryFlag
                    countryCode='NL'
                    svg
                    style={{
                        width: '1.2em',
                        height: '1.2em',
                        paddingRight: '2px',
                    }}
                    title='NL'
                    onClick={() => onLanguageChange('dutch')}
                />
            </Box>
            <ColorContext.Provider value='secondary'>
                <LanguageContext.Provider value={language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </ColorContext.Provider>
        </Box>
    );
};

export default App;
