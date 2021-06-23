import React from 'react'
import Toolbar from './components/Toolbar'

import { ThemeContext } from './common/context'

// 一: 组件层层嵌套的数据传递 theme 
// function App() {
//   return (
//     <div className="App">
//       <Toolbar theme="#000" />
//     </div>
//   );
// }


// 二： 改用 context 共享数据
function App() {
    return (
        <ThemeContext.Provider value="#00ff00">
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

export default App;
