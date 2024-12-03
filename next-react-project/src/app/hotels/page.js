import HotelBlock from "./HotelBlock";

async function getData()
{
    const res=await fetch(
        "https://snowtooth-hotel-api.fly.dev"
    );
    return res.json();
}

// function HotelBlock({id,name,capacity, cost}){
    
//     const imageLoader=({src}) =>{ 
//         return `./hotels/${src}.jpeg`
//     }
//     return (
//         <tr>
//             <td>{name}</td>
//             <td>{capacity}</td>
//             <td>{cost}</td>
//             <Image scr={id} width={300} height={300} loader={imageLoader}/>
//         </tr>
//     );

// }

export default async function Page()
{
    const data = await getData();
    return(
        <main>
            <div>
                <h1>Hotel Details</h1>
                {/* <div>{JSON.stringify(data)}</div> */}
                <div>
                {/* <thead>
                    <tr>
                        <th>Hotel Name</th>
                        <th>Capacity</th>
                        <th>Cost</th>
                    </tr>                    
                </thead> */}
                
                {data.map((hotel)=>(
                    <HotelBlock id={hotel.id} name={hotel.name} capacity={hotel.capacity} cost={hotel.avgCost}/>
                ))}
                                
            </div>
            </div>
        </main>
    )
}