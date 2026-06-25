import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

/** Redirect legacy /works/:slug links to the canonical /work/:slug. */
function WorksSlugRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/work/${slug ?? ""}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="work/:slug" element={<ProjectDetailPage />} />

        {/* Convenience / legacy aliases */}
        <Route
          path="project-detail"
          element={<Navigate to="/work/luminary-studio" replace />}
        />
        <Route path="works" element={<Navigate to="/work" replace />} />
        <Route path="works/:slug" element={<WorksSlugRedirect />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
