import hacksaw from "/resources/hacksaw.jpeg";
import frames from "/resources/frames.jpeg";
import finnish from "/resources/finnish.jpeg";

export function MainComponent(){
    return (
<>
    <h1>Dasmoto's Arts & Crafts</h1>
<div className="cateContainer">
     <div className="cateBox">
          <h2><a className="brushes">Brushes </a></h2>
          <img src={hacksaw} />
          <h3>Hacksaw Brushed</h3>
          <button>Enter</button>
          <p>Made of the highest quality oak, Hacksaw brushes are not known for their weight and ability
          to hold paint in large amounts. Available in different sizes. <a class="price">Starting at $3.00 / brush.</a></p>
     </div>
     <div className="cateBox">
          <h2><a className="frames">Frames</a></h2>
          <img src={frames} />
          <h3>Art Frames (assorted)</h3>
          <button>Enter</button>
          <p>Assorted frames made of different material, including MDF, birchwood, and PDE. Select frames
          can be sanded and painted according to your needs. <a className="price">Starting at $2.00 / frame.</a></p>
     </div>
     <div class="cateBox">
          <h2><a class="paint">Paint</a></h2>
          <img src={finnish} />
          <h3>Clean Finnish Paint</h3>
          <button>Enter</button>
          <p>Imported paint from Finland. Over 256 colors available in-store, varying in quantity (1 oz. to
          8 oz.). Clean Finnish paint microbinds to canvas, increasing the finish and longevity of any
          artwork. <a className="price">Starting at $5.00 / tube.</a></p>
     </div>
</div>
</>
    )
}