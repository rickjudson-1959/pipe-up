import './globals.css';

export const metadata = {
  title: 'Pipe-Up — Know What Happened in the Field',
  description:
    'Pipe-Up gives pipeline owner reps an independent field record — verify progress claims, reconcile billing, and protect your organization on any contract type.',
  keywords:
    'pipeline construction, LEM reconciliation, field verification, T&M contracts, lump sum pipeline, owner rep tools',
  openGraph: {
    title: 'Pipe-Up — Know What Happened in the Field',
    description:
      'Independent field verification for pipeline owner reps. Works on T&M, Target Priced, and Lump Sum contracts.',
    url: 'https://pipe-up.ca',
    siteName: 'Pipe-Up',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
