import React from "react";
import "./Registration.css";
import "antd/dist/antd.css"; 
import { Form, Input, Button, Typography, Card, Checkbox, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import useRequest from "../../services/RequestContext";
import Headers from '../../components/Headers';

function Registration() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { Option } = Select;
    const { request } = useRequest();
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onFinish = async (values) => {
        values.role = "student";
        console.log("values", values);
        try {
            const res = await request.post("student", values);
            if (res.status === 201) {
                message.success("Successfully Registered!");
                navigate("/login");
            } else {
                message.success("Registration Failed, Try Again!");
                form.resetFields();
            }
            } catch (e) {
                console.log("error", e);
                form.resetFields();
        }
    };

    const getAllStudents = async (values) => {
        try{
            const res = await request.getAllStudents("student");
            if(res.status === 200){
                console.log("students", res);
            }else{
                message.error("failed");
            }
        }catch (err){
            console.log("err", err);
        }
    };

    return(
        <div className="login-main-component">
            <Card
                className="loginCard"
                title="Student Registration"
                headStyle={{ fontSize: 30, fontWeight: "bold", border: "none" }}
            >
                <Form
                    style={{ width: 400 }}
                    layout="vertical"
                    name="basic"
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    //onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                    className="lableText"
                    label="Name"
                    name="name"
                    rules={[
                        {
                        required: true,
                        message: "Please input your name!",
                        },
                        { whitespace:true },
                        { min:3 },
                    ]}
                    hasFeedback
                    >
                    <Input
                        style={{ width: 400, borderRadius: 4, height: 40 }}
                        placeholder="Name"
                    />
                    </Form.Item>

                    <Form.Item
                    className="lableText"
                    label="Registration Number"
                    name="studentId"
                    rules={[
                        {
                        required: true,
                        message: "Please input your Registration number!",
                        },
                        { 
                        len:10,
                        message: "Registration number must be 10 characters!"
                        },
                    ]}
                    hasFeedback
                    >
                    <Input
                        style={{ width: 400, borderRadius: 4, height: 40 }}
                        placeholder="ITXXXXXXXX"
                    />
                    </Form.Item>

                    <Form.Item
                    className="lableText"
                    label="Mobile Number"
                    name="mobile"
                    rules={[
                        {
                        required: false,
                        message: "Please input your mobile number!",
                        },
                        { min:10 },
                    ]}
                    hasFeedback
                    >
                    <Input
                        style={{ width: 400, borderRadius: 4, height: 40 }}
                        placeholder="Mobile Number"
                    />
                    </Form.Item>

                    <Form.Item
                    className="lableText"
                    label="Email"
                    name="email"
                    rules={[
                        {
                        required: true,
                        message: "Please input your frequently used email!",
                        },
                        { type:"email"},
                    ]}
                    hasFeedback
                    >
                    <Input
                        style={{ width: 400, borderRadius: 4, height: 40 }}
                        placeholder="Email"
                    />
                    </Form.Item>
                    
                    <Form.Item
                    className="lableText"
                    label="Faculty"
                    name="faculty"
                    >
                    <Select
                        defaultValue="Faculty of Computing"
                        style={{
                        width: 400,
                        borderRadius: 4,
                        height: 40,
                        }}
                        onChange={handleChange}
                    >
                        <Option value="Faculty of Computing">Faculty of Computing</Option>
                        <Option value="Faculty of Business">Faculty of Business</Option>
                        <Option value="Faculty of Engineering">Faculty of Engineering</Option>
                        <Option value="Faculty of Humanities">Faculty of Humanities</Option>
                    </Select>
                    </Form.Item>

                    <Form.Item
                    className="lableText"
                    label="Specialization"
                    name="specialization"
                    rules={[
                        {
                        required: true,
                        message: "Please input your field of specialization!",
                        },
                        { whitespace:true },
                        { min:3 },
                    ]}
                    hasFeedback
                    >
                    <Input
                        style={{ width: 400, borderRadius: 4, height: 40 }}
                        placeholder="Eg: Software Engineering"
                    />
                    </Form.Item>

                    <Form.Item style={{ alignItems: "center" }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="loginBtn"
                    >
                        Register
                    </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Registration;