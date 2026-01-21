export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <svg 
            width="34" 
            height="34" 
            viewBox="0 0 34 34" 
            fill="none"
            aria-hidden="true"
          >
            <path 
              d="M17 0L34 17L17 34L0 17L17 0Z" 
              fill="#2563eb"
            />
            <circle cx="17" cy="17" r="8" fill="white" />
          </svg>
        </div>
        <h1 className="header-title">WeจะLearn</h1>
      </div>
    </header>
  );
}
