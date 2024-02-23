import './App.css'

// 2 - Importando componente
import FirstComponente from './components/FirstComponent'

// 4 - Template expression
import TemplateExpression from './components/TemplateExpression'

// 5- Hierarquia de componente
import MyComponent from './components/MyComponent'

// 6 - Eventos
import Events from './components/Events'

function App() {
  // 3 - comentários

  return (
    <>
    {/* 4 - Comentario dentro do JSX */}
    <h1>Fundamentos do React</h1>
    <FirstComponente />
    <TemplateExpression />
    <MyComponent />
    <Events />
    </>
  )
}

export default App
