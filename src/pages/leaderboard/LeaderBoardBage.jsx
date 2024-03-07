import React, { useState } from 'react'
import "./LeaderBoardPage.css"
import Hero from '../../components/Hero/Hero'
import { Tab } from '@headlessui/react'
import $ from 'jquery';

import avatar1 from "../../assets/leaderboardavatar.png"

import badg1 from "../../assets/1 top3.png"
import badg2 from "../../assets/2 top3.png"
import badg3 from "../../assets/3 top3.png"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const LeaderBoardPage = () => {


  let [categories] = useState({
    "Biggest Winners": [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    "Biggest Losers": [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    "Ranking": [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })


  // method thet handle toggle expand collapse
  const handleCollapse = (e) => {
    $(e.target).next(".collapse-body").slideToggle();
    $(e.target).parents(".collapse-header").next(".collapse-body").slideToggle();

    $(e.target).toggleClass("open");
  }


  // Show the first tab by default
$('.tabs-stage div').hide();
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage div').hide();
  $($(this).attr('href')).show();
});


  return (
    <div className='leaderBoard-wrapper'>
      <Hero>
        <h1>Top 20 Traders on Street Suite<br /><span> STREET SUITE’s </span></h1>
      </Hero>

      <div className="lg:container mx-auto px-4 flex items-start  py-16 gap-12">

        <div className="ranking-container w-full">
          <div className="ranking-tabs">

            <Tab.Group>
              <Tab.List className="flex w-full taps-container">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames('w-1/3',
                        selected
                          ? 'selected'
                          : 'not-selected'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      'h-100vh tabs-content'
                    )}
                  >
                    <div className="collapse-item renking-1 w-full mb-6">
                      <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <span>1</span>
                        <div className="avatar flex flex-row gap-4 items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                        <img src={badg1} alt="" className='padge' />
                      </div>
                      <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                      </div>
                    </div>


                    <div className="collapse-item renking-2 w-full mb-6">
                      <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <span>2</span>
                        <div className="avatar flex flex-row gap-4 items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                        <img src={badg2} alt="" className='padge' />
                      </div>
                      <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                      </div>
                    </div>


                    <div className="collapse-item renking-3 w-full mb-6">
                      <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <span>3</span>
                        <div className="avatar flex flex-row gap-4 items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                        <img src={badg3} alt="" className='padge' />
                      </div>
                      <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                      </div>
                    </div>

                    <div className="collapse-item w-full mb-6">
                      <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <span>4</span>
                        <div className="avatar flex flex-row gap-4 items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                      </div>
                      <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                      </div>
                    </div>

                    <div className="collapse-item w-full mb-6">
                      <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <span>5</span>
                        <div className="avatar flex flex-row gap-4 items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                      </div>
                      <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                      </div>
                    </div>

                    <div className="collapse-item w-full mb-6">
                      <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <span>6</span>
                        <div className="avatar flex flex-row gap-4 items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                      </div>
                      <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                      </div>
                    </div>

                    <div className="collapse-item w-full mb-6">
                      <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <span>7</span>
                        <div className="avatar flex flex-row gap-4 items-center">
                          <img src={avatar1} alt="" />
                          <div className="user-info flex flex-col">
                            <h6>Alex Horren</h6>
                            <p>@alexhorennnn</p>
                          </div>
                        </div>
                      </div>
                      <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                      </div>
                    </div>
                  
                    {/* <ul>
                      {posts.map((post) => (
                        <li
                          key={post.id}
                          className="relative rounded-md p-3 hover:bg-gray-100"
                        >
                          <h3 className="text-sm font-medium leading-5">
                            {post.title}
                          </h3>

                          <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                            <li>{post.date}</li>
                            <li>&middot;</li>
                            <li>{post.commentCount} comments</li>
                            <li>&middot;</li>
                            <li>{post.shareCount} shares</li>
                          </ul>

                          <a
                            href="#"
                            className={classNames(
                              'absolute inset-0 rounded-md',
                              'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                            )}
                          />
                        </li>
                      ))}
                    </ul> */}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

          </div>
        </div>
        <div className="side-trader w-80">
          <div className="trader-types w-full">
            <h6>Trader Types</h6>
          </div>
          <div className="featured-stories w-full">

          </div>
          <div className="ConnectYourBroker w-full">

          </div>
        </div>

      </div>

      <div class="tabs-test">
  <ul class="tabs-nav">
    <li><a href="#tab-1">Features</a></li>
    <li><a href="#tab-2">Details</a></li>
    <li><a href="#tab-3">aaaaaaa</a></li>
  </ul>
  <div class="tabs-stage">
    <div id="tab-1">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec neque nisi, dictum aliquet lectus.</p>
    </div>
    <div id="tab-2">
      <p>Phasellus pharetra aliquet viverra. Donec scelerisque tincidunt diam, eu fringilla urna auctor at.</p>
    </div>
    <div id="tab-3">
      <p>Phasellufffffffffffffffffffffffffffffffffdunt diam, eu fringilla urna auctor at.</p>
    </div>
  </div>
</div>


    </div>
  )
}

export default LeaderBoardPage
