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
          ¿Qué puedo hacer?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Generar los tests para validar el Schema de la response de un API y
          los tests para validar valores devueltos en la response del API de una
          forma más rápida.
        </Typography>
      </Box>
      <Box
        sx={{
          py: 4,
          px: 10,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'justify',
        }}
      >
        <Typography variant="h4" gutterBottom>
          ¿Cómo funciona?
        </Typography>
        <Typography variant="body1" sx={{ px: 4 }}>
          Por medio de tres funciones generadoras:
        </Typography>
      </Box>

      {/* Data type converter */}

      <Box
        sx={{
          px: { xs: 2, md: 18 },
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'justify',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Data type
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ px: 2 }}>
          Puedes obtener el tipo de dato de cada campo de tu Response. Basta con
          ingresar la Response que deseas convertir.
        </Typography>

        <Box sx={{ width: '100%', py: 2 }}>
          <Grid
            container
            spacing={10}
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
                  Ejemplo de salida:
                </Typography>
                {`{
  "campo": "string",
  "campo2": "float",
  "campo3": "integer",
  "campo4": "boolean",
  "campo5": {
    "campo6": "float",
    "campo7": {
      "campo8": "boolean"
    }
  },
  "campo9": [
    {
      "campo10": "integer"
    },
    {
      "campo11": {
        "campo12": "float"
      }
    }
  ]
}`}
              </Item>
            </Grid>
          </Grid>
        </Box>
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
          Puedes generar los tests para validar el Schema de la response de un
          API. Te puedes apoyar ingresando la Salida que te dió la función de
          Data type:
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
                  Entrada (Salida de Data type):
                </Typography>
                {`{
  "campo": "string",
  "campo2": "float",
  "campo3": "integer",
  "campo4": "boolean",
  "campo5": {
    "campo6": "float",
    "campo7": {
      "campo8": "boolean"
    }
  },
  "campo9": [
    {
      "campo10": "integer"
    },
    {
      "campo11": {
        "campo12": "float"
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
          Puedes generar los tests para validar los valores que deseas de la
          response de un API. Debes ingresar la request del API de la siguiente
          forma:
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
