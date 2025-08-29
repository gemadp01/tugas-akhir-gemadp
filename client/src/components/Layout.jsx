function Layout({ children }) {
  return (
    // <main className="min-h-screen min-w-screen md:flex md:flex-col md:items-center">
    //   {children}
    // </main>
    <main className="min-h-screen container mx-auto flex flex-col items-center">
      {children}
    </main>
  );
}

export default Layout;
