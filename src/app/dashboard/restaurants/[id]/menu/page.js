import { RestaurantDetailContainer } from "@/containers/dashboard/restaurant/details/RestaurantDetailContainer";
import { RestaurantMenuContainer } from "@/containers/dashboard/restaurant/details/RestaurantMenuContainer";

export default function RestaurantMenu({ params }) {
  return (
    <RestaurantMenuContainer id={params.id} />
  )
}
