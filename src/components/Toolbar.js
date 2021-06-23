
import ThemeButton from './ThemeButton'

// function 


// 一： 通过组件层层嵌套传递 theme 

// export default function Toolbar(props) {
//     return (
//         <div>
//             <ThemeButton theme={props.theme} />
//         </div>
//     )
// }


// 二： 通过 context 共享数据

export default function Toolbar(props) {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}