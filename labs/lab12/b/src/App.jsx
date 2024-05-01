import useSWR from 'swr';

function App() {

    const {data, error} =
        useSWR('https://www.dnd5eapi.co/api/features',
            (url) =>
                fetch(url).then((res) => res.json())
        );

    if (error) return <p>{error.message}</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <>
            {
                data.results.map((name) =>
                    (
                        <div key={name.id}>
                            <h1>{name.name}</h1>
                        </div>
                    )
                )
            }

        </>
    )
}

export default App
