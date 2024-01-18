import React from "react";
import { Link, useParams } from "react-router-dom";
import { getProject } from "./data";
import './Project.css'

function ProjectDetail() {
    
    const params = useParams();
    console.log(params);
    const project = getProject(parseInt(params.projectId));
    console.log(project);
    let overview = '';
    
    if(project.overview != null){
      overview = (
        <div className="text_center">
              <div className="overview">{
                project.overview.split('\n').map((line) => {
                  return(
                    <p>
                      {line}
                    </p>
                  )
                })
              }</div>
        </div>
      )
    }
    

    return (
      <>
        <section className="section inner layout">
          <h2 className="main-tit text_center mb50"><span>{project.name}</span></h2>
          {/* overview 내용 있을때 */}
          { overview }
          <div className="prjDetail">
            <div className="prjDetail-title">Detail</div>
            <div className="prjDetail-content">
              <ul className="detail-list">
                <li>
                  <p className="detail-tit">작업 기간</p>
                  <div className="detail-desc">
                  {project.period}
                  </div>
                </li>
                <li>
                  <p className="detail-tit">개발 언어</p>
                  <div className="detail-desc">
                  {project.stack}
                  </div>
                </li>
                <li>
                  <p className="detail-tit">담당 업무</p>
                  <div className="detail-desc">
                    <div>{ project.desc.split('\n').map((line) => { return(
                        <p>
                            {line}
                        </p>
                        ) })}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="prjDetail">
            <div className="prjDetail-title">View</div>
            <div className="prjDetail-content">
              <div className="img-wrap">
              <span className="img pc" style={{backgroundImage: `url(.${project.pcImg})`}}></span>
              <span className="img mo" style={{backgroundImage: `url(.${project.moImg})`}}></span>
              </div>
            </div>
          </div>

          <div className="btn-wrap">
            <a href={project.link} target="_blank" className="btn">사이트보기</a>
            <Link to={'/project'} className="btn">목록으로</Link>
          </div>
        </section>
      </>
    );
  }
  
  export default ProjectDetail;