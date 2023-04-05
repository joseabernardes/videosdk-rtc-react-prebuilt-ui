import React from "react";

function SDLightIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="92"
      height="56"
      fill="none"
      viewBox="0 0 92 56"
      {...props}
    >
      <rect
        width="90.5"
        height="54.5"
        x="0.75"
        y="0.75"
        stroke={props.strokeColor ? props.strokeColor : "#D3D7DA"}
        strokeWidth="1.5"
        rx="5.25"
      ></rect>
      <rect
        width="80"
        height="44"
        x="6"
        y="6"
        fill={props.strokeColor ? props.strokeColor : "#D3D7DA"}
        rx="2"
      ></rect>
      <path
        fill={props.pathColor ? props.pathColor : "#8896A4"}
        d="M43.305 30.023c0-.203-.032-.385-.094-.546a1.033 1.033 0 00-.328-.454 2.907 2.907 0 00-.68-.414 9.595 9.595 0 00-1.133-.422 14.35 14.35 0 01-1.468-.562 6.03 6.03 0 01-1.22-.727 3.274 3.274 0 01-.827-.976c-.198-.37-.297-.8-.297-1.29 0-.473.104-.903.312-1.288.209-.39.5-.724.875-1a4.156 4.156 0 011.328-.649 6.015 6.015 0 011.696-.226c.838 0 1.57.15 2.195.453.625.302 1.11.716 1.453 1.242.35.526.524 1.128.524 1.805h-2.328c0-.334-.07-.625-.211-.875a1.427 1.427 0 00-.625-.602c-.276-.146-.625-.219-1.047-.219-.407 0-.745.063-1.016.188-.27.12-.474.284-.61.492a1.212 1.212 0 00-.202.688c0 .192.046.367.14.523.1.156.245.302.438.438.192.135.43.263.71.382.282.12.607.237.977.352.62.187 1.164.398 1.633.633.474.234.87.497 1.188.789.317.291.557.622.718.992.162.37.242.79.242 1.258 0 .495-.096.937-.289 1.328-.192.39-.471.721-.836.992-.364.271-.799.477-1.304.617s-1.07.211-1.696.211a6.432 6.432 0 01-1.664-.218 5.052 5.052 0 01-1.492-.68 3.426 3.426 0 01-1.062-1.156c-.266-.47-.399-1.024-.399-1.665h2.352c0 .355.054.654.164.899.11.245.263.443.46.594.204.15.444.26.72.328.28.068.588.101.921.101.407 0 .74-.057 1-.172.266-.114.461-.273.586-.476.13-.203.196-.432.196-.688zM50.735 33h-2.477l.015-1.828h2.461c.615 0 1.133-.138 1.555-.414.422-.281.74-.69.953-1.227.219-.536.328-1.185.328-1.945v-.555c0-.583-.062-1.096-.187-1.539-.12-.443-.3-.815-.54-1.117a2.255 2.255 0 00-.882-.68 2.918 2.918 0 00-1.203-.234H48.21v-1.836h2.547c.76 0 1.456.13 2.086.39a4.704 4.704 0 011.648 1.102c.464.48.82 1.052 1.07 1.719.256.661.383 1.398.383 2.21v.54c0 .807-.127 1.544-.383 2.21a4.925 4.925 0 01-1.07 1.72 4.75 4.75 0 01-1.648 1.101c-.636.255-1.339.383-2.11.383zm-1.15-11.375V33h-2.343V21.625h2.344z"
      ></path>
    </svg>
  );
}

export default SDLightIcon;
