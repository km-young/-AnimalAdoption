import '@/styles/globals.scss';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import 'react-calendar/dist/Calendar.css';
import Header from '@/components/header/Header';
import {Provider} from 'react-redux';
import {store} from '../redux/store/index';
import {Noto_Sans_KR} from 'next/font/google';

const notoSans = Noto_Sans_KR({
  weight: ["300","500","700"],
  subsets: ['latin'],
});

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
        <main className={notoSans.className}>
          <Header />
          <Component {...pageProps} />
        </main>
      </Provider>
    </QueryClientProvider>
  );
}

//배송관리, 인바운드업무, 재택근무와 사무실병행 오전10~새벽3시 9시간근무, 그중에 1시간 식사시간. 8시간근무
//급여 220만원 +야간수당 240~50정도 3개월 계약직, 연속근무, 겸업겸으로 투잡느낌으로, 입사하면 4대보험 중복으로 되서
//서류접수, 간단한 유선인터뷰 예비면접, 본사직원이랑 통화. 딜리버스 협업하는 채용업체 이력서양식 보내기
//
