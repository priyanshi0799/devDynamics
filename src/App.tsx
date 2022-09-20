import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from './Layout/Layout';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Layout />
        </QueryClientProvider>
    );
}

export default App;
