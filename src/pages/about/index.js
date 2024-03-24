import React from "react";
import "./style.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  education,
  certificate,
  web_skills,
  embedded_skills,
  programming_languages,
} from "../../content_option";

export const About = () => {
  // const [isVisible0, setIsVisible0] = useState(false);

  // const handleToggleVisibility0 = () => {

  //   setIsVisible0(!isVisible0);
  // };

  // const [isVisible1, setIsVisible1] = useState(false);

  // const handleToggleVisibility1 = () => {

  //   setIsVisible1(!isVisible1);
  // };

  // const [isVisible2, setIsVisible2] = useState(false);

  // const handleToggleVisibility2 = () => {

  //   setIsVisible2(!isVisible2);
  // };


  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me

            </h1>           
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            {/* <h3 className="color_sec py-4">{dataabout.title}</h3> */}
            <div className="align-self-center ">
              <img className ="po_item about_img" src="/images/kyosook.png" alt="" />            
            </div>            
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
              <p>{dataabout.work}</p>       
              <a href = "/files/KyoSook Shin.pdf">     
                <div id="button_h" className="ac_btn btn ">
                  resume download
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>  
              </a>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Full Stack Development Skills</h3>
          </Col>
          <Col lg="7">
            {web_skills.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Embedded SW Development Skills</h3>
          </Col>
          <Col lg="7">
            {embedded_skills.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            {/* <table className="table caption-top"> */}
            <table className="table caption-top">
              <tbody >
                  <tr >
                      <th scope="row">{worktimeline[0].jobtitle}</th>
                      <td>{worktimeline[0].where}</td>
                      <td>
                        <a href = {worktimeline[0].url}><img src={worktimeline[0].logo} className="resume_edu_img" alt=""/>
                        </a>
                      </td>
                      <td>{worktimeline[0].date}</td>
                      
                  </tr>              
              </tbody>

              <tbody className="table caption-top">
                  <tr>
                      <th scope="row">{worktimeline[1].jobtitle}</th>
                      <td>{worktimeline[1].where}</td>
                      <td>
                        <a href = {worktimeline[1].url}><img src={worktimeline[1].logo} className="resume_edu_img" alt=""/>
                        </a>
                      </td>
                      <td>{worktimeline[1].date}</td>
                  </tr>                
              </tbody>

              <tbody className="table caption-top">
                  <tr>
                      <th scope="row">{worktimeline[2].jobtitle}</th>
                      <td>{worktimeline[2].where}</td>
                      <td>
                        <a href = {worktimeline[2].url}><img src={worktimeline[2].logo} className="resume_edu_img" alt=""/>
                        </a>
                      </td>
                      <td>{worktimeline[2].date}</td>
                  </tr>                

              </tbody>
            </table>

          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {education.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.course}</th>
                      <td>{data.where}</td>
                      <td>
                        <a href = {data.url}><img src={data.logo} className="resume_edu_img" alt=""/>
                        </a>
                      </td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>


        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Programming Languages</h3>
          </Col>
          <Col lg="7">
            {programming_languages.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Certificate</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {certificate.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.course}</th>
                      <td>{data.where}</td>
                      <td>
                        <a href = {data.url}><img src={data.logo} className="resume_edu_img" alt=""/>
                        </a>
                      </td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className=" sec_sp">
        </Row>

      </Container>
    </HelmetProvider>
  );
};
