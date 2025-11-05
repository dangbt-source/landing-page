import { useState, useEffect } from 'react';
import { Trash2, TrendingUp, Settings, Bell, Loader2 } from 'lucide-react';
import BinDashboard from './components/BinDashboard';
import BinHistory from './components/BinHistory';
import BinSettings from './components/BinSettings';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 flex flex-col items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <Trash2 className="w-20 h-20 text-white animate-bounce" />
            <Loader2 className="w-8 h-8 text-white absolute -bottom-2 -right-2 animate-spin" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl text-white">Smart Bin Monitor</h1>
            <p className="text-emerald-100">Loading your data...</p>
          </div>
          <div className="flex gap-2 justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Toaster />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-8 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl">Smart Bin Monitor</h1>
          <Bell className="w-6 h-6" />
        </div>
        <p className="text-emerald-100 text-sm">Track your waste levels in real-time</p>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        {activeTab === 'dashboard' && <BinDashboard />}
        {activeTab === 'history' && <BinHistory />}
        {activeTab === 'settings' && <BinSettings />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-3 h-16">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'dashboard'
                ? 'text-emerald-600'
                : 'text-gray-400'
            }`}
          >
            <Trash2 className="w-5 h-5" />
            <span className="text-xs">Dashboard</span>
          </button>
          
          <button
            onClick={() => setActiveTab('history')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'history'
                ? 'text-emerald-600'
                : 'text-gray-400'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs">History</span>
          </button>
          
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'settings'
                ? 'text-emerald-600'
                : 'text-gray-400'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}