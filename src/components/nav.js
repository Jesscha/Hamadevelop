import React, { useEffect, useRef, useState } from "react"
import { rhythm } from "../utils/typography"
import { Link } from 'gatsby'
import './nav.css';

       

const Nav = ({tag, location}) => {
    const [move, setMove] = useState(false);
    let current
    const navRef = useRef(null)

    const scrollToNav = () => {
        window.scrollTo({
            top: 270,
            left: 0,
            behavior: 'smooth'
          })
        }

    useEffect(()=>{
        
        current = document.getElementById(tag) 
        const changeFirstCategory  = ()=>{
            document.getElementById('all').innerText = tag
            document.getElementById('all').parentElement.classList.add('navBox-active')
        }
        const changeFirstCategoryToAll = () =>{
            document.getElementById('all').parentElement.classList.add('navBox-active')
        }
        current?
        current.parentElement.classList.add('navBox-active') : 
        location && location.pathname =="/" ?
        changeFirstCategoryToAll()
        :
        changeFirstCategory()
        
        
    },[]
    )
    
    


  return (
    <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: rhythm(1),
    }}>
<div className='navWrapper' ref={navRef}>
    <div className="navBox" >
        <Link id={"all"} to={'/'} onClick={scrollToNav} >
                all
        </Link>
    </div>

    <div className="navBox" >
         <Link id={'algorithm'} to={'tags/algorithm'} onClick={scrollToNav}>
                algorithm
                </Link>
        
    </div>
    <div className="navBox">
        <Link id={'knowledge'} to={'tags/knowledge'} onClick={scrollToNav}>knowledge</Link>
    </div>

    <div className="navBox" style={{
        
    }}>
        <Link id={'Java Script'} to={'tags/java-script'} onClick={scrollToNav}>JS</Link>
    </div>
    <div className="navBox navBox-end">
         1
    </div>
    
</div>

    </div>
    
  )
}

export default Nav
