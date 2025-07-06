import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { Schema } from './Pages/Schema';
import { Home } from './Pages/Home';

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// function DemoPageContent({ pathname }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Typography>Dashboard content for {pathname}</Typography>
//     </Box>
//   );
// }

// DemoPageContent.propTypes = {
//   pathname: PropTypes.string.isRequired,
// };

export const App = () => {
  const router = useDemoRouter('/');

  React.useEffect(() => {
    // Busca el elemento del título y reemplaza su texto
    const appBarTitle = document.querySelector(
      '[class*="MuiAppBar-root"] .MuiTypography-h6'
    );
    if (appBarTitle) {
      appBarTitle.textContent = 'Utils';
    }
  }, []);

  return (
    <AppProvider
      navigation={[
        {
          segment: 'Schema',
          title: 'Schema',
          icon: <FactCheckOutlinedIcon />,
        },
        {
          segment: 'Values',
          title: 'Values',
          icon: <FormatListNumberedRtlIcon />,
        },
      ]}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        {router.pathname === '/' && <Home />}
        {router.pathname === '/Schema' && <Schema />}
      </DashboardLayout>
    </AppProvider>
  );
};

App.propTypes = {
  window: PropTypes.func,
};
