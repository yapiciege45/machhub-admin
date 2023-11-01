import { DashboardContainer } from "@/containers/dashboard/DashboardContainer";
import { AdminUserContainer } from "@/containers/dashboard/user/AdminUserContainer";
import { CompanyUserContainer } from "@/containers/dashboard/user/CompanyUserContainer";
import { RestaurantUserContainer } from "@/containers/dashboard/user/RestaurantUserContainer";
import { WebsiteUserContainer } from "@/containers/dashboard/user/WebsiteUserContainer";

export default function WebsiteUser () {
  return (
    <WebsiteUserContainer />
  )
}
