import React from "react";
import Disqus from "disqus-react";

export function BlogOne() {

  const url = window.location.href;

  const disqusShortname = "lukascarey"

  return (
    <React.Fragment>
      <div class="header post" style={{ backgroundImage: "url(/img/prison-hallway.jpg)" }}>

        <div class="vertical-center">
          <div class="container">
            <div class="content">
              <span class="post-tag">Blog</span>
              <h1>Christmas Day Inside – Own It, Don’t Let It Own You!</h1>
              <span class="post-date slant">8 June 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div class="single post container">

        <div class="content">
          <h2>Owning Your Own Narrative</h2>
          <p>
            So lets not bullshit here – being away for Christmas can suck, especially
            if you are locked up. I did it, spending Christmas over 4000km away from
            my small kids and wont lie it really hurt inside.  Not seeing them, playing
            with them and doing the whole Santa thing stay with me today.
            After a brief discussion around the phones in the days before Christmas a
            few of us decided we would make it Christmas day the best day it possibly
            could be considering where we were and where our families were.
          </p>

          <p>
            The three guys chatting about Christmas day were three dads that were on or
            near the phones at the same time every night to talk to our children. We engaged
            each other one night talking about how shit Christmas would be and how we could
            support each other and try and make things better. We all noted we would be calling
            our kids and family on Christmas morning, needed time after that to process but
            wanted to do something that took our minds and hearts away from the pain that was
            sure to ensue. The three of us made our calls on the day dealing with tears, anger,
            bitterness and embarrassment. This call and the storm of emotions was by far that was
            the most difficult thing to do on the day but also set the baseline that whatever we
            did for the remainder of the day HAD to be better than that feeling.
          </p>



          <div class="row">
            <div class="col-md-7">
              <h3>A Game Of Cricket</h3>
              <p>
                I don’t want to sound like a knob when I write this as I get it, felt it and
                experienced it, but after some solid planning, word of mouth and help from the
                sport and recreation staff the three dads organised to try and replicate one of
                the things synonymous with many Australian festive seasons – a game of cricket.
              </p>
              <p>
                The sport and rec staff gave us a couple of sets of pads, a few bats, balls,
                stumps and helmets. We spoke to the grounds guys (inmates making their $3.50 per
                day doing what they were told) and they mowed the sports ground lower than normal
                with their hand mowers (as they weren’t allowed to use the ride on in case they
                escaped!). The guys chipped in to buy the two grounds guys a packet of ice creams
                and a slab of coke as a thank you for the arduous task they completed in 40-degree
                heat.
              </p>
            </div>
            <div class="col-md-5">
              <img src="/img/cricket.jpg" class="img-responsive" />
            </div>
          </div>

          <p>
            The three dads worked in different industries in the jail and had different social circles
            through recreation pursuits such as gym, cards, board games or study groups. For the weeks
            before Christmas strong recruitment took place to get two teams together that were keen to
            try and do anything possible to make Christmas day as best as it could be and more
            importantly be competitive so you didn’t lose!! There was a wide range of wagers laid,
            increasing the fun and taking our minds away from being away from the loved ones we were
            missing.
          </p>

          <p>
            To the surprise of the 22 guys recruited to play, there was a crowd of over 50 other
            inmates, officers and staff who came to watch the game and take their own minds off the
            pain that being in that place at that time bought to their minds. The jovial nature of
            the day on and off the pitch between and inmates and staff was truly a break in the
            difficulty of time inside and for a single day the pain of being away from loved ones
            became the driver to do something meaningful for each other.
          </p>

          <p>
            The game was played in great spirits and was a day full of fun, laughter, competitiveness
            and also mixed abilities. Every person played the game in the best nature it was designed
            for and thanked the three Dad’s afterwards for putting it together with the words ‘that’s
            what we needed’, ‘took my mind away from here for a while’ and ‘it felt like playing with
            my mates again’, being heard more than once after the event, in muster lines and during
            meal times.
          </p>

          <p>
            As I said already, I get the day is shit without family, but take the chance to maybe do 
            something in there that you haven’t done before or even have done before but haven’t done 
            forever, try cricket or football, even try board games or other games, but make sure the 
            reason for the game is outlined clearly for everyone involved from the start and that it 
            is for people to take their minds away from the shit feeling of missing family. Although 
            only a few hours of fun, I know it took our minds away and hid the emotions for a short 
            time taking many of us back to our school and junior sport days where fun and playing 
            with ‘mates’ won out, taking our minds away from the reality we faced every minute of 
            every day inside. Give it a try and own the narrative to your Christmas day, don’t let 
            it and the emotions attached to it own you.
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

