import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Feed from "./Components/Feed";
import Profile from "./Components/Profile";
import Connections from "./Components/Connection";
import Requests from "./Components/Requests";
import Premium from "./Components/Premium";
import Premiumfront from "./Components/Premiunfront";
import Chat from "./Components/Chat";
import RoadmapCards from "./Components/Roadmap";
import MernRoadmap from "./Components/MernRoadmap";
import AiMlRoadmap from "./Components/AiMl";
import DevOpsRoadmap from "./Components/Devops";
import JavaRoadmap from "./Components/JavaRoadmap";
import DataAnalystRoadmap from "./Components/DataAnalystRoadmap";
import BackendRoadmap from "./Components/BackendRoadmap";
import Quiz from "./Components/Quiz";
import BlogSection from "./Components/Blogs";
import Tasks from "./Components/Todo";
import ProjectIdeas from "./Components/ProjectIdeas";
// import FrontendRoadmap from "./Components/FrontendRoadmap";
function App() {
  return (
  <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections/>} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/premium" element={<Premium/>} />
              <Route path="/premiumfront" element={<Premiumfront/>} />
              <Route path="/roadmaps" element={<RoadmapCards/>} />
              <Route path="/roadmaps/mern" element={<MernRoadmap/>} />
              <Route path="/roadmaps/aiml" element={<AiMlRoadmap/>}/>
              <Route path="/roadmaps/java" element={<JavaRoadmap />}/>
              <Route path="/roadmaps/devops" element={<DevOpsRoadmap />} />
              <Route path="/roadmaps/data-analyst" element={<DataAnalystRoadmap />} />
              <Route path="/roadmaps/backend" element={<BackendRoadmap />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/blogs" element={<BlogSection />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/chat/:toTargetUser" element={<Chat/>} />
              <Route path="/projects" element={<ProjectIdeas />} />
        </Route>
      </Routes> 
    </BrowserRouter>
     </Provider>
  );
}

export default App;
