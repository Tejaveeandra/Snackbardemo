import React from 'react';
import Dogs from './Dogs';
import { SnackbarProvider } from './SnackbarContext';

function App() {
  return (
    <SnackbarProvider>
      <Dogs />
    </SnackbarProvider>
  );
}

export default App;
