import "./main.css";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

export const metadata = {
    title: "GlobalCalc - Калькулятор"
};

export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <header>
            <i className="siteLogo"></i>
            <p className="siteTitle">Global Дизайн - Калькулятор</p>
        </header>
        <main>
            {children}
        </main>
        <footer>
            По техническим вопросам: <a href="mailto:i@vneznanov.ru">i@vneznanov.ru</a>
        </footer>
        </body>
        </html>
    );
}
