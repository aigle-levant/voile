// components
import TiltedCard from "../imported/TiltedCard.tsx";
// media
import videoOne from "../../assets/videos/home/video-1.mp4";

export default function AnimatedComponent() {
  return (
    <TiltedCard
      imageSrc={videoOne}
      altText="."
      captionText=""
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={<p className="tilted-card-demo-text"></p>}
      isVideo={true}
    />
  );
}
