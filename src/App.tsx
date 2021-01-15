import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from './components/Layout';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route path="*">
          <NotFount></NotFount>
        </Route>
        <Redirect exact from="/" to="/money"/>
      </Switch>
    </Router>
  );
}

function Statistics() {
    return <Layout>
      <h2>统计页面</h2>
    </Layout>;
}

function Tags() {
  return <Layout>
    <h2>标签页面</h2>
  </Layout>;
}

function Money() {
  return <Layout>
    <h2>记账页面</h2>
  </Layout>;
}

function NotFount() {
  return <h2>该页面不存在</h2>;
}

export default App;
