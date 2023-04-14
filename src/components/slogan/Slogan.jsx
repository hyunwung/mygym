import React from 'react'
import profile from "../../assets/icon.jpg";
import "./Slogan.scss";
import "../../assets/Global.scss"

const Slogan = () => {
  return (
    <div className='slogan mg90'>
      <h2>안녕하세요 Ward 입니다.</h2>
      <img className='profile' src={profile} alt='profile'></img>
    </div>
  )
}

export default Slogan
