// import React from 'react';
// import './WebPage.css';

// const WebPage = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const location = event.target.locationInput.value;
//     const destination = event.target.destinationInput.value;

   
//     console.log('Location:', location);
//     console.log('Destination:', destination);

//     event.target.reset();
//   };

//   return (
//     <div>
//       <div className="navbar">
//         <h1>CommuteBeat</h1>
//         <button>Profile</button>
//       </div>

//       <div className="user-input">
//         <h2>Enter your location and destination:</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" id="locationInput" placeholder="Enter location" required />
//           <input type="text" id="destinationInput" placeholder="Enter destination" required />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default WebPage;


import React, { useState } from 'react';
import './WebPage.css';

const WebPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedTransportation, setSelectedTransportation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.locationInput.value;
    const destination = event.target.destinationInput.value;

    console.log('Location:', location);
    console.log('Destination:', destination);

    event.target.reset();
    setIsFormSubmitted(true);
  };

  const handleTransportationSelect = (transportation) => {
    setSelectedTransportation(transportation);
  };

  const handlePrevious = () => {
    setIsFormSubmitted(false);
    setSelectedTransportation('');
  };

  return (
    <div>
      <div className="navbar">
        <h1>CommuteBeat</h1>
        <button>Profile</button>
      </div>

      {!isFormSubmitted ? (
        <div className="user-input">
          <h2>Enter your location and destination:</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" id="locationInput" placeholder="Enter location" required />
            <input type="text" id="destinationInput" placeholder="Enter destination" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="transportation-selection">
          <h2>Select mode of transportation:</h2>
          <div className="transportation-buttons">
            <button
              className={`transportation-button ${selectedTransportation === 'walk' ? 'selected' : ''}`}
              onClick={() => handleTransportationSelect('walk')}
            >
              Walk
            </button>
            <button
              className={`transportation-button ${selectedTransportation === 'cycle' ? 'selected' : ''}`}
              onClick={() => handleTransportationSelect('cycle')}
            >
              Cycle
            </button>
            <button
              className={`transportation-button ${selectedTransportation === 'car' ? 'selected' : ''}`}
              onClick={() => handleTransportationSelect('car')}
            >
              Car
            </button>
            <button
              className={`transportation-button ${selectedTransportation === 'train' ? 'selected' : ''}`}
              onClick={() => handleTransportationSelect('train')}
            >
              Train
            </button>
          </div>
          <div className="button-group">
          <button className="submit-button">Submit</button>
            <button className="previous-button" onClick={handlePrevious}>
              Previous
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebPage;
