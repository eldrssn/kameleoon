import { Layout } from 'components';
import { AppProvider } from 'context/app';
import { MainPage } from './pages';

function App() {
  return (
    <AppProvider>
      <Layout>
        <MainPage />
      </Layout>
    </AppProvider>
  );
}

export default App;
