import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, LogOut, Activity } from "lucide-react";
import { getLoginUrl } from "@/const";

/**
 * FitTrack Pro - Home/Login Page
 * Shows login UI when unauthenticated, dashboard when authenticated
 */
export default function Home() {
  const { user, loading, isAuthenticated, logout } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Activity className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl">FitTrack Pro</CardTitle>
            <CardDescription>Track your fitness journey with ease</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 text-center">
              Sign in to start tracking your workouts, monitor progress, and achieve your fitness goals.
            </p>
            <Button 
              onClick={() => window.location.href = getLoginUrl()}
              className="w-full bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              Sign In with Manus
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Secure authentication powered by Manus
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Authenticated view - Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">FitTrack Pro</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Welcome, <span className="font-semibold">{user?.name || user?.email || 'User'}</span>
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => logout()}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Workouts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">0</p>
              <p className="text-sm text-gray-500 mt-2">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">0h</p>
              <p className="text-sm text-gray-500 mt-2">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Calories Burned</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-orange-600">0</p>
              <p className="text-sm text-gray-500 mt-2">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Start tracking your fitness journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Welcome to FitTrack Pro! Here you can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Log your daily workouts</li>
              <li>Track your fitness progress</li>
              <li>Monitor calories and duration</li>
              <li>Set and achieve fitness goals</li>
            </ul>
            <div className="pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start Logging Workouts
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
