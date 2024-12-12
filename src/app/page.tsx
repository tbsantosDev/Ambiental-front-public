
import { Metadata } from "next";
import Login from "@/components/login";

export const metadata: Metadata = {
  title: 'Ambiental - Login',
  icons: '/seuicon.ico'
};

const Page = function () {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Page;
