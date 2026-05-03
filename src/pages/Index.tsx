import { useState } from "react";
import Layout from "@/components/Layout";
import HomePage from "./HomePage";
import BuksyPage from "./BuksyPage";
import VideoPage from "./VideoPage";
import CryptoPage from "./CryptoPage";
import PhonePage from "./PhonePage";
import ExtensionsPage from "./ExtensionsPage";

type Page = "home" | "buksy" | "video" | "crypto" | "phone" | "extensions";

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "buksy":
        return <BuksyPage />;
      case "video":
        return <VideoPage />;
      case "crypto":
        return <CryptoPage />;
      case "phone":
        return <PhonePage />;
      case "extensions":
        return <ExtensionsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}
