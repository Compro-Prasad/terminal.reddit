import table from './table'
import motd from './motd'
import help from './help'
import simple from './simple'

export default {
  functional: true,
  render (createElement, context) {
    function appropriateResponse () {
      var type = context.props.type

      if (type === 'list') return table
      if (type === 'motd') return motd
      if (type === 'help') return help

      // no component matches the type, default to simple
      return simple
    }

    return createElement(
      appropriateResponse(),
      {
        props: context.props
      },
      'response'
    )
  },
  props: ['content', 'type']
}
