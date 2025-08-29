import { AdminLayout } from "../../components/AdminLayout/AdminLayout";
import Card from "../../components/Card";

const DashboardPage = () => {
  return (
    <AdminLayout
      title="Dashboard"
      description="Daftar ketersediaan meja dan Products"
    >
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <Card title="Ketersediaan Meja" description="x / x" status="Ready" />
        <Card title="Products" description="x / x" status="Ready" />
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
