/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/11
 */

import React, { Component } from "react";
import { Layout, Button, Form, Row, Col, Input } from "antd";
import DemoBox from "./components/demoBox";
import styles from "./styles/index.less?modules";

const { Header, Sider, Content, Footer } = Layout;

export default class extends Component {
  render() {
    return (
      <div className={styles.myCruise}>
        <Header className={styles.header}>header</Header>
        <Layout>
          <Sider theme={"light"}>sider</Sider>
          <Content>
            <Form>
              <Row gutter={50}>
                <Col span={11} offset={1}>
                  <DemoBox boxSize={{ height: "100px" }} />
                  <p>123</p>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Input placeholder="Warning" />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary">submit</Button>
            </Form>
          </Content>
        </Layout>
      </div>
    );
  }
}
