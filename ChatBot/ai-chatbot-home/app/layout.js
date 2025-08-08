import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Script from 'next/script';
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: 'AI ChatBot',
  description: 'Homepage for AI ChatBot',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
         />
      </body>
    </html>
  );
}
