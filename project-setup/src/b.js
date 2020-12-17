// 리액트 클래스 기반 컴포넌트 (예전 문법)
class App extends React.Component {
	constructor() {}

	render() {
		return <div>Hello World</div>;
	}
}

// 리액트 최신 문법
function App() {
	const [state, setstate] = useState(initialState);

	return <div>Hello World</div>;
}
