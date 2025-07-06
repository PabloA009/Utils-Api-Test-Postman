import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
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
        <Typography variant="body1" gutterBottom sx={{ px: 4 }}>
          Por medio de dos funciones generadoras:
        </Typography>
      </Box>
      <Box
        sx={{
          px: 18,
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
          API. Debes ingresar la request del API de la siguiente forma:
        </Typography>

        <Box sx={{ width: '100%', py: 2 }}>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid size={4}>
              <Item>
                <TextField
                  id="standard-multiline-static"
                  label="Ejemplo de request"
                  multiline
                  rows={8}
                  defaultValue={`{
    "campo1": "hola",
    "campo2": 2,
    "campo3": {
        "subcampo1": true,
        "subcampo2": 5.5
    }
}`}
                  variant="standard"
                  disabled
                  fullWidth
                  InputProps={{
                    sx: {
                      fontFamily: 'monospace',
                      borderRadius: 1,
                      px: 1,
                      py: 1,
                      fontSize: 14,
                    },
                    disableUnderline: true,
                  }}
                />
              </Item>
            </Grid>
            <Grid size={4}>
              <Item>
                <TextField
                  id="standard-multiline-static"
                  label="Forma de ingresar"
                  multiline
                  rows={8}
                  defaultValue={`{
    "campo1": "string",
    "campo2": "integer",
    "campo3": {
        "subcampo1": "boolean",
        "subcampo2": "float"
    }
}`}
                  variant="standard"
                  disabled
                  fullWidth
                  InputProps={{
                    sx: {
                      fontFamily: 'monospace',
                      borderRadius: 1,
                      px: 1,
                      py: 1,
                      fontSize: 14,
                    },
                    disableUnderline: true,
                  }}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Values validar */}

      <Box
        sx={{
          px: 18,
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
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid size={4}>
              <Item>
                <TextField
                  id="standard-multiline-static"
                  label="Forma de ingresar"
                  multiline
                  rows={8}
                  defaultValue={`{
    "campo1": "hola",
    "campo2": 2,
    "campo3": {
        "subcampo1": true,
        "subcampo2": 5.5
    }
}`}
                  variant="standard"
                  disabled
                  fullWidth
                  InputProps={{
                    sx: {
                      fontFamily: 'monospace',
                      borderRadius: 1,
                      px: 1,
                      py: 1,
                      fontSize: 14,
                    },
                    disableUnderline: true,
                  }}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
