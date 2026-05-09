import "./globals.css";
import Navbar from "./Component/Homepage/Navbar";
import Footer from "./Component/Homepage/Footer";
import { ToastProvider } from "./components/toast/ToastProvider";

export const metadata = {
    title: "SkillSphere - Online Learning Platform",
    description: "Learn new skills from industry experts on SkillSphere, the ultimate online learning platform"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full antialiased">
            <body className="min-h-full flex flex-col">
                <ToastProvider>
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </ToastProvider>
            </body>
        </html>
    );
}
