import React from 'react'

const buyCakeCoinForm = props => {
  const {state, handleChange, handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="coins">How many coins?</label>
        <input
          type="text"
          name="coins"
          value={state.coins}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default buyCakeCoinForm
