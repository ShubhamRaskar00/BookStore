import img1 from "../../assist/Image/78_inr.jpg";
import img2 from "../../assist/Image/80_inr.jpg";
import img3 from "../../assist/Image/82_inr.jpg";
import SimpleImageSlider from "react-simple-image-slider";
// Slider Component
export default function Slider() {
  // Slider Images
  const images = [{ url: img3 }, { url: img2 }, { url: img1 }];
  return (
    <SimpleImageSlider
      width={1525}
      height={500}
      images={images}
      showBullets={true}
      showNavs={true}
      autoPlay
    />
  );
}
