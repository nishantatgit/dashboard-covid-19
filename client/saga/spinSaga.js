export default function(sagaMiddleware, sagas){
  if(sagaMiddleware){
    return sagas.map( saga => sagaMiddleware.run(saga) )
  }
}