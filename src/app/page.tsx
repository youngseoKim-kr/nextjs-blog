import FeaturePosts from "@/component/FeaturePosts";
import YouMakeLike from "@/component/CarouselPost";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <FeaturePosts />
      <YouMakeLike />
    </>
  );
}
