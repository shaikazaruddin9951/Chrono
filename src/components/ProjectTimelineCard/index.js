// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, description, projectUrl, duration} =
    projectDetails

  return (
    <div className="project-card-contianer">
      <img src={imageUrl} className="project-image" alt="project" />
      <div className="project-title-and-duration-contianer">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-contianer">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
