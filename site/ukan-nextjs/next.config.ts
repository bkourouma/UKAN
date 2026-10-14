import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique : le dossier `out/` se dépose tel quel chez n’importe quel hébergeur.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Une seule page 404 pour les deux langues (le site a deux mises en page racines, FR et EN).
  experimental: { globalNotFound: true },
};

export default nextConfig;
