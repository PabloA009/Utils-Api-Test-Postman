import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';

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

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export const App = () => {
  const router = useDemoRouter('/home');

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
          icon: <DescriptionIcon />,
        },
        {
          segment: 'Values',
          title: 'Values',
          icon: <DescriptionIcon />,
        },
      ]}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
};

App.propTypes = {
  window: PropTypes.func,
};
