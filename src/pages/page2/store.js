
import { Container } from 'unstated'

export default class Page2Container extends Container {
  state = {
    loading: true,
    dataSource: []
  }

  fetch = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        this.setState({loading: false, dataSource: [{id: 1, name: '2kkk', age: 11},{id: 2, name: '2kkk2', age: 12},{id: 3, name: '2kkk3', age: 13}]})
      }, 3000);
    })
  }
}
