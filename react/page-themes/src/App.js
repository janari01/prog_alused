import './App.css';
import Page from './components/Page'
import { ThemeProvider } from './components/Theme';

function App() {
  return (
    <>
    <ThemeProvider>
      <Page />
    </ThemeProvider>
    </>
  )
}

export default App;
