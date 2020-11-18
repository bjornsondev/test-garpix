import { Redirect, Route, Switch } from 'react-router-dom';


function Routes(props){
  return (
    <Switch>
      {/* У нас только две страницы, сразу на одну из них переключимся */}
      <Route exact path="/" 
            render={ () => <Redirect to="/partners"/>}/>

      <Route path ="/discount" 
          render={() => <h1 className="container">Скидки и купоны</h1> }/>
      <Route path ="/impression" 
          render={() => <h1 className="container">Впечатления</h1>}/>
      <Route path ="/air-tickets" 
          render={() => <h1 className="container">Авиабилеты</h1>}/>
      <Route path ="/train-tickets" 
          render={() => <h1 className="container">Ж/Д Билеты</h1>}/>
      <Route path ="/hotels" 
          render={() => <h1 className="container">Отели</h1>}/>
      <Route path ="/carsharing" 
          render={() => <h1 className="container">Каршеринг</h1>}/>
      <Route path ="/theaters" 
          render={() => <h1 className="container">Театры</h1>}/>
      <Route path ="/insurance" 
          render={() => <h1 className="container">Страхование</h1>}/>
      <Route path ="/how-to-enter" 
          render={() => <h1 className="container">Как подключиться</h1>}/>
      <Route path ="/partners" 
          render={() => <h1 className="container">Партнеры</h1>}/>
      <Route path ="/offer" 
          render={() => <h1 className="container">Предложение</h1>}/>
    </Switch>
  )
};

export default Routes;