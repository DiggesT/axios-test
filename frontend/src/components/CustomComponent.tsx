import { Login, postApiV1AuthLogin } from "../api/endpoints/auth";

const CustomComponent = () => {
  const data: Login = { email: "", password: "" };

  postApiV1AuthLogin(data);

  return <h2>This is custom component</h2>;
};

export default CustomComponent;
