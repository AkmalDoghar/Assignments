import "./globals.css";
import Navbar from "./component/navbar/page";
import Footer from "./component/footer/page";

export const metadata = {
  title: "Akmal Portfolio",
  description: "Personal Portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
