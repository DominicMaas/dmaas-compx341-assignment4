import React from 'react';

function AppHeader({ children }) {

    return (
        <nav className="navbar navbar-dark bg-dark shadow-lg">
            <div className="container">
                <span className="navbar-brand mb-0 h1">NZ Weather Searcher</span>

                {children}
            </div>
        </nav>
    );
}
  
export default AppHeader