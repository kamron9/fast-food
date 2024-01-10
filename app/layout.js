import "../assets/globals.css";
import Header from "@/Layout/Header/Header";

export const metadata = {
  title: "Sofiya - fast food",
  description: "fast delivery fast food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={"bg-whiteSmoke min-h-screen w-full"}>
          <div className={"container "}>{children}</div>
        </main>
      </body>
    </html>
  );
}
