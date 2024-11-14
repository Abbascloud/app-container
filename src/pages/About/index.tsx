import { Suspense } from "react";
import { LazyAbout } from "./About.lazy";

export const AboutPage = () => (
  <Suspense fallback={"Lading..."}>
    <LazyAbout />
  </Suspense>
);
