import { useCallback } from 'react'
import Logo from './Logo'
import './Sidebar.css'

const SECTIONS = [
  { num: '01', label: 'HOME', id: 'home' },
  { num: '02', label: 'ABOUT', id: 'about' },
  { num: '03', label: 'SKILLS', id: 'skills' },
  { num: '04', label: 'PROJECTS', id: 'projects' },
  { num: '05', label: 'ACHIEVEMENTS', id: 'achievements' },
  { num: '06', label: 'EDUCATION', id: 'education' },
  { num: '07', label: 'CONTACT', id: 'contact' },
]

function Sidebar({ activeSection }) {
  const handleClick = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <aside className="sidebar" aria-label="Section navigation">
      {/* Brand mark */}
      <div className="sidebar__brand">
        <Logo />
      </div>

      {/* Section links */}
      <nav className="sidebar__nav">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            className={`sidebar__item ${activeSection === section.id ? 'sidebar__item--active' : ''}`}
            onClick={() => handleClick(section.id)}
            aria-label={`Go to ${section.label}`}
          >
            <span className="sidebar__num">{section.num}</span>
            <span className="sidebar__label">{section.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
