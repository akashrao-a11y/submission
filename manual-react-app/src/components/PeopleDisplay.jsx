import React from "react";

const PeopleDisplay = ({ people, searchTerm, setSearchTerm }) => {
  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scientists = filteredPeople.filter(person => person.category === "scientist");
  const others = filteredPeople.filter(person => person.category !== "scientist");

  // Simple, Clean Styles - Dark Theme
  const containerStyle = {
    minHeight: '100vh',
    background: '#0f0f23',
    padding: '30px 20px',
  };

  const contentWrapperStyle = {
    maxWidth: '900px',
    margin: '0 auto',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '35px',
  };

  const titleStyle = {
    fontSize: '2.2rem',
    fontWeight: '600',
    color: '#00d4ff',
    marginBottom: '8px',
  };

  const subtitleStyle = {
    fontSize: '1rem',
    color: '#b0b0b0',
  };

  const searchBoxStyle = {
    marginBottom: '25px',
  };

  const searchInputStyle = {
    width: '100%',
    padding: '12px 20px',
    fontSize: '16px',
    border: '2px solid #2d2d44',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
    background: '#1a1a2e',
    color: '#e0e0e0',
  };

  const resultCountStyle = {
    background: '#1a1a2e',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '30px',
    border: '1px solid #2d2d44',
  };

  const countTextStyle = {
    fontSize: '1rem',
    color: '#b0b0b0',
  };

  const countNumberStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#00d4ff',
  };

  const sectionStyle = {
    marginBottom: '35px',
  };

  const sectionTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#e0e0e0',
    marginBottom: '15px',
    paddingBottom: '8px',
    borderBottom: '3px solid #00d4ff',
  };

  const cardStyle = {
    background: '#1a1a2e',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '15px',
    border: '1px solid #2d2d44',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #00d4ff',
  };

  const contentStyle = {
    flex: 1,
  };

  const nameStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#e0e0e0',
    marginBottom: '5px',
  };

  const categoryStyle = {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '500',
    marginBottom: '8px',
    background: '#2d2d44',
    color: '#00d4ff',
  };

  const detailsStyle = {
    fontSize: '0.95rem',
    color: '#b0b0b0',
    lineHeight: '1.5',
  };

  const noResultsStyle = {
    textAlign: 'center',
    padding: '50px 20px',
    background: '#1a1a2e',
    borderRadius: '12px',
    border: '1px solid #2d2d44',
  };

  const renderPeopleList = (peopleList) => (
    peopleList.map((person, index) => (
      <div
        key={index}
        style={cardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 212, 255, 0.2)';
          e.currentTarget.style.borderColor = '#00d4ff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = '#2d2d44';
        }}
      >
        <img
          src={person.photo}
          alt={person.name}
          style={imageStyle}
        />
        <div style={contentStyle}>
          <h3 style={nameStyle}>{person.name}</h3>
          <span style={categoryStyle}>{person.category}</span>
          <p style={detailsStyle}>{person.details}</p>
        </div>
      </div>
    ))
  );

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Famous People</h1>
          <p style={subtitleStyle}>Discover inspiring individuals</p>
        </div>

        {/* Search Box */}
        <div style={searchBoxStyle}>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = '#00d4ff';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#2d2d44';
            }}
          />
        </div>

        {/* Result Count */}
        <div style={resultCountStyle}>
          <span style={countTextStyle}>Found </span>
          <span style={countNumberStyle}>{filteredPeople.length}</span>
          <span style={countTextStyle}> {filteredPeople.length === 1 ? 'person' : 'people'}</span>
        </div>

        {/* Scientists Section */}
        {scientists.length > 0 && (
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Scientists</h2>
            {renderPeopleList(scientists)}
          </div>
        )}

        {/* Others Section */}
        {others.length > 0 && (
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Leaders & Activists</h2>
            {renderPeopleList(others)}
          </div>
        )}

        {/* No Results */}
        {filteredPeople.length === 0 && (
          <div style={noResultsStyle}>
            <p style={{ fontSize: '3rem', margin: '0 0 15px 0' }}>🔍</p>
            <p style={{ fontSize: '1.2rem', color: '#b0b0b0', marginBottom: '5px' }}>No results found</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Try searching with a different name</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeopleDisplay;
