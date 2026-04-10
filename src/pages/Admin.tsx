import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { db, auth, googleProvider } from '../firebase';
import { format } from 'date-fns';
import { Search, Download, LogOut, ShieldAlert } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  email: string;
  createdAt: any;
}

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setLeads([]);
      return;
    }

    const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const leadsData: Lead[] = [];
        snapshot.forEach((doc) => {
          leadsData.push({ id: doc.id, ...doc.data() } as Lead);
        });
        setLeads(leadsData);
        setError('');
      },
      (err) => {
        console.error("Firestore error:", err);
        if (err.message.includes('permission')) {
          setError('You do not have permission to view leads. Only authorized administrators can access this data.');
        } else {
          setError('Error loading leads. Please try again.');
        }
      }
    );

    return () => unsubscribe();
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const exportToCSV = () => {
    const headers = ['Name,Email,Date Submitted'];
    const csvData = filteredLeads.map(lead => {
      const date = lead.createdAt ? format(lead.createdAt.toDate(), 'yyyy-MM-dd HH:mm:ss') : 'N/A';
      return `"${lead.name}","${lead.email}","${date}"`;
    });
    
    const csv = [...headers, ...csvData].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads_export_${format(new Date(), 'yyyy-MM-dd')}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div className="min-h-screen bg-[#111] flex items-center justify-center text-white">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center p-4">
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] max-w-md w-full text-center shadow-xl">
          <ShieldAlert className="w-16 h-16 text-[var(--color-red)] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2 font-['Bebas_Neue'] tracking-wider">Admin Dashboard</h1>
          <p className="text-gray-400 mb-8 text-sm">Secure access restricted to authorized personnel only.</p>
          <button 
            onClick={handleLogin}
            className="w-full bg-white text-black font-semibold py-3 px-4 rounded flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold font-['Bebas_Neue'] tracking-wider text-[var(--color-red-bright)]">Leads Dashboard</h1>
            <p className="text-gray-400 text-sm">Logged in as {user.email}</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm bg-[#1a1a1a] px-4 py-2 rounded border border-[#333]"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        {error ? (
          <div className="bg-red-900/20 border border-red-500/50 text-red-200 p-6 rounded-lg text-center">
            <ShieldAlert className="w-12 h-12 mx-auto mb-3 text-red-500" />
            <h2 className="text-xl font-bold mb-2">Access Denied</h2>
            <p>{error}</p>
          </div>
        ) : (
          <div className="bg-[#1a1a1a] rounded-lg border border-[#333] overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-[#333] flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#161616]">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search leads..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#111] border border-[#333] rounded pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-[var(--color-red)] text-white"
                />
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <span className="text-sm text-gray-400 whitespace-nowrap">
                  Total: <strong className="text-white">{filteredLeads.length}</strong>
                </span>
                <button 
                  onClick={exportToCSV}
                  disabled={filteredLeads.length === 0}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--color-red)] hover:bg-[var(--color-red-bright)] text-white px-4 py-2 rounded text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4" />
                  Export CSV
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#111] border-b border-[#333] text-gray-400 text-xs uppercase tracking-wider">
                    <th className="p-4 font-semibold">Name</th>
                    <th className="p-4 font-semibold">Email</th>
                    <th className="p-4 font-semibold">Date Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id} className="border-b border-[#222] hover:bg-[#222] transition-colors">
                        <td className="p-4 font-medium">{lead.name}</td>
                        <td className="p-4 text-gray-300">{lead.email}</td>
                        <td className="p-4 text-gray-400 text-sm">
                          {lead.createdAt ? format(lead.createdAt.toDate(), 'MMM d, yyyy • h:mm a') : 'Pending...'}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="p-8 text-center text-gray-500">
                        {searchTerm ? 'No leads found matching your search.' : 'No leads collected yet.'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
