'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RefreshCw, LogOut, Users, Copy, Check } from 'lucide-react';

interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
}

export function WaitlistViewer() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const fetchWaitlist = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/staff/waitlist');
      
      if (!response.ok) {
        if (response.status === 401) {
          window.location.reload(); // Force re-authentication
          return;
        }
        throw new Error('Failed to fetch waitlist');
      }

      const result = await response.json();
      setEntries(result.data || []);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to load waitlist');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/staff/auth', { method: 'DELETE' });
      window.location.reload();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const copyAllEmails = async () => {
    const emails = entries.map(entry => entry.email).join(', ');
    
    try {
      await navigator.clipboard.writeText(emails);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy emails:', error);
    }
  };

  useEffect(() => {
    fetchWaitlist();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Staff Portal</h1>
            <p className="text-gray-600 mt-1">Current waitlist</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* Stats Card */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Waitlist</p>
                <p className="text-3xl font-bold text-gray-900">{entries.length}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={fetchWaitlist}
                variant="outline"
                size="sm"
                disabled={isLoading}
                className="flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button
                onClick={copyAllEmails}
                variant="outline"
                size="sm"
                disabled={entries.length === 0}
                className="flex items-center gap-2"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Emails
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>

        {/* Waitlist Table */}
        <Card className="p-6 bg-white">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Waitlist Entries</h2>
          
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 mb-4">
              {error}
            </div>
          )}

          {isLoading && entries.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading waitlist...</p>
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No entries yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Added
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {entries.map((entry, index) => (
                    <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {entry.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(entry.created_at).toLocaleString('en-US', {
                          dateStyle: 'medium',
                          timeStyle: 'short',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

