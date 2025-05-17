
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Nav from './Components/Nav'

import SubcategoryDetail from './Components/SubcategoryDetail'
import TopicDetail from './Components/TopicDetail.jsx'

function App() {
 return (<>

{/* <Nav/> */}

<Routes>
  <Route path="/" element={<Home/>} ></Route>
  <Route path="/subcategory/:id" element={<SubcategoryDetail />} />
  <Route path="/topic/:topicId" element={<TopicDetail />} />


      </Routes>
    </>
  )
}

export default App
