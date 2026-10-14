import type { Dict } from "@/content";

/*
 * Londres et Abidjan, à l’échelle.
 * Projection équirectangulaire simple : 7,27 px par degré de latitude,
 * 6,3 px par degré de longitude (cos 30°), méridien de Greenwich en x = 60.
 */
const K_LAT = 7.27;
const K_LON = 6.3;
const X0 = 60;
const y = (lat: number) => 20 + (55 - lat) * K_LAT;
const x = (lon: number) => X0 + lon * K_LON;

const LONDON = { x: x(-0.13), y: y(51.5) };
const ABIDJAN = { x: x(-4.03), y: y(5.32) };
const GRADUATIONS = [40, 30, 20, 10];

export function Meridian({ t }: { t: Dict["home"]["hero"]["meridian"] }) {
  const labelX = 84;
  const midY = y(25.5);

  return (
    <figure className="meridien">
      <svg viewBox="0 0 280 452" role="img" aria-labelledby="meridien-titre">
        <title id="meridien-titre">
          {`${t.london} ${t.londonCoord}. ${t.abidjan} ${t.abidjanCoord}. ${t.distance}.`}
        </title>

        {/* Méridien de Greenwich */}
        <line x1={X0} y1={0} x2={X0} y2={428} stroke="rgba(255,255,255,0.22)" strokeDasharray="2 5" />
        <text className="graduation" x={labelX} y={432}>
          {t.greenwich}
        </text>

        {/* Graduations de latitude */}
        <g className="graduations">
          {GRADUATIONS.map((lat) => (
            <g key={lat}>
              <line x1={X0 - 4} x2={X0 + 4} y1={y(lat)} y2={y(lat)} stroke="rgba(255,255,255,0.35)" />
              <text className="graduation" x={labelX} y={y(lat) + 4}>
                {`${lat}° N`}
              </text>
            </g>
          ))}
        </g>

        {/* Le trajet */}
        <line
          className="trajet"
          pathLength={1}
          x1={LONDON.x}
          y1={LONDON.y}
          x2={ABIDJAN.x}
          y2={ABIDJAN.y}
          stroke="#FFFFFF"
          strokeWidth={2}
          strokeLinecap="round"
        />

        <g className="distance-groupe">
          <line
            x1={(LONDON.x + ABIDJAN.x) / 2 + 6}
            x2={labelX - 8}
            y1={midY - 6}
            y2={midY - 6}
            stroke="rgba(255,255,255,0.35)"
          />
          <text className="distance" x={labelX} y={midY}>
            {t.distance}
          </text>
        </g>

        {/* Londres */}
        <circle cx={LONDON.x} cy={LONDON.y} r={11} fill="none" stroke="rgba(255,255,255,0.3)" />
        <circle cx={LONDON.x} cy={LONDON.y} r={5.5} fill="#FFFFFF" />
        <text className="ville" x={labelX} y={LONDON.y + 4}>
          {t.london}
        </text>
        <text className="coord" x={labelX} y={LONDON.y + 24}>
          {t.londonCoord}
        </text>

        {/* Abidjan */}
        <g className="arrivee">
          <circle cx={ABIDJAN.x} cy={ABIDJAN.y} r={11} fill="none" stroke="rgba(255,107,1,0.55)" />
          <circle cx={ABIDJAN.x} cy={ABIDJAN.y} r={5.5} fill="#FF6B01" />
          <text className="ville" x={labelX} y={ABIDJAN.y + 4}>
            {t.abidjan}
          </text>
          <text className="coord" x={labelX} y={ABIDJAN.y + 24}>
            {t.abidjanCoord}
          </text>
        </g>
      </svg>
      <figcaption>{t.caption}</figcaption>
    </figure>
  );
}
