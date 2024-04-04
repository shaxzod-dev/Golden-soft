import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const BreadcrumbAntd = ({ linker, title }: any) => (
  <div className="container">
    <Breadcrumb
      items={[
        {
          title: <Link to={"/"}>HOME</Link>,
        },
        {
          title: <Link to={`/catalog/${linker}`}>{title}</Link>,
        },
      ]}
    />
  </div>
);

export default BreadcrumbAntd;
