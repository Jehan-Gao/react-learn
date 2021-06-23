// class
import { Component } from 'react'

import { ThemeContext } from '../common/context'

console.log(ThemeContext)


// 一： 通过层层组件嵌套传递 theme数据

// export default class ThemeButton extends Component {
//     render() {
//         return <button style={{color: this.props.theme}}>Button</button>
//     }
// }

// 二： 使用 context 共享数据

export default class ThemeButton extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => <button style={{color: value}}>1111</button>
                }
            </ThemeContext.Consumer>
        )
    }
}