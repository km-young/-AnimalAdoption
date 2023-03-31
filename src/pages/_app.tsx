import '@/styles/globals.scss';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools} from "react-query/devtools"
import 'react-calendar/dist/Calendar.css'
import Header from '@/components/Header';

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
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
