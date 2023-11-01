import { RestaurantDetailContainer } from "@/containers/dashboard/restaurant/details/RestaurantDetailContainer";

export default function RestaurantHome({ params }) {
  return (
    <RestaurantDetailContainer id={params.id} />
  )
}
