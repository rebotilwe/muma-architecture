import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-obsidian">
      <div className="max-w-md w-full text-center">
        <h1 className="font-display text-8xl font-light text-gold/30">404</h1>
        <div className="w-16 h-px bg-gold/30 mx-auto my-6" />
        <h2 className="font-display text-2xl text-alabaster mb-3">Page Not Found</h2>
        <p className="text-muted-foreground text-sm mb-8">
          The page "{location.pathname.substring(1)}" could not be found.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-obsidian text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}