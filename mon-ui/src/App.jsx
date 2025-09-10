import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Home } from './Pages/Home';
import { Schema } from './Pages/Schema';
import { Values } from './Pages/Values';
import { purple } from '@mui/material/colors';

const drawerWidth = 220;
const drawerCollapsedWidth = 56;

export const App = () => {
  const [route, setRoute] = React.useState('/');
  const [mode, setMode] = React.useState('dark');
  const [drawerExpanded, setDrawerExpanded] = React.useState(true);

  const demoTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: purple,
          secondary: purple,
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
          },
        },
      }),
    [mode]
  );

  const navigation = [
    {
      segment: '/',
      title: 'Info',
      icon: <InfoOutlinedIcon />,
    },
    {
      segment: '/Schema',
      title: 'Schema',
      icon: <FactCheckOutlinedIcon />,
    },
    {
      segment: '/Values',
      title: 'Values',
      icon: <FormatListNumberedRtlIcon />,
    },
  ];

  // Renderiza el contenido según la ruta seleccionada
  let content = null;
  if (route === '/') content = <Home />;
  else if (route === '/Schema') content = <Schema mode={mode} />;
  else if (route === '/Values') content = <Values mode={mode} />;
  else
    content = (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5">Selecciona una opción del menú</Typography>
      </Box>
    );

  return (
    <ThemeProvider theme={demoTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerExpanded ? drawerWidth : drawerCollapsedWidth,
            flexShrink: 0,
            transition: 'width 0.3s ease',
            [`& .MuiDrawer-paper`]: {
              width: drawerExpanded ? drawerWidth : drawerCollapsedWidth,
              boxSizing: 'border-box',
              bgcolor: 'background.paper',
              borderRight: '1px solid #e0e0e0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'width 0.3s ease',
              overflowX: 'hidden',
            },
          }}
        >
          <Box>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: drawerExpanded ? 'space-between' : 'center',
              }}
            >
              {drawerExpanded && (
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 22,
                  }}
                >
                  Postman Utils
                </Typography>
              )}
              <IconButton
                onClick={() => setDrawerExpanded(!drawerExpanded)}
                color="inherit"
                aria-label="toggle navigation"
                sx={{
                  ml: drawerExpanded ? 0 : 0,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <List>
              {navigation.map((item) => (
                <ListItem key={item.segment} disablePadding>
                  <ListItemButton
                    selected={route === item.segment}
                    onClick={() => setRoute(item.segment)}
                    sx={{
                      minHeight: 48,
                      justifyContent: drawerExpanded ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: drawerExpanded ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    {drawerExpanded && (
                      <ListItemText
                        primary={item.title}
                        sx={{ opacity: drawerExpanded ? 1 : 0 }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <IconButton
              onClick={() =>
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
              }
              color="inherit"
              aria-label="toggle theme"
              title={
                drawerExpanded
                  ? `Cambiar a modo ${mode === 'light' ? 'oscuro' : 'claro'}`
                  : undefined
              }
            >
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            minHeight: '100vh',
            p: 0,
            overflow: 'auto',
          }}
        >
          {content}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

App.propTypes = {
  window: PropTypes.func,
};
