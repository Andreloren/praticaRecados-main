import { CssBaseline, TextField } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './App';
import Input from './Shared/components/inputs/Input';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
     <CssBaseline />
      <App/>
  </>
);
