import React, {useState} from "react";
import { Link } from "react-router-dom";
import { getProjects } from "./data";
import './Project.css'

function Project() {

    const projects = getProjects();
    return (
      <>
        <section id="section3" className="section inner layout">
          <h2 className="main-tit"><span>Project</span></h2>
          <ul className="proj-wrap">
              {projects.map( prj =>(
                  <li key={prj.id} className="item">
                    <Link to={`/project/${prj.id}`} className="link">
                      {/* <div className="img" style={{backgroundImage: `url(${prj.pcImg})`}}></div> */}
                      <div className="img"><img src={`${process.env.PUBLIC_URL}${prj.pcImg}`} alt="" /></div>
                      <div className="bg">
                        <p className="title">{prj.name}</p>
                      </div>
                    </Link>
                  </li>
              ))}
          </ul>
        </section>
      </>
    );
  }
  
  export default Project;