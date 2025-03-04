import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'components';
import { AppProvider } from 'context/app';
import { FinalizePage, MainPage, ResultsPage } from './pages';

function App() {
  return (
    <AppProvider>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/results/:testId" element={<ResultsPage />} />
            <Route path="/finalize/:testId" element={<FinalizePage />} />
          </Routes>
        </Router>
      </Layout>
    </AppProvider>
  );
}

export default App;
