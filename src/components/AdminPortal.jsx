import React, { useState } from 'react';

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState('reviews');

  // Dummy admin login (Passcode: tlkadmin2026)
  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === 'tlkadmin2026') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Passcode! Try again.');
    }
  };

  const [pendingReviews, setPendingReviews] = useState([
    { id: 1, name: "Karan Kumar", rating: 5, comment: "Best gym in town! The trainers are super supportive." },
    { id: 2, name: "Priya Sundar", rating: 5, comment: "Amazing atmosphere with red glowing vibes and clean space." }
  ]);

  const handleDeleteReview = (id) => {
    setPendingReviews(pendingReviews.filter(rev => rev.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0b0b0b', padding: '20px' }}>
        <form onSubmit={handleLogin} style={{ background: '#141414', border: '2px solid #dc2626', padding: '40px', borderRadius: '12px', width: '100%', maxWidth: '400px', textAlign: 'center', boxShadow: '0 0 25px rgba(220, 38, 38, 0.4)' }}>
          <h2 style={{ color: '#fff', fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '20px' }}>TLK Admin Login</h2>
          <input 
            type="password" 
            placeholder="Enter Admin Passcode" 
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            style={{ width: '100%', padding: '12px', background: '#0b0b0b', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '6px', marginBottom: '20px', outline: 'none', boxSizing: 'border-box' }}
            required
          />
          <button type="submit" style={{ width: '100%', background: '#dc2626', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' }}>
            Access Dashboard
          </button>
          <p style={{ color: '#737373', fontSize: '0.8rem', marginTop: '15px' }}>Default passcode for testing: <b>tlkadmin2026</b></p>
        </form>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '85vh', backgroundColor: '#0b0b0b', color: '#e5e7eb', padding: '40px 20px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #dc2626', paddingBottom: '20px', marginBottom: '30px' }}>
          <h2 style={{ color: '#fff', fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>TLK Admin Control Panel</h2>
          <button onClick={() => setIsAuthenticated(false)} style={{ background: 'transparent', border: '1px solid #dc2626', color: '#dc2626', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Logout
          </button>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '30px' }}>
          <button 
            onClick={() => setActiveTab('reviews')} 
            style={{ background: activeTab === 'reviews' ? '#dc2626' : '#141414', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Manage Reviews ({pendingReviews.length})
          </button>
          <button 
            onClick={() => setActiveTab('membership')} 
            style={{ background: activeTab === 'membership' ? '#dc2626' : '#141414', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Membership Pricing Control
          </button>
        </div>

        {activeTab === 'reviews' && (
          <div style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ color: '#fff', marginBottom: '20px' }}>User Reviews Moderation</h3>
            {pendingReviews.length === 0 ? (
              <p style={{ color: '#a3a3a3' }}>No reviews to moderate right now.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {pendingReviews.map(rev => (
                  <div key={rev.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0b0b0b', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div>
                      <h4 style={{ margin: '0 0 6px 0', color: '#fff' }}>{rev.name} <span style={{ color: '#f59e0b', fontSize: '0.9rem' }}>({"★".repeat(rev.rating)})</span></h4>
                      <p style={{ margin: 0, color: '#d4d4d4', fontSize: '0.9rem' }}>"{rev.comment}"</p>
                    </div>
                    <button onClick={() => handleDeleteReview(rev.id)} style={{ background: 'rgba(220, 38, 38, 0.2)', color: '#fca5a5', border: '1px solid #dc2626', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'membership' && (
          <div style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ color: '#fff', marginBottom: '20px' }}>Active Membership Rates</h3>
            <p style={{ color: '#d4d4d4', lineHeight: 1.6 }}>
              You can update your pricing parameters directly inside your <code>src/components/memberships.jsx</code> file arrays (`studentPlans`, `strengthTrainingPlans`, and `cardioStrengthPlans`).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}