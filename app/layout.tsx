import "@/src/styles/globals.css";
import { AppProviders } from "@/src/lib/providers/AppProviders";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <div className="min-h-screen bg-gh-bg text-gh-fg">
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
