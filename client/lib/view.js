import h from 'virtual-dom/h'



export default (state) =>{
  return h('app', {}, [
    h('h1', 'hello ' + state.value, [] )
  ])
}
