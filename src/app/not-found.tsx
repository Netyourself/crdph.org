"use client";
import MaintenancePage from "./components/Maintenance";
import { MAINTENANCE_MODE } from "@/constants/configs-variables";
import NotFoundPage from "./components/Not-Found";
const NotFound = () => {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return <NotFoundPage />;
};

export default NotFound;
