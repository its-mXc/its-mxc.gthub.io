import React, { Component } from 'react';
export default class Certifications extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="certifications">
      <div className="row" style={{maxWidth: "63vw"}}>
        <div className="twelve columns collapsed">
          <h4>Certifications</h4>
          <div id="certifications-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.certifications && resumeData.certifications.map((certificate)=>{
              return(
                <a href={certificate.image} target="_blank">{`•  ${certificate.name}  `}<i class="fa fa-link"></i></a>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}