import React, {Component} from 'react'


function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default function withAsync (importComponent) {
   class AsyncComponent extends Component {
    state = {
      Component: null
    }

    async componentDidMount () {
      const {default: Component} = await importComponent()
      AsyncComponent.displayName = `Async(${getDisplayName(Component)})`
      this.setState({Component})
    }

    render () {
      const {Component} = this.state
      return Component && <Component {...this.props} />
    }
  }
  return AsyncComponent
}
