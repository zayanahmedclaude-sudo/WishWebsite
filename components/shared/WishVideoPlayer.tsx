const videoSrc = "/Welcome to W.I.S.H.mp4#t=0.1";

export function WishVideoPlayer({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className={`video-player${compact ? " video-player-compact" : ""}`}>
      <video controls playsInline preload="auto">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video element.
      </video>
    </div>
  );
}
