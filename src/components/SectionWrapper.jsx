import './SectionWrapper.css'

function SectionWrapper({ id, number, label, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="section__inner">
        <div className="section__header">
          <div className="section__meta">
            <span className="section__number">{number}</span>
            <span className="section__separator">/</span>
            <span className="section__label">{label}</span>
          </div>
          {title && <h2 className="section__title">{title}</h2>}
        </div>
        <div className="section__content">
          {children}
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper
