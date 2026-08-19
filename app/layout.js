import './styles/globals.css';

export const metadata = {
  title: 'Rolls-Royce Motor Cars',
  description: 'The pinnacle of automotive luxury.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}