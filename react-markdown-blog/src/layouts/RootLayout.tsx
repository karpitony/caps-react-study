import { Outlet } from "react-router";
import Header from "../components/Header";
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Analytics />
    </div>
  )
}