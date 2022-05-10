import React from 'react'
import { FaStar } from 'react-icons/fa'

function Goal(props) {
  const { content, author, rating, date } = props.goal

  const stars = Array(rating).fill(0)

  return (
    <div>
      <div style={styles.stars}>
        <p>
          <strong>{author}</strong> &emsp; &emsp; Date:
          {new Date(date).toDateString()}
          &emsp; &emsp;
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                name="ratingValue"
                size={20}
                color="#FFBA5A"
              />
            )
          })}
        </p>
      </div>
      <p>
        Goal:&ensp;{content}
        &emsp; &emsp; &emsp; &emsp;
        <button>✏️</button>
        &emsp;
        <button>🗑️</button>
      </p>
      <br />
    </div>

    // <div>
    //   <div>
    //     <p>
    //       <strong>{author}</strong> &emsp; &emsp; Date:
    //       {new Date(date).toDateString()}
    //     </p>

    //     <p>Goal:&ensp;{content}</p>
    //   </div>
    //   <div style={styles.stars}>
    //     &ensp;
    //     {stars.map((_, index) => {
    //       return (
    //         <FaStar key={index} name="ratingValue" size={20} color="#FFBA5A" />
    //       )
    //     })}
    //   </div>
    //     <button>Edit</button>
    //     <button>Delete</button>
    //   <br />
    // </div>
  )
}

const styles = {
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
}

export default Goal
