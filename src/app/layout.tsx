import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';

import interphases from '@/fonts/interphases';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CustomMsalProvider from '@/components/msal/CustomMsalProvider';

export const metadata = {
  title: 'AAANH',
  description: `AAANH's Homepage`
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId='879749396928-jp95jro4l9uif4mf77crv62sgk4la2on.apps.googleusercontent.com'>
        <CustomMsalProvider>

          <body className={`${interphases.className}`}>
            {' '}
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
        </CustomMsalProvider>
      </GoogleOAuthProvider>
    </html>
  );
}
