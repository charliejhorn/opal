import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"] });
const poppins = Poppins({ 
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Opal",
    description: "Charlie's personal website.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={lora.className}>{children}</body>
        </html>
    );
}
