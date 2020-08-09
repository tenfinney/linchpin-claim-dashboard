import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Claims from "views/Claims.js";
import UserProfile from "views/UserProfile.js";
import AddClaim from "views/AddClaim.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/add-claim",
    name: "Add Claim",
    icon: "tim-icons icon-simple-add",
    component: AddClaim,
    layout: "/admin"
  },
  {
    path: "/claims",
    name: "Open Claims",
    icon: "tim-icons icon-single-copy-04",
    component: Claims,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "linchpins",
    icon: "tim-icons icon-puzzle-10",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-bullet-list-67",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "My Account",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
];
export default routes;
