import React from 'react';
import { Button } from './@components';
import './App.scss';

function App() {
  const [isProfileOpen, toggleProfile] = React.useState(false);
  const profileWrapperRef = React.useRef(null);
  const [username, setUsername] = React.useState('Jay Tibrewal');

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (profileWrapperRef.current && !profileWrapperRef.current.contains(event.target)) {
        toggleProfile(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileWrapperRef]);

  return (
    <div className="App">
      <header className='header'>
        <div></div>
        <section className='profile-container'>
          <div className='profile-wrapper' ref={profileWrapperRef}>
            <div className='avatar' onClick={toggleProfile}>{username.charAt(0)}</div>
            {isProfileOpen && <div className='items-container'>
              <div>{username}</div>
              <Button sx={{ border: '1px solid black', marginTop: 1.5 }} label='logout' onClick={() => { }} />
            </div>}
          </div>
        </section>
      </header>
      <div className='init-page'>
        <Button primary label='+ Upload files' onClick={() => { }} />
      </div>
    </div>
  );
}

export default App;
