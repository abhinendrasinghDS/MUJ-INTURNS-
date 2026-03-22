import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { OTPVerification } from "./pages/OTPVerification";
import { StudentDashboard } from "./pages/StudentDashboard";
import { RoadmapPage } from "./pages/RoadmapPage";
import { StudentProfile } from "./pages/StudentProfile";
import { CompanyDashboard } from "./pages/CompanyDashboard";
import { MatchingEngine } from "./pages/MatchingEngine";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/signup",
    Component: SignupPage,
  },
  {
    path: "/verify-otp",
    Component: OTPVerification,
  },
  {
    path: "/student/dashboard",
    Component: StudentDashboard,
  },
  {
    path: "/student/roadmap",
    Component: RoadmapPage,
  },
  {
    path: "/student/profile",
    Component: StudentProfile,
  },
  {
    path: "/student/analytics",
    Component: AnalyticsPage,
  },
  {
    path: "/student/matches",
    Component: MatchingEngine,
  },
  {
    path: "/company/dashboard",
    Component: CompanyDashboard,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
