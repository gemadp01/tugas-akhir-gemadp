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
// import clsx from "clsx";

const SidebarItem = (props) => {
  const { children } = props;
  return (
    <Button color="sidebarItem" size="md" className="w-3/4 text-left ">
      {children}
    </Button>
  );
};

export const AdminLayout = (props) => {
  const { title, description, rightSection, children } = props;
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    // Panggil backend untuk hapus cookie (kalau pakai cookie)
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });

    localStorage.removeItem("token");

    alert("Logout berhasil!");
    navigate("/login");
  };

  return (
    <AdminPage>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 shadow h-screen bg-sidebar">
          <div className="h-16 flex-col flex items-center justify-center border-b border-textColor-1">
            <h1 className="font-semibold text-3xl">Icon or Label</h1>
          </div>

          <div className="pl-4 pt-4">
            <h4 className="text-textColor-1 tracking-widest">Menu</h4>
          </div>

          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to="/admin/dashboard"
              className="w-full flex items-center justify-center"
            >
              <SidebarItem>
                <LayoutDashboardIcon className="inline h-4 w-4 mr-3" />
                Dashboard
              </SidebarItem>
            </NavLink>
            <NavLink
              to="/admin/list-meja"
              className="w-full flex items-center justify-center"
            >
              <SidebarItem>
                <Table2Icon className="inline h-4 w-4 mr-3" />
                Ketersediaan Meja
              </SidebarItem>
            </NavLink>
            <NavLink
              to="/admin/products"
              className="w-full flex items-center justify-center"
            >
              <SidebarItem>
                <UtensilsCrossedIcon className="inline h-4 w-4 mr-3" />
                Products
              </SidebarItem>
            </NavLink>
          </div>

          <div className="pl-4 pt-4">
            <h4 className="text-textColor-1 tracking-widest">Others</h4>
          </div>

          <form method="POST" onSubmit={handleLogout}>
            <div className="flex flex-col items-center space-y-4 py-4">
              <SidebarItem>
                <LogOutIcon className="inline h-4 w-4 mr-3" />
                Logout
              </SidebarItem>
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
