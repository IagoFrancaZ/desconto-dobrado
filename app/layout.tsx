import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Desconto Dobrado | Produtos Tecnológicos Recomendados",
  description: "Recomendamos produtos de alta qualidade com preços especiais. Encontre os melhores smartphones, notebooks e gadgets, alguns com cupons exclusivos!",
  keywords: "produtos tecnológicos, recomendações, smartphones, notebooks, gadgets, cupons, desconto dobrado, 2025",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxvZ29HcmFkaWVudDEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZDcwMDQwIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZjllMmMiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsb2dvR3JhZGllbnQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwYzg3NSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmYzYjMwIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxmaWx0ZXIgaWQ9InNoYWRvdyIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTQwJSI+CiAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSIwIiBzdGREZXZpYXRpb249IjIiIGZsb29kLWNvbG9yPSIjMDAwMDAwMzMiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIzOCIgZmlsbD0id2hpdGUiIGZpbHRlcj0idXJsKCNzaGFkb3cpIiAvPgogIDxwYXRoIAogICAgZD0iTTU3IDI1QzU3IDIyLjIzODYgNTQuNzYxNCAyMCA1MiAyMEgyOEMyNS4yMzg2IDIwIDIzIDIyLjIzODYgMjMgMjVWMzYuNUwzMCA0MEwyMyA0My41VjU1QzIzIDU3Ljc2MTQgMjUuMjM4NiA2MCAyOCA2MEg1MkM1NC43NjE0IDYwIDU3IDU3Ljc2MTQgNTcgNTVWMjVaIiAKICAgIGZpbGw9IndoaXRlIiAKICAgIHN0cm9rZT0idXJsKCNsb2dvR3JhZGllbnQxKSIgCiAgICBzdHJva2Utd2lkdGg9IjIuNSIgCiAgLz4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSI2IiBmaWxsPSJ1cmwoI2xvZ29HcmFkaWVudDEpIiAvPgogIDxjaXJjbGUgY3g9IjQ4IiBjeT0iNDgiIHI9IjYiIGZpbGw9InVybCgjbG9nb0dyYWRpZW50MikiIC8+CiAgPGxpbmUgeDE9IjI4IiB5MT0iNTIiIHgyPSI1MiIgeTI9IjI4IiBzdHJva2U9InVybCgjbG9nb0dyYWRpZW50MSkiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogIDxwYXRoIGQ9Ik0yMyAzNi41VjQzLjVMMzAgNDBMMjMgMzYuNVoiIGZpbGw9InVybCgjbG9nb0dyYWRpZW50MSkiIC8+Cjwvc3ZnPg==",
        sizes: "any",
        type: "image/svg+xml",
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${GeistSans.className} ${GeistMono.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
