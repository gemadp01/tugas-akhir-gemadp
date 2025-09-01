import {
  CircleUserIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  Table2Icon,
  UtensilsCrossedIcon,
} from "lucide-react";
import Button from "../Button";
import { NavLink, useNavigate } from "react-router-dom";
import { AdminPage } from "../guard/AdminPage";
import clsx from "clsx";

const navLinkClass = ({ isActive }) =>
  clsx(
    "w-auto px-3 md:w-3/4 text-left flex justify-center md:justify-start items-center bg-bgColor-1 text-primary py-2 md:px-5 rounded hover:bg-bgColor-2 hover:text-secondary cursor-pointer",
    isActive && "bg-bgColor-2 text-secondary rounded"
  );

const SidebarItem = (props) => {
  const { path, children } = props;
  return (
    <NavLink to={path} className={navLinkClass}>
      {children}
    </NavLink>
  );
};

export const AdminLayout = (props) => {
  const { title, description, rightSection, children } = props;
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    await fetch("/api/auth/logout", { method: "POST" });

    localStorage.removeItem("token");

    alert("Logout berhasil!");
    navigate("/login");
  };

  return (
    <AdminPage>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/5 md:w-80 shadow h-screen bg-sidebar">
          <div className="h-16 flex-col flex items-center justify-center border-b border-textColor-1">
            <h1 className="font-bold text-md md:text-3xl">Icon or Label</h1>
          </div>

          <div className="pl-4 pt-4">
            <h4 className="text-textColor-1 tracking-widest">Menu</h4>
          </div>

          <div className="flex flex-col items-center space-y-4 py-4">
            <SidebarItem end path="/admin/dashboard">
              <LayoutDashboardIcon className="inline h-4 w-4 md:mr-3" />
              <span className="hidden md:block">Dashboard</span>
            </SidebarItem>

            <SidebarItem path={`/admin/list-meja/user/loggedin`}>
              <Table2Icon className="inline h-4 w-4 md:mr-3" />
              <span className="hidden md:block">Ketersediaan Meja</span>
            </SidebarItem>

            <SidebarItem path={`/admin/products/user/loggedin`}>
              <UtensilsCrossedIcon className="inline h-4 w-4 md:mr-3" />
              <span className="hidden md:block">Products</span>
            </SidebarItem>
          </div>

          <div className="pl-4 pt-4">
            <h4 className="text-textColor-1 tracking-widest">Others</h4>
          </div>

          <form method="POST" onSubmit={handleLogout}>
            <div className="flex flex-col items-center space-y-4 py-4">
              <Button
                type="submit"
                color="sidebarItem"
                className="md:w-3/4 flex items-center"
              >
                <LogOutIcon className="inline h-4 w-4 md:mr-3" />
                <span className="hidden md:block">Logout</span>
              </Button>
            </div>
          </form>
        </aside>

        {/* container content*/}
        <div className="flex-1">
          <header className="h-16 border-b border-textColor-1 w-full flex justify-end items-center px-8">
            <Button className="rounded-full" size="icon">
              <CircleUserIcon className="w-4 h-4" />
            </Button>
          </header>

          {/* main */}
          <main className="flex flex-col p-4">
            {/* main header */}
            <div className="flex justify-between items-center pb-4 border-b mb-4">
              <div>
                <h1 className="font-bold text-4xl">{title}</h1>
                <p className="text-muted-foreground">{description}</p>
              </div>

              {rightSection}
            </div>

            {/* main content */}
            {children}
          </main>
        </div>
      </div>
    </AdminPage>
  );
};
