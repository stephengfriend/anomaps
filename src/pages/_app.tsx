import '../styles/app.css'

import { useAnalytics } from '@happykit/analytics'
import { Provider as AuthProvider } from 'next-auth/client'
import { Toaster } from 'react-hot-toast'
import { Provider as DataProvider } from 'urql'

import client from '~/lib/urql'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics({ publicKey: process.env.NEXT_PUBLIC_ANALYTICS_CLIENT_ID || '' })

  return (
    <AuthProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      options={{
        // Client Max Age controls how often the useSession in the client should
        // contact the server to sync the session state. Value in seconds.
        // e.g.
        // * 0  - Disabled (always use cache value)
        // * 60 - Sync session state with server if it's older than 60 seconds
        clientMaxAge: 0,
        // Keep Alive tells windows / tabs that are signed in to keep sending
        // a keep alive request (which extends the current session expiry) to
        // prevent sessions in open windows from expiring. Value in seconds.
        //
        // Note: If a session has expired when keep alive is triggered, all open
        // windows / tabs will be updated to reflect the user is signed out.
        keepAlive: 0,
      }}
      session={pageProps?.session}
    >
      <DataProvider value={client}>
        <Component {...pageProps} />
      </DataProvider>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { margin: '40px', background: '#363636', color: '#fff', zIndex: 1 },
          duration: 5000,
        }}
      />
    </AuthProvider>
  )
}
