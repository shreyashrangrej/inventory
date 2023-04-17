import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import { NextComponentType } from 'next';
import AuthGuard from '../../components/AuthGuard';

export type CustomAppProps = AppProps & {
  Component: NextComponentType & { requireAuth?: boolean }
}

export default function App(props: CustomAppProps) {
  const { Component, pageProps: { session, ...pageProps } } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={session} refetchInterval={5 * 60} refetchOnWindowFocus>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'dark',
          }}
        >
          {Component.requireAuth ? (
            <AuthGuard>
              <Component {...pageProps} />
            </AuthGuard>
          ) : (
            <Component {...pageProps} />
          )}
        </MantineProvider>
      </SessionProvider>
    </>
  );
}