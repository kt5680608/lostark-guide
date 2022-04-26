import { BrowserRouter, Route } from "react-router-dom";
import {
    MainPage,
    GuidePage,
    TermPage,
    HomeworkPage,
    NaesilPage,
    LevelPage,
    DayContentPage,
    WeekContentPage,
} from "./pages";
import { RecoilRoot, atom } from "recoil";
function App() {
    const content = atom({
        key: "contentKey",
        default: 0,
    });
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/guide" component={GuidePage} />
                <Route path="/term" component={TermPage} />
                <Route path="/homework" component={HomeworkPage} />
                <Route path="/guide/naesil" component={NaesilPage} />
                <Route path="/guide/level" component={LevelPage} />
                <Route path="/dayContent" component={DayContentPage} />
                <Route path="/weekContent" component={WeekContentPage} />
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
