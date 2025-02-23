import { Logo } from "@/components/Icons/Logo";
import Link from "next/link";
import { AdminNavItems } from "./AdminNavItems";

export const AdminDesktopNav = () => {
  return (
    <>
      <div className="group hidden border-r-4 border-gray-300 bg-gray-200 transition duration-500 lg:flex lg:flex-shrink-0">
        <div className="flex w-72 flex-col transition-all duration-200">
          <div className="flex flex-grow flex-col overflow-y-auto pt-8 pb-4">
            <div className="flex flex-shrink-0 flex-col items-center justify-center px-4">
              <Link href="/dashboard">
                <Logo className="h-10 w-full" />
              </Link>
            </div>
            <AdminNavItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDesktopNav;
