import {useState,useEffect} from 'react'
import Head from 'next/head'
import Repl from '@/components/repl'
import Followers from '@/components/followers'
import styles from '@/styles/Home.module.css'


export default function Home() {
  const [followerCount,setFollowerCount] = useState(0)
  
  const fetchFollowers = async ()=>{
    let res = await fetch('/api/followers')
    let data= await res.json()
    setFollowerCount(JSON.parse(data).followers)
  }
  
  useEffect(()=>{
    fetchFollowers()
  },[])
  return (
    <div className={styles.main}>
      <Head>
        <title>{(followerCount)?'CodeMagnon | '+followerCount+' followers':' CodeMagnon | Live follower Count'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="preview"> 
<div className="main-content">
  <div className="user">
    <img
      src="PFP.jpg"
      alt="pfp"
      className="pfp"
    />
    <div>
      <span className="username">CodeMagnon</span>
      <div className="description">Programmer</div>
    </div>
  </div>
  <div className="sections">
    <div className="section">
      <div>
        <div className="heading">About Me</div>
        <div className="text aboutme">
         Ambitious person who want to make others life easy through his works
        </div>
      </div>
      <div>
        <div className="socials">
          <a href="#discord">
            <svg
              preserveAspectRatio="xMidYMin"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ verticalAlign: "middle" }}
              aria-hidden="true"
            >
              <path d="M9.88804 10.068C9.20404 10.068 8.66404 10.668 8.66404 11.4C8.66404 12.132 9.21604 12.732 9.88804 12.732C10.572 12.732 11.112 12.132 11.112 11.4C11.124 10.668 10.572 10.068 9.88804 10.068ZM14.268 10.068C13.584 10.068 13.044 10.668 13.044 11.4C13.044 12.132 13.596 12.732 14.268 12.732C14.952 12.732 15.492 12.132 15.492 11.4C15.492 10.668 14.952 10.068 14.268 10.068Z" />
              <path d="M20.1001 0H4.02006C2.66406 0 1.56006 1.104 1.56006 2.472V18.696C1.56006 20.064 2.66406 21.168 4.02006 21.168H17.6281L16.9921 18.948L18.5281 20.376L19.9801 21.72L22.5601 24V2.472C22.5601 1.104 21.4561 0 20.1001 0ZM15.4681 15.672C15.4681 15.672 15.0361 15.156 14.6761 14.7C16.2481 14.256 16.8481 13.272 16.8481 13.272C16.3561 13.596 15.8881 13.824 15.4681 13.98C14.8681 14.232 14.2921 14.4 13.7281 14.496C12.5761 14.712 11.5201 14.652 10.6201 14.484C9.93606 14.352 9.34806 14.16 8.85606 13.968C8.58006 13.86 8.28006 13.728 7.98006 13.56C7.94406 13.536 7.90806 13.524 7.87206 13.5C7.84806 13.488 7.83606 13.476 7.82406 13.464C7.60806 13.344 7.48806 13.26 7.48806 13.26C7.48806 13.26 8.06406 14.22 9.58806 14.676C9.22806 15.132 8.78406 15.672 8.78406 15.672C6.13206 15.588 5.12406 13.848 5.12406 13.848C5.12406 9.984 6.85206 6.852 6.85206 6.852C8.58006 5.556 10.2241 5.592 10.2241 5.592L10.3441 5.736C8.18406 6.36 7.18806 7.308 7.18806 7.308C7.18806 7.308 7.45206 7.164 7.89606 6.96C9.18006 6.396 10.2001 6.24 10.6201 6.204C10.6921 6.192 10.7521 6.18 10.8241 6.18C11.5561 6.084 12.3841 6.06 13.2481 6.156C14.3881 6.288 15.6121 6.624 16.8601 7.308C16.8601 7.308 15.9121 6.408 13.8721 5.784L14.0401 5.592C14.0401 5.592 15.6841 5.556 17.4121 6.852C17.4121 6.852 19.1401 9.984 19.1401 13.848C19.1401 13.848 18.1201 15.588 15.4681 15.672Z" />
            </svg>
            <span>Code_Magnon#8918</span>
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <svg
              preserveAspectRatio="xMidYMin"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ verticalAlign: "middle" }}
              aria-hidden="true"
            >
              <path d="M21.8008 7.99963C21.8008 7.99963 21.6055 6.62073 21.0039 6.01526C20.2422 5.21838 19.3906 5.21448 19 5.1676C16.2031 4.96448 12.0039 4.96448 12.0039 4.96448H11.9961C11.9961 4.96448 7.79688 4.96448 5 5.1676C4.60938 5.21448 3.75781 5.21838 2.99609 6.01526C2.39453 6.62073 2.20312 7.99963 2.20312 7.99963C2.20312 7.99963 2 9.62073 2 11.2379V12.7535C2 14.3707 2.19922 15.9918 2.19922 15.9918C2.19922 15.9918 2.39453 17.3707 2.99219 17.9762C3.75391 18.7731 4.75391 18.7457 5.19922 18.8317C6.80078 18.984 12 19.0309 12 19.0309C12 19.0309 16.2031 19.0231 19 18.8239C19.3906 18.777 20.2422 18.7731 21.0039 17.9762C21.6055 17.3707 21.8008 15.9918 21.8008 15.9918C21.8008 15.9918 22 14.3746 22 12.7535V11.2379C22 9.62073 21.8008 7.99963 21.8008 7.99963ZM9.93359 14.5934V8.97229L15.3359 11.7926L9.93359 14.5934Z" />
            </svg>
            <span>Youtube</span>
          </a>
          <a href="https://replit.com/@CodeMagnon">
            <svg
              preserveAspectRatio="xMidYMin"
              width={16}
              height={16}
              viewBox="0 0 32 32"
              fill="currentColor"
              style={{ verticalAlign: "middle" }}
              aria-hidden="true"
            >
              <path d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z" />
              <path d="M17 12H25.5C26.3284 12 27 12.6716 27 13.5V18.5C27 19.3284 26.3284 20 25.5 20H17V12Z" />
              <path d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z" />
            </svg>
            <span>Replit</span>
          </a>
        </div>
      </div>
    </div>
    {/*new Section */}
    <div className="section">
    <div className="heading">Followers</div>
            <div className="repl-name changeColors">
              {followerCount} followers
            </div>
          </div>
    </div>
  <Followers followerCount={followerCount}/>
      <div className="projects">
      <div className="heading">Repls you can checkout</div>
        <Repl replData={{replName:"The password game (99% fail)",replDesc:"the most famous password game is coming on replit soon",specialRepl:"new",href:"/special-repls/the-password-game",img:"https://cdn.mos.cms.futurecdn.net/Abm28GfhcAxpwSjV6wB83W.jpg"}}/>
        <Repl replData={{replName:"10 sec Game",replDesc:"press the buzzer at 10 seconds and get a surprise",specialRepl:"new",href:"/special-repls/10-sec-game",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3mpQCEVv_IgGAtR7Z_iiTdYitUNo6-iD0g&usqp=CAU"}}/>
        <Repl replData={{replName:"Coming soon",replDesc:"...",specialRepl:"coming soon",href:"#",img:""}}/>

</div>
</div>
    </div>
  </div>
  )
}


    
