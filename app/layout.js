// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Monument Célèbre',
  description: 'Découvrez l’histoire fascinante d’un monument légendaire.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header>
          <nav>
            <h1>Monument Célèbre</h1>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/histoire">Histoire</a></li>
              <li><a href="/galerie">Galerie</a></li>
              <li><a href="/infos">Infos pratiques</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 Monument Célèbre. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
