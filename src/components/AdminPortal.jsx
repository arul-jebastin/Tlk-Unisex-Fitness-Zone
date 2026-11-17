import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function AdminPortal({ onExit }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('memberships');

  // Load credentials securely from environment variables (with fallbacks if needed)
  const ADMIN_USER_ID = import.meta.env.VITE_ADMIN_USER_ID || "TLKADMIN";
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "tlkadmin2026";

  // Data States
  const [plans, setPlans] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  // New Plan Form State
  const [newPlan, setNewPlan] = useState({
    category: 'strength',
    name: '',
    price: '',
    badge: '',
    sort_order: 5
  });

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllData();
    }
  }, [isAuthenticated]);

  const fetchAllData = async () => {
    setLoading(true);
    const [plansRes, reviewsRes] = await Promise.all([
      supabase.from('membership_plans').select('*').order('sort_order', { ascending: true }),
      supabase.from('reviews').select('*').order('created_at', { ascending: false })
    ]);

    if (plansRes.data) setPlans(plansRes.data);
    if (reviewsRes.data) setReviews(reviewsRes.data);
    setLoading(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminId.trim().toUpperCase() === ADMIN_USER_ID && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Admin ID or Password!');
    }
  };

  // --- MEMBERSHIP ACTIONS ---
  const handlePlanChange = (id, field, value) => {
    setPlans(plans.map(p => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const savePlan = async (plan) => {
    const { error } = await supabase
      .from('membership_plans')
      .update({ name: plan.name, price: plan.price, badge: plan.badge })
      .eq('id', plan.id);

    if (error) alert('Error updating plan: ' + error.message);
    else alert('Plan updated successfully!');
  };

  const deletePlan = async (id) => {
    if (!window.confirm('Delete this membership plan?')) return;
    const { error } = await supabase.from('membership_plans').delete().eq('id', id);
    if (!error) setPlans(plans.filter(p => p.id !== id));
  };

  const addNewPlan = async (e) => {
    e.preventDefault();
    if (!newPlan.name || !newPlan.price) return;
    const { data, error } = await supabase.from('membership_plans').insert([newPlan]).select();
    if (!error && data) {
      setPlans([...plans, data[0]]);
      setNewPlan({ category: 'strength', name: '', price: '', badge: '', sort_order: plans.length + 1 });
      alert('New plan added!');
    }
  };

  // --- REVIEW ACTIONS ---
  const deleteReview = async (id) => {
    if (!window.confirm('Are you sure you want to delete this review?')) return;
    const { error } = await supabase.from('reviews').delete().eq('id', id);
    if (error) alert('Error deleting review: ' + error.message);
    else setReviews(reviews.filter(r => r.id !== id));
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', color: '#fff' }}>
        <form onSubmit={handleLogin} style={{ background: '#141414', border: '2px solid #dc2626', borderRadius: '12px', padding: '36px', maxWidth: '400px', width: '100%', boxShadow: '0 0 25px rgba(220, 38, 38, 0.4)', textAlign: 'center' }}>
          <h2 style={{ fontStyle: 'italic', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px' }}>
            <span style={{ color: '#dc2626' }}>TLK</span> ADMIN PORTAL
          </h2>
          <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '24px' }}>Enter Admin ID and Password to login</p>
          
          <input
            type="text"
            placeholder="Admin ID (e.g. TLKADMIN)"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #333', background: '#0b0b0b', color: '#fff', marginBottom: '12px', boxSizing: 'border-box' }}
            required
          />

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #333', background: '#0b0b0b', color: '#fff', marginBottom: '16px', boxSizing: 'border-box' }}
            required
          />

          <button type="submit" style={{ width: '100%', padding: '12px', background: '#dc2626', color: '#fff', fontWeight: 800, border: 'none', borderRadius: '6px', cursor: 'pointer', textTransform: 'uppercase' }}>
            Login
          </button>
          
          <button type="button" onClick={onExit} style={{ marginTop: '14px', background: 'transparent', border: 'none', color: '#a3a3a3', cursor: 'pointer', fontSize: '0.85rem', textDecoration: 'underline' }}>
            &larr; Back to Website
          </button>
        </form>
      </div>
    );
  }

  // --- ADMIN DASHBOARD ---
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', padding: '30px 20px', boxSizing: 'border-box' }}>
      <style>{`
        .admin-container { 
          max-width: 1000px; 
          margin: 0 auto; 
          width: 100%;
          box-sizing: border-box;
        }
        .admin-header { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          border-bottom: 2px solid #dc2626; 
          padding-bottom: 16px; 
          margin-bottom: 24px; 
          flex-wrap: wrap; 
          gap: 12px; 
        }
        .tab-bar { 
          display: flex; 
          gap: 10px; 
          margin-bottom: 28px; 
          flex-wrap: wrap; 
        }
        .tab-btn { 
          padding: 10px 20px; 
          border-radius: 6px; 
          border: 1px solid #333; 
          background: #171717; 
          color: #a3a3a3; 
          font-weight: 700; 
          cursor: pointer; 
          text-transform: uppercase; 
          font-size: 0.85rem; 
        }
        .tab-btn.active { 
          background: #dc2626; 
          color: #fff; 
          border-color: #dc2626; 
          box-shadow: 0 0 12px rgba(220, 38, 38, 0.5); 
        }
        .admin-card { 
          background: #141414; 
          border: 2px solid #dc2626; 
          border-radius: 12px; 
          padding: 20px; 
          margin-bottom: 20px; 
          width: 100%;
          box-sizing: border-box;
          box-shadow: 0 0 15px rgba(220, 38, 38, 0.15);
        }
        .admin-input { 
          background: #0b0b0b; 
          border: 1px solid #333; 
          color: #fff; 
          padding: 10px 12px; 
          border-radius: 6px; 
          font-size: 0.9rem; 
          width: 100%;
          box-sizing: border-box;
        }
        .plan-edit-row {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-bottom: 12px;
          background: #0b0b0b;
          border: 1px solid #262626;
          padding: 12px;
          border-radius: 8px;
        }
        .btn-save { 
          background: #16a34a; 
          color: #fff; 
          border: none; 
          padding: 10px 16px; 
          border-radius: 6px; 
          font-weight: 700; 
          cursor: pointer; 
          white-space: nowrap;
        }
        .btn-del { 
          background: #dc2626; 
          color: #fff; 
          border: none; 
          padding: 10px 16px; 
          border-radius: 6px; 
          font-weight: 700; 
          cursor: pointer; 
          white-space: nowrap;
        }

        /* Mobile Optimization */
        @media (max-width: 768px) {
          .plan-edit-row {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
          .admin-card {
            padding: 14px;
          }
          .btn-save, .btn-del {
            width: 100%;
          }
        }
      `}</style>

      <div className="admin-container">
        <div className="admin-header">
          <h1 style={{ fontSize: '1.6rem', fontWeight: 900, fontStyle: 'italic', margin: 0 }}>
            <span style={{ color: '#dc2626' }}>TLK</span> ADMIN DASHBOARD
          </h1>
          <button onClick={onExit} className="btn-del" style={{ background: '#262626' }}>
            Exit to Website &rarr;
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="tab-bar">
          <button className={`tab-btn ${activeTab === 'memberships' ? 'active' : ''}`} onClick={() => setActiveTab('memberships')}>
            1. Membership Plans
          </button>
          <button className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>
            2. Client Reviews ({reviews.length})
          </button>
        </div>

        {loading && <p style={{ color: '#a3a3a3' }}>Loading data...</p>}

        {/* TAB 1: MEMBERSHIP PLANS */}
        {activeTab === 'memberships' && (
          <div>
            <form onSubmit={addNewPlan} className="admin-card">
              <h3 style={{ marginTop: 0, fontSize: '1rem', textTransform: 'uppercase', color: '#dc2626' }}>+ Add New Plan</h3>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <select className="admin-input" value={newPlan.category} onChange={(e) => setNewPlan({ ...newPlan, category: e.target.value })}>
                  <option value="student">Student Plan</option>
                  <option value="strength">Strength Training</option>
                  <option value="cardio">Cardio + Strength</option>
                </select>
                <input className="admin-input" placeholder="Plan Name (e.g. 3 Month)" value={newPlan.name} onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })} required />
                <input className="admin-input" placeholder="Price (e.g. ₹2,800)" value={newPlan.price} onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })} required />
                <input className="admin-input" placeholder="Badge (optional)" value={newPlan.badge} onChange={(e) => setNewPlan({ ...newPlan, badge: e.target.value })} />
                <button type="submit" className="btn-save" style={{ width: '100%' }}>Add Plan</button>
              </div>
            </form>

            {['student', 'strength', 'cardio'].map((cat) => (
              <div key={cat} className="admin-card">
                <h3 style={{ textTransform: 'uppercase', marginTop: 0, borderBottom: '1px solid #262626', paddingBottom: '10px' }}>
                  {cat === 'student' ? '🎓 Student Plans' : cat === 'strength' ? '🏋️‍♂️ Strength Training' : '❤️ Cardio + Strength'}
                </h3>
                {plans.filter(p => p.category === cat).map((plan) => (
                  <div key={plan.id} className="plan-edit-row">
                    <input className="admin-input" value={plan.name} onChange={(e) => handlePlanChange(plan.id, 'name', e.target.value)} />
                    <input className="admin-input" style={{ width: '110px' }} value={plan.price} onChange={(e) => handlePlanChange(plan.id, 'price', e.target.value)} />
                    <input className="admin-input" placeholder="Offer Badge" value={plan.badge || ''} onChange={(e) => handlePlanChange(plan.id, 'badge', e.target.value)} />
                    <button onClick={() => savePlan(plan)} className="btn-save">Save</button>
                    <button onClick={() => deletePlan(plan.id)} className="btn-del">Delete</button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: CLIENT REVIEWS */}
        {activeTab === 'reviews' && (
          <div>
            {reviews.length === 0 ? (
              <p style={{ color: '#a3a3a3' }}>No reviews found.</p>
            ) : (
              reviews.map((rev) => (
                <div key={rev.id} className="admin-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <div>
                    <strong style={{ fontSize: '1.05rem' }}>{rev.name}</strong>{' '}
                    <span style={{ color: '#f59e0b' }}>{'★'.repeat(rev.rating)}</span>
                    <p style={{ color: '#d4d4d4', margin: '6px 0 0 0', fontSize: '0.9rem' }}>"{rev.comment}"</p>
                  </div>
                  <button onClick={() => deleteReview(rev.id)} className="btn-del">Delete Review</button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}