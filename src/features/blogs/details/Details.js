import React from "react";
import Disqus from "disqus-react";

export function Details() {

  const url = window.location.href;

  const disqusShortname = "lukascarey"
  const disqusConfig = {
    url: `${url}`,
    identifier: "0",
    title: "Title of Your Article"
  }

  return (
    <React.Fragment>
      <div class="header post" style={{ backgroundImage: "url(/img/prison-hallway.jpg)" }}>

        <div class="vertical-center">
          <div class="container">
            <div class="content">
              <span class="post-tag">Blog</span>
              <h1>The Power of Lived Experience</h1>
              <span class="post-date slant">24 May 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div class="single post container">

        <div class="content">
          <h2>Owning Your Own Narrative</h2>
          <p>
            Dr. Lukas Carey completed his Doctorate in education and has worked in the field for most
            of his working life as a coach, teacher, trainer and educator. While filling a role in local
            government he was charged with receiving secret commissions and served time in Prison.
            During that time Lukas used his theoretical lived experience knowledge to study the lives of
            the incarcerated, the educational happenings inside the justice system and their influence
            over the future employment opportunities upon release.
          </p>

          <p>
            With an interest in the role previously incarcerated people have in the development of policy
            and procedure in the justice system, Lukas is a strong advocate for the Convict Criminology and
            Lived Experience stream. The importance of the lived experiences of previously incarcerated people
            and people from working class backgrounds drive the work Lukas is doing in the education and
            research field.
          </p>

          

          <div class="row">
            <div class="col-md-7">
              <h3>Lived Experience</h3>
              <p>
                The negative experiences of many working class academics and previously incarcerated people from working class 
                backgrounds often eat them up from the inside out. In the large part, the world sees people from these backgrounds 
                as second-class citizens and their experiences as negative. The recent Working Class Academics conference bought 
                together a diverse and intriguing set of people with amazing lived experiences. The common factor that all presented 
                highlighted in both a deliberate and also subconscious way, was the need to ‘own your own narrative’.
              </p>
            </div>
            <div class="col-md-5">
              <img src="/img/p3.png" class="img-responsive" />
            </div>
          </div>

          <p>
            <strong> So you come from a working class background?  You have a criminal record? </strong>   
            You are fighting daily to remain relevant or equal? There are thousands of people around the world sharing the same challenges on a daily basis. They wake up in the morning and fight anxiety. They wake up next to a person who emotionally, physically or psychologically abuses them. They wake up unemployed with minimal prospects moving forward…… The story and examples could fill this page, and a hundred like it. Some of the major challenges many of these people face is being brave enough to tell their own story, finding a medium willing to hear it, and most of all, owning the narrative of their own story.
          </p>

          
          <br />
          <div className="article-container">

            <h1>Let me hear your thoughts</h1>
            
            <Disqus.DiscussionEmbed

              shortname={disqusShortname}
              config={{
                url: `${url}`,
                identifier: "",
                title: ""
              }}
            />
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

