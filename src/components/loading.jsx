import "./loading.css";

function Loading() {
  return (
    <div className="loader container">
      <div className="circle">
        <div className="dot" id="d0"></div>
        <div className="dot" id="d1"></div>
        <div className="dot" id="d2"></div>
        <div className="dot" id="d3"></div>
        <div className="dot" id="d4"></div>
        <div className="dot" id="d5"></div>
        <div className="dot" id="d6"></div>
        <div className="dot" id="d7"></div>
      </div>
    </div>
  );
}

export default Loading;
