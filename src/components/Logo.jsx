import './Logo.css'

function Logo() {
  return (
    <div className="logo" aria-label="HP Logo">
      <img
        className="logo__img"
        src="/logo.png"
        alt="HP Logo"
      />
    </div>
  )
}

export default Logo
