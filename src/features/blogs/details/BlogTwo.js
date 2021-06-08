import React from "react";
import Disqus from "disqus-react";

export function BlogTwo() {

  const url = window.location.href;

  const disqusShortname = "lukascarey"

  return (
    <React.Fragment>
      <div class="header post" style={{ backgroundImage: "url(/img/prison-hallway.jpg)" }}>

        <div class="vertical-center">
          <div class="container">
            <div class="content">
              <span class="post-tag">Blog</span>
              <h1>Developing Links With Academics From Working Class Backgrounds In Oother Countries</h1>
              <span class="post-date slant">9 June 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div class="single post container">

        <div class="content">
          <h2>Owning Your Own Narrative</h2>
          <p>
            Working class backgrounds, and those that have battled through them, have similarities.
            Their willingness to fight to survive and fight to be recognised, is second to none.
            More often than not those innate characteristics remain with those individuals and drive
            them to be focussed, compassionate and empathetic academics. Bringing as many academics
            with lived experience in this area from across the globe, will increase the quality and
            authenticity of our work, will allow for greater collaboration and will hopefully pave
            the way for others, from similar backgrounds, to join the rough but rewarding world of
            academia.
          </p>

          <p>
            As a child born into a battling, lower class family, in the wrong part of town, the idea
            of working in academia is as fanciful an idea as you could cobble together. My mother
            cleaned other people’s houses and my father was a self-employed butcher, who not only
            used my mother, my sibling and myself as punching bags, but also used alcohol and
            infidelity to hide his own issues. Getting out of there, gaining a doctorate and being
            in a position to try and influence change would be a 1000-1 shot and on par with seeing
            a unicorn.
          </p>



          <div class="row">
            <div class="col-md-7">
              <h3>Lived Experience</h3>
              <p>
                This is not a unique type of story and is one that a large number of the people in our
                group probably share in some way or another. We faced the same challenges, faced the same
                fights to be relevant and still fight some of those challenges today. Many in the world
                would refer to us as being ‘working class’.  The stories are similar and regardless of
                where we are around the world, the way we are approached to collaborate and share our
                lived experiences should be considered and promoted.
              </p>
            </div>
            <div class="col-md-5">
              <img src="/img/challenges.jpg" class="img-responsive" />
            </div>
          </div>

          <p>
            Understanding that academics, with working class backgrounds, have shared fighting
            qualities and in many instances, the desire to improve the world and lives of others,
            it is important that we are brought together. The ability to share our battles, share
            our lessons and support the ongoing battles of each other is essential. The most
            effective way to do this is through online engagement and encouraging collaboration
            and expansion of worldwide networks.
          </p>

          <p>
            The ability for academics who may not have attended private schools, had two parents 
            while growing up, experienced abuse of some form or had to skip meals because their 
            parents couldn’t afford to feed them, and who are often labeled as being ‘working class’, 
            to find like-minded, driven people is essential, yet difficult and requires concerted effort. 
            The development of online sessions through the use of technologies such as Zoom or Teams that 
            are based in London are effective for people in similar time zones, but not for people in 
            places such as Australia, New Zealand and other areas. Although we can watch the online 
            sessions when the time zone suits, we miss out on the engagement, collaborative opportunities 
            and the sharing of ideas. It is often the time before and after formal sessions that the 
            building of relationships occurs, a key element missing with the timing of these sessions. 
            Further developing and incorporating the same type of sessions, at different times, could 
            encourage a new audience and could open the group up to new opportunities, possibly being 
            missed. Although potentially making it challenging for some of the European members of the 
            group with a diverse time, the sessions would allow for overseas members to actively be involved and open other opportunities yet to be explored or considered.
          </p>

          <p>
            Meaningful collaboration is also essential. To remain employed in academia, or to gain 
            employment in academia, finding a group of people to work and collaborate with is key. 
            The ability to allow non-formal collaborations to build through online discussions, a 
            collaboration ‘job’ board or a designated email blast sharing collaboration opportunities, 
            will assist the building of networks and the breaking down of geographic borders and 
            limitations. The ability for academics to work together, write together and research 
            together from across the globe will not only improve the quality of our work but also 
            open the doors to funding and publication opportunities across the world.
          </p>

          <p>
            The importance of increasing opportunities for working class academics will not only 
            increase the quality of research being produced across the globe, but will also pave 
            the way for others who face diversity in younger years to reach academia. Imagine a 
            young student from a working class background, possibly from a single parent home, 
            maybe living on a farm with working class parents or with a parent with a criminal 
            record. Now imagine that young students' burning desire to go to university, study
            and maybe even become an expert in a specific area such as education, medicine or 
            even law. Now, finally, think what would happen to their dreams if they thought that 
            their parents could not afford for them to attend or that their challenges were so 
            intense that they had these dreams unfulfilled. An unfair situation for any young person, 
            however, with the sharing and development of the Working Class Academics group across the 
            globe, these young people will be exposed to success stories that may prove to be the role 
            model and difference they are looking for. This group could realistically be life changing 
            for many.
          </p>

          <p>
            The horrors of Covid 19 have fast tracked many into the learning of new online technologies 
            and the utilization of the protocols involved in using them. The time is now to expand the 
            focus and message of the Working Class Academic group. Online methods are now second nature 
            to us all and the opportunity to encourage others to join this group is also now. With the 
            tertiary teaching system across the world going through immense changes due to Covid 19, 
            more and more exceptionally talented academics with working class backgrounds and lives may 
            be lost to the academic world. We need to reach out, find each other and it is simple when 
            someone does, buy in, share your ideas, collaborate with someone you haven’t worked with 
            before and start writing now. Together we are stronger, together we are better and together 
            we can share our lived experiences with the world.
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

