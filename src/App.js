import MainPage from './components/Pages/MainPage';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

function App() {
  return (
    <div className='text-center'>
      <QueryClientProvider client={queryClient}>
        <Header></Header>
        <MainPage></MainPage>
        <Footer></Footer>
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
