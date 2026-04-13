export default function Logo({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pipe-Up logo"
    >
      {/* Orange ring */}
      <circle cx="50" cy="50" r="44" stroke="#cc5500" strokeWidth="8" fill="none" />
      {/* White U shape */}
      <path
        d="M32 28 L32 58 Q32 72 50 72 Q68 72 68 58 L68 28"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      {/* Flame — outer */}
      <path
        d="M50 22 C50 22 44 30 44 36 C44 38 45 40 47 41 C46 38 47 35 49 33 C49 38 51 40 51 43 C53 41 54 38 53 35 C55 37 56 40 55 43 C57 41 58 37 56 33 C58 35 59 38 58 41 C60 40 61 38 61 36 C61 30 56 22 50 22Z"
        fill="#cc5500"
      />
      {/* Flame — inner highlight */}
      <path
        d="M50 28 C50 28 46 34 46 38 C46 40 47.5 42 50 42 C52.5 42 54 40 54 38 C54 34 50 28 50 28Z"
        fill="#e8820a"
      />
    </svg>
  );
}
