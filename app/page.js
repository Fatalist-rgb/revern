import Hero from "./_components/Hero";
import BrandStatement from "./_components/BrandStatement";
import CategoryBoxes from "./_components/CategoryBoxes";
import DealsSlider from "./_components/DealsSlider";
import ModelBanner from "./_components/ModelBanner";
import CategoryTeaser from "./_components/CategoryTeaser";
import ShopTheLook from "./_components/ShopTheLook";
import ModelsSlider from "./_components/ModelsSlider";
import Stories from "./_components/Stories";
import Newsletter from "./_components/Newsletter";
import { glideBanner, summitBanner } from "./_lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <CategoryBoxes />
      <DealsSlider />
      <ModelBanner data={glideBanner} />
      <CategoryTeaser />
      <ShopTheLook />
      <ModelsSlider />
      <Stories />
      <ModelBanner data={summitBanner} reverse />
      <Newsletter />
    </>
  );
}
