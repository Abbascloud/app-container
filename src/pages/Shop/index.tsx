import { Suspense } from "react";
import { LazyShop } from "./Shop.lazy";

export const ShopPage = () => (
  <Suspense fallback={"Lading..."}>
    <LazyShop />
  </Suspense>
);
