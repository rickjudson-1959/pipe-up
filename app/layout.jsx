import './globals.css';

export const metadata = {
  title: 'Pipe-Up — Pipeline Construction Oversight Platform',
  description:
    'Pipe-Up is the complete digital oversight platform for pipeline construction. Purpose-built for owner organizations — inspector field reports, LEM reconciliation, executive dashboards, document control, and AI-powered anomaly detection.',
  keywords:
    'pipeline construction, LEM reconciliation, field inspection, owner rep tools, pipeline oversight, T&M contracts, lump sum pipeline, inspector platform',
  openGraph: {
    title: 'Pipe-Up — Pipeline Construction Oversight Platform',
    description:
      'From inspector field reports to executive dashboards — one AI-powered platform for every phase of pipeline construction oversight.',
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
