import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="Username"
              name={"username"}
              rules={[
                { required: true, message: "Username cannot be left blank" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-Mail"
              name={"email"}
              rules={[
                { required: true, message: "E-Mail cannot be left blank" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name={"password"}
              rules={[
                { required: true, message: "Password cannot be left blank" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Password"
              name={"passwordAgain"}
              rules={[
                { required: true, message: "Password cannot be left blank" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Have an account?&nbsp;
            <Link to="/login" className="text-blue-600">
              Sign in now!
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 min-w-[800px]">right</div>
      </div>
    </div>
  );
};

export default Register;
