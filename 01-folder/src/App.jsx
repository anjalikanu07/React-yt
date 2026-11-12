// import React from "react";
import Card from "./components/Card.jsx";

const App = () => {

const jobs = [
  {
    id: 1,
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Mumbai, India"
  },
  {
    id: 2,
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    name: "Amazon",
    datePosted: "2 days ago",
    post: "Web Developer Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$25/hour",
    location: "Bangalore, India"
  },
  {
    id: 3,
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    name: "Apple",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    id: 5,
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    name: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Pune, India"
  },
  {
    id: 6,
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    name: "Netflix",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Remote, India"
  },
  {
    id: 7,
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    name: "NVIDIA",
    datePosted: "4 days ago",
    post: "Junior Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Bangalore, India"
  },
  {
    id: 8,
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    name: "Adobe",
    datePosted: "10 weeks ago",
    post: "Web UI Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Noida, India"
  }
];

  return (
    <div className='parent'>
      {jobs.map(function (elem, idx) {
        return <div key={idx}>
          <Card name={elem.name} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}
export default App

