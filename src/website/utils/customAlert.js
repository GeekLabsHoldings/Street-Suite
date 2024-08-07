/**
 * Displays a custom alert message with a fading animation.
 *
 * @param {string} message - The message to be displayed in the alert.
 */
const customAlert = (message, type = "success") => {
  document.querySelectorAll(".popupAlert").forEach((element) => {
    element.remove();
  });

  const newElement = document.createElement("div");

  // generate random id for the alert
  const id = Math.random().toString(36).substr(2, 9);
  newElement.className =
    "fixed top-[10%] right-[-100%] bg-[linear-gradient(265deg,rgb(40,62,80)20%,rgb(53,111,166)100%)] overflow-hidden rounded min-w-[20em] transition-all duration-[500ms] py-1 px-3 shadow-lg popupAlert";
  newElement.style.zIndex = "1000";
  newElement.id = `popupAlert-${id}`;
  newElement.innerHTML = `
      <p class="text-white p-2">
      ${
        type === "success"
          ? `
          <svg fill="#7ead68" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M474.045,173.813c-4.201,1.371-6.494,5.888-5.123,10.088c7.571,23.199,11.411,47.457,11.411,72.1 c0,62.014-24.149,120.315-68,164.166s-102.153,68-164.167,68s-120.316-24.149-164.167-68S16,318.014,16,256 S40.149,135.684,84,91.833s102.153-68,164.167-68c32.889,0,64.668,6.734,94.455,20.017c28.781,12.834,54.287,31.108,75.81,54.315 c3.004,3.239,8.066,3.431,11.306,0.425c3.24-3.004,3.43-8.065,0.426-11.306c-23-24.799-50.26-44.328-81.024-58.047 C317.287,15.035,283.316,7.833,248.167,7.833c-66.288,0-128.608,25.813-175.48,72.687C25.814,127.392,0,189.712,0,256 c0,66.287,25.814,128.607,72.687,175.479c46.872,46.873,109.192,72.687,175.48,72.687s128.608-25.813,175.48-72.687 c46.873-46.872,72.687-109.192,72.687-175.479c0-26.332-4.105-52.26-12.201-77.064 C482.762,174.736,478.245,172.445,474.045,173.813z"></path> <path d="M504.969,83.262c-4.532-4.538-10.563-7.037-16.98-7.037s-12.448,2.499-16.978,7.034l-7.161,7.161 c-3.124,3.124-3.124,8.189,0,11.313c3.124,3.123,8.19,3.124,11.314-0.001l7.164-7.164c1.51-1.512,3.52-2.344,5.66-2.344 s4.15,0.832,5.664,2.348c1.514,1.514,2.348,3.524,2.348,5.663s-0.834,4.149-2.348,5.663L217.802,381.75 c-1.51,1.512-3.52,2.344-5.66,2.344s-4.15-0.832-5.664-2.348L98.747,274.015c-1.514-1.514-2.348-3.524-2.348-5.663 c0-2.138,0.834-4.149,2.351-5.667c1.51-1.512,3.52-2.344,5.66-2.344s4.15,0.832,5.664,2.348l96.411,96.411 c1.5,1.5,3.535,2.343,5.657,2.343s4.157-0.843,5.657-2.343l234.849-234.849c3.125-3.125,3.125-8.189,0-11.314 c-3.124-3.123-8.189-3.123-11.313,0L212.142,342.129l-90.75-90.751c-4.533-4.538-10.563-7.037-16.98-7.037 s-12.448,2.499-16.978,7.034c-4.536,4.536-7.034,10.565-7.034,16.977c0,6.412,2.498,12.441,7.034,16.978l107.728,107.728 c4.532,4.538,10.563,7.037,16.98,7.037c6.417,0,12.448-2.499,16.977-7.033l275.847-275.848c4.536-4.536,7.034-10.565,7.034-16.978 S509.502,87.794,504.969,83.262z"></path> </svg>
          `
          : `
          <svg height="20px" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#b92222"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#c70505" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#c70505" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
          `
      }
          <span class="ml-2">${message}</span>
      </p>
      <div class="h-[3px] absolute left-0 right-0 bottom-0">
        <div class="h-full w-[0%] ${
          type === "error" ? "bg-[#c70505]" : "bg-[#7ead68]"
        } transition-all duration-[5000ms]" id="progress">
        </div>
      </div>
    `;

  document.body.appendChild(newElement);

  setTimeout(() => {
    if (document.getElementById(`popupAlert-${id}`) === null) return;
    document.getElementById(`popupAlert-${id}`).style.right = "1rem";
    document.getElementById(`popupAlert-${id}`).style.opacity = "1.0";
    document.querySelector(`#popupAlert-${id} #progress`).style.width = "100%";
  }, 10);

  setTimeout(() => {
    if (document.getElementById(`popupAlert-${id}`) === null) return;
    document.getElementById(`popupAlert-${id}`).style.opacity = "0";
    document.querySelector(`#popupAlert-${id} #progress`).style.width = "-100%";
  }, 4500);

  setTimeout(() => {
    newElement?.remove();
  }, 5000);
};

export default customAlert;
