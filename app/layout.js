import Header from "@/Layout/Header/Header";
import "../assets/globals.css";
import Provider from "./chakraProvider";
export const metadata = {
  title: "Sofiya - fast food",
  description: "fast delivery fast food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* chakra provider */}
        <Provider>
          <Header />
          <main
            className={
              "bg-whiteSmoke min-h-screen w-full mt-[90px] md:mt-[20px]"
            }
          >
            <div className={"container "}>{children}</div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
