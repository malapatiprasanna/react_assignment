import React from "react";
import { Modal, Form, Input } from "antd";

export default function UserModalForm({ visible, onCancel, onSave, user }) {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (visible && user) {
      form.setFieldsValue({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        website: user.website || "",
      });
    }
  }, [visible, user, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      onSave(values);
      form.resetFields();
    } catch (err) {
      // ignore validation errors
    }
  };

  return (
    <Modal
      title="Basic Modal"
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText="OK"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="website" label="Website" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
