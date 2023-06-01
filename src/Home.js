import SurfSpot from './SurfSpot'

const Home = ({data}) => {

    return(
        <div className="home"> 
            {data && <SurfSpot spots={data} />}
        </div>
    )
}

export default Home;