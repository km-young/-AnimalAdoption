import '@/styles/globals.scss';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools} from "react-query/devtools"
import 'react-calendar/dist/Calendar.css'
import Header from '@/components/header/Header';
import {Provider} from 'react-redux';
import {store} from '../redux/store/index';

export default function App({Component, pageProps}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,

      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
