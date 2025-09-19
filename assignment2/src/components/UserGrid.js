import React from "react";
import { Card, Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

export default function UserGrid({ users, onLike, onEdit, onDelete }) {
  return (
    <Row gutter={[16, 16]}>
      {users.map((u) => {
        // DiceBear Avataaars (v2 for exact match to your screenshot)
        const avatarUrl = `https://api.dicebear.com/6.x/avataaars/svg?seed=${encodeURIComponent(user.username)}&mood=happy`;

        return (
          <Col
            key={u.id}
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={6}
            style={{ display: "flex" }}
          >
            <Card
              bordered
              style={{ margin: "15px", flex: 1 }}
              cover={
                <div className="cardHeadImage" style={{ textAlign: "center" }}>
                  <img
                    src={avatar}
                    alt="Avatar"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              }
              actions={[
                u.liked ? (
                  <button
                    key="like"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      outline: "none",
                    }}
                    onClick={() => onLike(u.id)}
                  >
                    <HeartFilled
                      style={{ color: "red", fontSize: 20 }}
                    />
                  </button>
                ) : (
                  <button
                    key="like"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      outline: "none",
                    }}
                    onClick={() => onLike(u.id)}
                  >
                    <HeartOutlined
                      style={{ fontSize: 20 }}
                    />
                  </button>
                ),
                <button
                  key="edit"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    outline: "none",
                  }}
                  onClick={() => onEdit(u)}
                >
                  <EditOutlined style={{ fontSize: 18 }} />
                </button>,
                <button
                  key="delete"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    outline: "none",
                  }}
                  onClick={() => onDelete(u.id)}
                >
                  <DeleteOutlined style={{ fontSize: 18 }} />
                </button>,
              ]}
            >
              <h3>{u.name}</h3>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <MailOutlined style={{ fontSize: 18 }} />
                <p style={{ marginLeft: 10 }}>{u.email}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <PhoneOutlined style={{ fontSize: 18 }} />
                <p style={{ marginLeft: 10 }}>{u.phone}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <GlobalOutlined style={{ fontSize: 18 }} />
                <p style={{ marginLeft: 10 }}>{u.website}</p>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
