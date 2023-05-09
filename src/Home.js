    import SurfSpot from './SurfSpot'
    import useFetch from "./useFetch";

    const Home = ({data}) => {
    // const { data: spots, isLoading, error} = useFetch('http://localhost:3000/spots')



        return(
            <div className="home"> 
                {/* { error && <div> {error} </div>}
                { isLoading && <div> Loading... </div>} */}
                {data && <SurfSpot spots={data} />}
            </div>
        )
    }

    export default Home;