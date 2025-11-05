import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Switch } from './ui/switch';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Bell, Wifi, Download, RefreshCw } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function BinSettings() {
  const [notifications, setNotifications] = useState(true);
  const [autoSync, setAutoSync] = useState(true);
  const [alertThreshold, setAlertThreshold] = useState([80]);

  const handleExportData = () => {
    toast.success('Data exported successfully!');
  };

  const handleResetStats = () => {
    toast.success('Statistics reset successfully!');
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {/* Notifications */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-sm text-gray-500">Get alerts when bins are full</p>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
          
          <div className="pt-4 border-t">
            <p className="font-medium mb-4">Alert Threshold</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Notify when bin reaches:</span>
                <span className="text-emerald-700">{alertThreshold[0]}%</span>
              </div>
              <Slider
                value={alertThreshold}
                onValueChange={setAlertThreshold}
                max={100}
                step={5}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Connection */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Wifi className="w-5 h-5" />
            Device Connection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Auto-Sync</p>
              <p className="text-sm text-gray-500">Automatically sync with Raspberry Pi</p>
            </div>
            <Switch
              checked={autoSync}
              onCheckedChange={setAutoSync}
            />
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Status</span>
              <span className="flex items-center gap-2 text-sm text-emerald-600">
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                Connected
              </span>
            </div>
            <p className="text-xs text-gray-500">Last synced: Just now</p>
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Data Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            onClick={handleExportData}
            variant="outline"
            className="w-full justify-start"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Data (CSV)
          </Button>
          
          <Button
            onClick={handleResetStats}
            variant="outline"
            className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset Statistics
          </Button>
        </CardContent>
      </Card>

      {/* Device Info */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle>Device Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Device ID</span>
            <span>BIN-RPi-001</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Firmware Version</span>
            <span>v1.2.3</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Battery</span>
            <span className="text-emerald-600">98%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Signal Strength</span>
            <span className="text-emerald-600">Excellent</span>
          </div>
        </CardContent>
      </Card>

      {/* App Info */}
      <div className="text-center text-xs text-gray-500 py-4">
        Smart Bin Monitor v1.0.0
        <br />
        Powered by Raspberry Pi
      </div>
    </div>
  );
