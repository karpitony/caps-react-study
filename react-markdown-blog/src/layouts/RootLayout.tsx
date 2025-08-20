import { Outlet } from "react-router";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}