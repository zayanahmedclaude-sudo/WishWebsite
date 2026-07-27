const videoSrc =
  "/Speaktacular Kathleen Ronalds Speaking Coaching in 2025..mp4";

export function WishVideoPlayer({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className={`video-player${compact ? " video-player-compact" : ""}`}>
      <video controls playsInline preload="metadata">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video element.
      </video>
    </div>
  );
}
