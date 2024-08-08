import "bootstrap/dist/css/bootstrap.css";
import "@/styles/index.scss";
import Layout from "@/components/wrappers/Layout";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import VisualEditingControls from "@/components/wrappers/VisualEditingControls";
import NextTopLoader from "nextjs-toploader";
import localFont from "next/font/local";

export const customFont = localFont({
  src: "../../public/fonts/Pacaembu.woff2",
  variable: "--t-font-family-global",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={customFont.variable}>
        <NextTopLoader
          color="var(--t-primary-branding-color)"
          showSpinner={false}
          height={2}
        />
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
        <VisualEditingControls />
      </body>
    </html>
  );
}
