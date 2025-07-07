import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Editor from '@monaco-editor/react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTheme } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import { valSchema } from '../Utils/SchemaValidator';

export const Schema = ({ mode }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState('{\n  "campo": "TipoDeDato"\n}');
  const [result, setResult] = React.useState(null);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  // Calcula la altura dinámica según las líneas del contenido
  const lineCount = value.split('\n').length;
  const editorHeight = Math.max(1, Math.min(lineCount * 24 + 40, 600));

  // Autoformatea el JSON al escribir
  const handleEditorChange = (val = '') => {
    try {
      const parsed = JSON.parse(val);
      setValue(JSON.stringify(parsed, null, 2));
    } catch {
      setValue(val); // Si no es válido, no formatea
    }
  };

  // Procesa el JSON al hacer click
  const handleProcess = () => {
    try {
      let res = valSchema(value);
      setResult(res);
    } catch {
      setResult('JSON inválido');
    }
  };

  // Copiar al portapapeles
  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setOpenSnackbar(true);
    }
  };

  // Define el tema de Monaco según el modo recibido
  const monacoTheme = mode === 'dark' ? 'vs-dark' : 'light';

  return (
    <>
      <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Ingresa el Schema a validar
        </Typography>
      </Box>
      <Box
        sx={{
          py: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 700,
            py: 2,
            border: '1.5px solid',
            borderColor: 'divider',
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: 'background.paper',
            position: 'relative',
          }}
        >
          <Editor
            key={monacoTheme} // fuerza el remount al cambiar el tema
            height={editorHeight}
            defaultLanguage="json"
            value={value}
            onChange={handleEditorChange}
            theme={monacoTheme}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              formatOnType: true,
              formatOnPaste: true,
              scrollBeyondLastLine: false,
              wordWrap: 'on',
            }}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleProcess}
        >
          Generar Tests
        </Button>
        {result && (
          <Paper
            elevation={3}
            sx={{
              mt: 3,
              p: 2,
              width: '100%',
              maxWidth: 700,
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              fontFamily: 'monospace',
              fontSize: 15,
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
              position: 'relative',
            }}
          >
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              startIcon={<ContentCopyIcon />}
              onClick={handleCopy}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 1,
                minWidth: 0,
                padding: '2px 8px',
              }}
            >
              😼
            </Button>
            {result}
          </Paper>
        )}
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1200}
        onClose={() => setOpenSnackbar(false)}
        message="¡Copiado al portapapeles!"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        ContentProps={{
          sx: {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: 2,
            py: 1,
            borderRadius: 2,
            fontSize: 16,
            bgcolor: 'success.main',
            color: 'success.contrastText',
            boxShadow: 3,
            m: 2,
            textAlign: 'center',
          },
        }}
        TransitionProps={{ timeout: 300 }}
      />
    </>
  );
};
