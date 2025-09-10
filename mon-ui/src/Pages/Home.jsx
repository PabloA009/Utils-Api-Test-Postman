import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.primary,
  fontFamily: 'monospace',
  fontSize: 14,
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-all',
  borderRadius: 8,
  boxShadow: theme.shadows[1],
}));

export const Home = () => {
  return (
    <>
      <Box
        sx={{
          py: 4,
          px: 10,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          ¿Qué hace?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Genera los tests para validar el Schema de un JSON y los tests para
          validar valores de un JSON.
        </Typography>
      </Box>

      {/* Schema Validator */}

      <Box
        sx={{
          px: { xs: 2, md: 18 },
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'justify',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Schema Validator
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ px: 2 }}>
          Puedes generar los tests para validar el Schema de un JSON. Basta con
          ingresar el JSON del cual quieres generar los tests. Debes ingresar el
          JSON de la siguiente forma:
        </Typography>

        <Box sx={{ width: '100%', py: 2 }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={6}>
              <Item>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1,
                    fontWeight: 'bold',
                    color: 'primary.main',
                    letterSpacing: 1,
                  }}
                >
                  Ejemplo de entrada:
                </Typography>
                {`{
  "campo": "valor",
  "campo2": 2.2,
  "campo3": 2,
  "campo4": true,
  "campo5": {
    "campo6": 33.4,
    "campo7": {
      "campo8": false
    }
  },
  "campo9": [
    {
      "campo10": 1
    },
    {
      "campo11": {
        "campo12": 12.4
      }
    }
  ]
}`}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Values Validator */}

      <Box
        sx={{
          px: { xs: 2, md: 18 },
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'justify',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Values Validator
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ px: 2 }}>
          Puedes generar los tests para validar los valores definidos en tu
          JSON. Debes ingresar el JSON de la siguiente forma:
        </Typography>

        <Box sx={{ width: '100%', py: 2 }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={6}>
              <Item>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1,
                    fontWeight: 'bold',
                    color: 'primary.main',
                    letterSpacing: 1,
                  }}
                >
                  Ejemplo de entrada:
                </Typography>
                {`{
  "campo": "valor",
  "campo2": 2.2,
  "campo3": 2,
  "campo4": true,
  "campo5": {
    "campo6": 33.4,
    "campo7": {
      "campo8": false
    }
  },
  "campo9": [
    {
      "campo10": 1
    },
    {
      "campo11": {
        "campo12": 12.4
      }
    }
  ]
}`}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
