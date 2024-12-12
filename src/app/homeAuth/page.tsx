import { Metadata } from "next";
import HeaderAuth from "@/components/common/headerAuth";

export const metadata: Metadata = {
  title: 'Sua Empresa - ambiental',
  icons: '/seuicon.ico'
};

export default function HomeAuth () {
  return (
    <main>
        <HeaderAuth />
        <div className="d-flex justify-content-center"><p>Bem vindo(a) ao sistema Ambiental</p></div>
    </main>
  );
};
