import Header from "@/Layout/Header/Header";
import "../assets/globals.css";
import Provider from "./chakraProvider";
import Footer from "@/Layout/Footer/Footer";
export const metadata = {
  title: "Sofiya - fast food",
  description: "fast delivery fast food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* chakra provider */}
        <Provider>
          <Header />
          <main
            className={
              "bg-whiteSmoke min-h-screen w-full py-[90px] md:pt-[20px]"
            }
          >
            <div className={"container"}>{children}</div>
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
