export function DotField({ className }: { className?: string }) {
  const dots = [];
  const cols = 12;
  const rows = 6;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({ x: c * 24, y: r * 24 });
    }
  }
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${cols * 24} ${rows * 24}`}
      className={className}
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={1.4} className="fill-primary/15" />
      ))}
    </svg>
  );
}
