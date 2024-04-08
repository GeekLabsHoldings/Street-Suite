import React from 'react'
import "./AcrossGlobal.css"

const AcrossGlobal = () => {


  // const counters = document.querySelectorAll('.acrossGlobal-box .counter');
  // const speed = 1000; // The lower the slower

  // counters.forEach(counter => {
  //   const updateCount = () => {
  //     const target = +counter.getAttribute('data-target');
  //     const count = +counter.innerText;

  //     // Lower inc to slow and higher to slow
  //     const inc = target / speed;

  //     // console.log(inc);
  //     // console.log(count);

  //     // Check if target is reached
  //     if (count < target) {
  //       // Add inc to count and output in counter
  //       counter.innerText = count + inc;
  //       // Call function every ms
  //       setTimeout(updateCount, 1);
  //     } else {
  //       counter.innerText = target;
  //     }
  //   };

  //   updateCount();
  // });






  return (
    <section className='acrossGlobal'>
      <div className='mx-auto px-0 md:px-4 acrossGlobal-container'>
        <div className="border-animate">
          <div className="acrossGlobal-box w-full">
            <h2><span className='counter' data-target="3001">0</span> USERS</h2>
            <h5>ACROSS THE GLOBE</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcrossGlobal
