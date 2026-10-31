import DesktopSite from "./components/DesktopSite";
import MobileSite from "./components/mobile/MobileSite";
import { useMediaQuery } from "./lib/hooks";

/**
 * İki ayrı tema:
 *  — Telefon / dokunmatik cihaz → Mobil tema (yerel, tek sütun, başparmak dostu)
 *  — Masaüstü → Orijinal editoryal tasarım (hiç değişmedi)
 *
 * Not: `pointer: coarse` sayesinde telefon yatay modunda da mobil tema kalır.
 */
export default function App() {
  const isMobile = useMediaQuery(
    "(max-width: 767px), (pointer: coarse) and (max-width: 1024px)"
  );

  return isMobile ? <MobileSite /> : <DesktopSite />;
}
