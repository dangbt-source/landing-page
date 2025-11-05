import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar } from 'lucide-react';

// Mock historical data
const generateHistoricalData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map(day => ({
    day,
    recyclable: Math.floor(Math.random() * 40) + 50,
    nonRecyclable: Math.floor(Math.random() * 40) + 45,
  }));
};

const weeklyData = generateHistoricalData();

const monthlyStats = {
  totalEmptied: 8,
  avgRecyclable: 72,
  avgNonRecyclable: 65,
  recyclablePercentage: 52,
};

export default function BinHistory() {
  return (
    <div className="space-y-6 max-w-md mx-auto">
      {/* Monthly Stats */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Monthly Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-emerald-50 rounded-lg">
              <div className="text-2xl text-emerald-700">{monthlyStats.totalEmptied}</div>
              <p className="text-xs text-gray-600 mt-1">Times Emptied</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl text-blue-700">{monthlyStats.recyclablePercentage}%</div>
              <p className="text-xs text-gray-600 mt-1">Recycled</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Trend Chart */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle>Weekly Fill Levels</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="recyclable" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Recyclable %" 
              />
              <Line 
                type="monotone" 
                dataKey="nonRecyclable" 
                stroke="#6b7280" 
                strokeWidth={2}
                name="Non-Recyclable %" 
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Comparison Chart */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle>Daily Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="recyclable" fill="#10b981" name="Recyclable %" />
              <Bar dataKey="nonRecyclable" fill="#6b7280" name="Non-Recyclable %" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Average Levels */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle>Average Fill Levels</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-gray-600">Recyclable</span>
              <span className="text-emerald-700">{monthlyStats.avgRecyclable}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500"
                style={{ width: `${monthlyStats.avgRecyclable}%` }}
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-gray-600">Non-Recyclable</span>
              <span className="text-gray-700">{monthlyStats.avgNonRecyclable}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gray-500"
                style={{ width: `${monthlyStats.avgNonRecyclable}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}