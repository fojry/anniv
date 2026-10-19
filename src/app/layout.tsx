import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HAPPY ANNIVERSARY Rala and Radia',
  description:
    'Rayakan anniversary penuh cinta! Buka galeri kenangan foto dan saling bertukar surat cinta manis di The Wall of Love bersama Rala and Radia.',
  keywords: ['HAPPY ANNIVERSARY Rala and Radia', 'Rala and Radia', 'Anniversary', 'Kenangan Foto', 'Wall of Love'],
  openGraph: {
    title: 'HAPPY ANNIVERSARY Rala and Radia',
    description: "Celebrating HAPPY ANNIVERSARY Rala and Radia - great things happen when two souls connect.",
    type: 'website',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💖</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
