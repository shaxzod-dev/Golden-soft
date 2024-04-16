import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const BreadcrumbAntd = ({
  linker,
  page,
  title,
}: {
  title: any;
  linker: any;
  page: string;
}) => (
  <div className="container">
    <Breadcrumb
      items={[
        {
          title: <Link to={"/"}>HOME</Link>,
        },
        {
          title: <Link to={`/${page}/${linker}`}>{title}</Link>,
        },
      ]}
    />
  </div>
);

export default BreadcrumbAntd;
