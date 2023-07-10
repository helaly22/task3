import React from 'react'

export default function ViewCourse({Course}) {
  return (
    <>
    <h1>{Course.name}</h1>
    <br />
    <p>{Course.desc}</p>
    <hr />
    </>
  )
}
