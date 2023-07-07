import React, {useState} from "react";
import "./MajorArticle.scss";
import BigCard from "../BigCard/BigCard";
import SmallCard from "../SmallCard/SmallCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MajorArticle = ({data}) => {

  return (
    <Container>
      <div className=" majorcard">
        <Container fluid className="container-fluid">
          <Row className="row">
            <Col md={6} className="col-xl-6">
              <BigCard article={data?.length && data[0]}/>
            </Col>
            <Col md={6} className="col-xl-6">
              <Row className="row cardwidth">
                {data?.length && data.slice(1).map((card,index) => (
                  <Col lg={6} className="custom-div" key={index}>
                    <SmallCard article={card} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default MajorArticle;
