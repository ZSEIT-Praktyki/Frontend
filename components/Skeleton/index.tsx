interface SkeletonProps {
  classes?: string;
  width?: number;
  height?: number;
}

export default function Skeleton({ classes, width, height }: SkeletonProps) {
  return (
    <div
      className={`skeleton skeleton-text ${classes || ""}`}
      style={{ width, height }}
    />
  );
}
