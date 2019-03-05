import React, { useState } from "react";

export default function ColorPicker() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 240));
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100));
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100));
  const [colorList, setColorList] = useState([]);

  function randomColor() {
    setHue(Math.floor(Math.random() * 240));
    setSaturation(Math.floor(Math.random() * 100));
    setLightness(Math.floor(Math.random() * 100));
  }

  return (
    <>
      <section
        className="color"
        style={{
          backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`
        }}
      >
        Color
      </section>
      <section className="slider">
        <section className="hue">
          <p>Hue</p>
          <input
            type="range"
            className="hue"
            name="hue"
            min="0"
            max="240"
            onChange={event => setHue(event.target.value)}
          />
        </section>
        <section className="saturation">
          <p>Saturation</p>

          <input
            type="range"
            className="saturation"
            name="saturation"
            min="0"
            max="100"
            onChange={event => setSaturation(event.target.value)}
          />
        </section>
        {/* selectRandomColor = () =>{" "}
        {this.setState({
          h: Math.floor(Math.random() * 240),
          s: Math.floor(Math.random() * 100),
          l: Math.floor(Math.random() * 100),q
          a: Math.floor(Math.random() * 100)
        })} */}
        <section className="lightness">
          <p>Lightness</p>

          <input
            type="range"
            className="lightness"
            name="lightness"
            min="0"
            max="100"
            onChange={event => setLightness(event.target.value)}
          />
        </section>
      </section>
      <section className="button_box">
        <button
          className="randomizer"
          onClick={() => randomColor(oldColor => oldColor.concat())}
        >
          Randomizer
        </button>
      </section>
      <h2 className="favorites">
        <em>Keepers:</em>
      </h2>
      <section className="list_container">
        <h1>
          {colorList.map(color => {
            return (
              <p
                className="patch"
                color
                style={
                  {
                    // backgroundColor: ${color}
                  }
                }
              />
            );
            {
            }
          })}
        </h1>
      </section>
    </>
  );
}
