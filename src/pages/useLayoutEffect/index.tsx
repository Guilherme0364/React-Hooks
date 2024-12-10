const UseLayoutEffectExample = () => {

	return (
		<div style={{ padding: '20px', fontFamily: 'Arial' }}>
			<h1>Exemplo do Hook: useLayoutEffect</h1>
			<p>
				O hook <code>useLayoutEffect</code> é parecido com o useEffect, com a diferença que o useEffect é executado depois
				que o DOM já tiver sido montado pelo React, e o useLayoutEffect é executado antes do DOM ser montado
			</p>
		</div>
	);
};

export default UseLayoutEffectExample;
