import "./Demo.css";

const Demo = () => {
  return (
    <div className="demo">
      <div className="container">
        <div className="col-1">
          <p>Main heading</p>
          <p>heading</p>
          <p>paragraph of text</p>
          <button className="button">button</button>
        </div>
        <div className="col-2">
          <iframe
            width="570"
            height="320"
            src="https://www.youtube.com/watch?v=bms_e55PtmE"
            title="youtube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Demo;
