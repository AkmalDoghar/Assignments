// components/FeaturesSection.jsx

import { FaBrain, FaComments, FaCogs, FaRobot } from 'react-icons/fa';

export default function FeaturesSection() {
  const features = [
    { icon: <FaBrain />, title: 'AI Powered', desc: 'Intelligent conversations 24/7' },
    { icon: <FaComments />, title: 'Multi-language', desc: 'Supports multiple languages' },
    { icon: <FaCogs />, title: 'Customizable', desc: 'Easily adapt to your brand' },
    { icon: <FaRobot />, title: 'Smart Suggestions', desc: 'Understands context smartly' },
  ];

  return (
    <section className="py-5 bg-gradient-dark text-white">
      <div className="container text-center">
        <h2 className='feature'>Features</h2>
        <div className="row">
          {features.map((f, i) => (
            <div className="col-md-6 col-lg-3 mb-4" key={i}>
              <div className="card h-100  border-1  feature-card p-4">
                <div className="fs-1 mb-3">{f.icon}</div>
                <h5 className="fw-bold">{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
