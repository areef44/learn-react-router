import React from 'react';
import { createRoot } from 'react-dom/client';

class App extends React.Component {
    render() {
      return (
        <>
          <p>Hello, World!</p>
        </>
      );
    }
  }

const root = createRoot(document.getElementById('root'));
root.render(<App />);
